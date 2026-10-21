import { useEffect, useRef, useState } from 'react'
import { quizQuestions, type QuizQuestion } from '../data/quiz'
import type { ProgressApi } from '../hooks/useProgress'

function sortQuestions(
  questions: QuizQuestion[],
  correctIds: string[],
  wrongIds: string[],
) {
  return [...questions].sort((a, b) => {
    const aWrong = wrongIds.includes(a.id) ? 0 : 1
    const bWrong = wrongIds.includes(b.id) ? 0 : 1
    const aOk = correctIds.includes(a.id) ? 1 : 0
    const bOk = correctIds.includes(b.id) ? 1 : 0
    return aWrong - bWrong || aOk - bOk
  })
}

export function Quiz({ progressApi }: { progressApi: ProgressApi }) {
  const { progress, ready, markQuiz } = progressApi
  const [queue, setQueue] = useState<QuizQuestion[]>(() => [...quizQuestions])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  // Snapshot of the question on screen — never changes while feedback is shown
  const [card, setCard] = useState<QuizQuestion>(() => quizQuestions[0])
  const booted = useRef(false)

  useEffect(() => {
    if (!ready || booted.current) return
    booted.current = true
    const sorted = sortQuestions(
      quizQuestions,
      progress.quizCorrect,
      progress.quizWrong,
    )
    setQueue(sorted)
    setIndex(0)
    setCard(sorted[0])
    setSelected(null)
  }, [ready, progress.quizCorrect, progress.quizWrong])

  const answered = selected !== null
  const correct = selected === card.correctIndex

  const answer = (optionIndex: number) => {
    if (selected !== null) return
    setSelected(optionIndex)
    markQuiz(card.id, optionIndex === card.correctIndex)
  }

  const next = () => {
    const nextIndex = index + 1
    if (nextIndex >= queue.length) {
      const sorted = sortQuestions(
        quizQuestions,
        progress.quizCorrect,
        progress.quizWrong,
      )
      setQueue(sorted)
      setIndex(0)
      setCard(sorted[0])
    } else {
      setIndex(nextIndex)
      setCard(queue[nextIndex])
    }
    setSelected(null)
  }

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h2 className="font-display text-2xl font-semibold">Quiz</h2>
        <p className="mt-1 text-sm text-ink-muted">
          {progress.quizCorrect.length} rigtige · {progress.quizWrong.length} til
          øvelse
        </p>
      </div>

      <div
        key={card.id}
        className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Spørgsmål {index + 1} / {queue.length}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
          {card.question}
        </h3>

        <div className="mt-5 space-y-2">
          {card.options.map((opt, i) => {
            let style =
              'border-black/10 bg-white hover:border-ww-green/50 hover:bg-ww-green-soft'
            if (answered) {
              if (i === card.correctIndex)
                style = 'border-ww-green bg-ww-green-soft text-ink'
              else if (i === selected)
                style = 'border-red-300 bg-red-50 text-red-900'
              else style = 'border-black/5 bg-surface text-ink-muted'
            }
            return (
              <button
                key={`${card.id}-${i}`}
                type="button"
                disabled={answered}
                onClick={() => answer(i)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${style}`}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className="mt-5 space-y-2 rounded-2xl bg-surface p-4 text-sm">
            <p className="font-semibold">
              {correct ? 'Korrekt' : 'Ikke helt'}
            </p>
            <p>{card.explanation}</p>
            <p className="text-ink-muted">
              <span className="font-medium text-ink">Eksempel: </span>
              {card.example}
            </p>
          </div>
        )}
      </div>

      {answered && (
        <button
          type="button"
          onClick={next}
          className="w-full rounded-xl bg-ink py-3 text-sm font-semibold text-white"
        >
          Næste spørgsmål
        </button>
      )}
    </div>
  )
}
