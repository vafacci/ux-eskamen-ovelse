import { useState } from 'react'
import { defendCases } from '../data/defend'
import type { ProgressApi } from '../hooks/useProgress'

export function Defend({ progressApi }: { progressApi: ProgressApi }) {
  const { markDefendSeen } = progressApi
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const c = defendCases[index]

  const next = () => {
    setRevealed(false)
    setIndex((i) => (i + 1) % defendCases.length)
  }

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h2 className="font-display text-2xl font-semibold">Forsvar design</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Træn at argumentere: behov → research → princip.
        </p>
      </div>

      <div className="rounded-3xl border border-black/8 bg-ink p-6 text-white shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-ww-green">
          Designbeslutning {index + 1} / {defendCases.length}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
          {c.decision}
        </h3>
        <p className="mt-3 text-sm text-white/60">{c.context}</p>
      </div>

      <div className="rounded-2xl border border-dashed border-black/15 bg-white p-5 text-sm text-ink-muted">
        Prøv at forklare:
        <ul className="mt-2 space-y-1 text-ink">
          <li>1. Hvilket brugerbehov løser det?</li>
          <li>2. Hvilken research bygger det på?</li>
          <li>3. Hvilket UX-princip understøtter det?</li>
        </ul>
      </div>

      {!revealed ? (
        <button
          type="button"
          onClick={() => {
            setRevealed(true)
            markDefendSeen(c.id)
          }}
          className="w-full rounded-xl bg-ww-green py-3 text-sm font-semibold text-ink"
        >
          Afslør godt eksamenssvar
        </button>
      ) : (
        <div className="space-y-3">
          <Info title="Brugerbehov" body={c.userNeed} />
          <Info title="Research" body={c.research} />
          <Info title="UX-princip" body={c.principle} />
          <div className="rounded-2xl border border-ww-green/40 bg-ww-green-soft p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-ww-green-dark">
              Mundtligt eksempelsvar
            </p>
            <p className="mt-2 text-sm leading-relaxed">{c.modelAnswer}</p>
          </div>
          <button
            type="button"
            onClick={next}
            className="w-full rounded-xl bg-ink py-3 text-sm font-semibold text-white"
          >
            Næste beslutning
          </button>
        </div>
      )}
    </div>
  )
}

function Info({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
        {title}
      </p>
      <p className="mt-1 text-sm leading-relaxed">{body}</p>
    </div>
  )
}
