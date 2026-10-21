import { useMemo, useState } from 'react'
import { examSimulationIds, oralQuestions } from '../data/oral'
import type { ProgressApi } from '../hooks/useProgress'

export function Oral({ progressApi }: { progressApi: ProgressApi }) {
  const { markOralSeen } = progressApi
  const [mode, setMode] = useState<'browse' | 'exam'>('browse')
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const list = useMemo(
    () =>
      mode === 'exam'
        ? examSimulationIds
            .map((id) => oralQuestions.find((q) => q.id === id)!)
            .filter(Boolean)
        : oralQuestions,
    [mode],
  )

  const q = list[index % list.length]

  const go = (dir: 1 | -1) => {
    setRevealed(false)
    setIndex((i) => (i + dir + list.length) % list.length)
  }

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-semibold">Mundtlig eksamen</h2>
          <p className="mt-1 text-sm text-ink-muted">
            Svar højt først – afslør derefter et eksempelsvar.
          </p>
        </div>
        <div className="flex rounded-xl border border-black/10 bg-white p-1 text-sm">
          <button
            type="button"
            onClick={() => {
              setMode('browse')
              setIndex(0)
              setRevealed(false)
            }}
            className={`rounded-lg px-3 py-1.5 font-medium ${
              mode === 'browse' ? 'bg-ink text-white' : 'text-ink-muted'
            }`}
          >
            Alle
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('exam')
              setIndex(0)
              setRevealed(false)
            }}
            className={`rounded-lg px-3 py-1.5 font-medium ${
              mode === 'exam' ? 'bg-ink text-white' : 'text-ink-muted'
            }`}
          >
            10 min simulation
          </button>
        </div>
      </div>

      {mode === 'exam' && (
        <p className="rounded-xl bg-ww-green-soft px-4 py-3 text-sm">
          Ca. 10 spørgsmål med stigende sværhedsgrad. Brug ~1 minut pr. spørgsmål.
          Spørgsmål {index + 1} / {list.length} · sværhed {q.difficulty}/3
        </p>
      )}

      <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Spørgsmål {index + 1} / {list.length}
          </p>
          <span className="rounded-full bg-surface px-2 py-0.5 text-xs text-ink-muted">
            Niveau {q.difficulty}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
          {q.question}
        </h3>
        {q.slideHint && (
          <p className="mt-3 text-xs text-ink-muted">Hint: {q.slideHint}</p>
        )}

        <p className="mt-6 rounded-xl border border-dashed border-black/15 bg-surface/60 p-4 text-sm text-ink-muted">
          Pause her og svar højt, som til eksamen.
        </p>

        {!revealed ? (
          <button
            type="button"
            onClick={() => {
              setRevealed(true)
              markOralSeen(q.id)
            }}
            className="mt-5 w-full rounded-xl bg-ww-green py-3 text-sm font-semibold text-ink"
          >
            Afslør eksempelsvar
          </button>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-ww-green-soft p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ww-green-dark">
                Eksempelsvar
              </p>
              <p className="mt-2 text-sm leading-relaxed">{q.modelAnswer}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Nævn gerne
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {q.keyTerms.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-black/8 p-4 text-sm">
              <p className="font-semibold">Projekt-eksempel</p>
              <p className="mt-1 text-ink-muted">{q.projectExample}</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          className="rounded-xl border border-black/10 bg-white py-3 text-sm font-semibold"
        >
          Forrige
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="rounded-xl bg-ink py-3 text-sm font-semibold text-white"
        >
          Næste
        </button>
      </div>
    </div>
  )
}
