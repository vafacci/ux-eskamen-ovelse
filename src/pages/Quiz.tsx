import { useEffect, useState } from 'react'
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
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [round, setRound] = useState<QuizQuestion[]>(() => [...quizQuestions])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    if (!ready || hydrated || selected !== null) return
    setRound(sortQuestions(quizQuestions, progress.quizCorrect, progress.quizWrong))
    setHydrated(true)
  }, [ready, hydrated, selected, progress.quizCorrect, progress.quizWrong])

  const q = round[index % round.length]
  const answered = selected !== null
  const correct = selected === q.correctIndex

  const next = () => {
    const nextIndex = (index + 1) % round.length
    if (nextIndex === 0) {
      setRound(
        sortQuestions(quizQuestions, progress.quizCorrect, progress.quizWrong),
      )
    }
    setIndex(nextIndex)
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

      <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Spørgsmål {(index % round.length) + 1} / {round.length}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
          {q.question}
        </h3>

        <div className="mt-5 space-y-2">
          {q.options.map((opt, i) => {
            let style =
              'border-black/10 bg-white hover:border-ww-green/50 hover:bg-ww-green-soft'
            if (answered) {
              if (i === q.correctIndex)
                style = 'border-ww-green bg-ww-green-soft text-ink'
              else if (i === selected)
                style = 'border-red-300 bg-red-50 text-red-900'
              else style = 'border-black/5 bg-surface text-ink-muted'
            }
            return (
              <button
                key={opt}
                type="button"
                disabled={answered}
                onClick={() => {
                  setSelected(i)
                  markQuiz(q.id, i === q.correctIndex)
                }}
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
            <p>{q.explanation}</p>
            <p className="text-ink-muted">
              <span className="font-medium text-ink">Eksempel: </span>
              {q.example}
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
