import { useMemo, useState } from 'react'
import { flashcards } from '../data/flashcards'
import type { ProgressApi } from '../hooks/useProgress'

export function Flashcards({ progressApi }: { progressApi: ProgressApi }) {
  const { progress, markFlashcard } = progressApi
  const [onlyAgain, setOnlyAgain] = useState(false)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const deck = useMemo(() => {
    const base = onlyAgain
      ? flashcards.filter((c) => progress.flashcardAgain.includes(c.id))
      : [...flashcards].sort((a, b) => {
          const aWeak = progress.flashcardAgain.includes(a.id) ? 0 : 1
          const bWeak = progress.flashcardAgain.includes(b.id) ? 0 : 1
          const aKnown = progress.flashcardKnown.includes(a.id) ? 1 : 0
          const bKnown = progress.flashcardKnown.includes(b.id) ? 1 : 0
          return aWeak - bWeak || aKnown - bKnown
        })
    return base.length ? base : flashcards
  }, [onlyAgain, progress.flashcardAgain, progress.flashcardKnown])

  const card = deck[index % deck.length]

  const next = () => {
    setFlipped(false)
    setIndex((i) => (i + 1) % deck.length)
  }

  return (
    <div className="mx-auto max-w-lg space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-semibold">Flashcards</h2>
          <p className="mt-1 text-sm text-ink-muted">
            {progress.flashcardKnown.length} kan du ·{' '}
            {progress.flashcardAgain.length} øves igen
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={onlyAgain}
            onChange={(e) => {
              setOnlyAgain(e.target.checked)
              setIndex(0)
              setFlipped(false)
            }}
            className="accent-ww-green-dark"
          />
          Kun “øv igen”
        </label>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="group relative min-h-[260px] w-full rounded-3xl border border-black/10 bg-white p-6 text-left shadow-sm transition hover:border-ww-green/40"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          {flipped ? 'Bagside' : 'Forside'} · tryk for at vende
        </p>
        {!flipped ? (
          <p className="mt-8 font-display text-2xl font-semibold leading-snug">
            {card.front}
          </p>
        ) : (
          <div className="mt-6 space-y-3">
            <p className="text-lg leading-relaxed">{card.back}</p>
            <p className="rounded-xl bg-ww-green-soft p-3 text-sm">
              <span className="font-semibold">WashWorld: </span>
              {card.example}
            </p>
          </div>
        )}
      </button>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => {
            markFlashcard(card.id, false)
            next()
          }}
          className="rounded-xl border border-black/10 bg-white py-3 text-sm font-semibold hover:bg-surface"
        >
          Øv igen
        </button>
        <button
          type="button"
          onClick={() => {
            markFlashcard(card.id, true)
            next()
          }}
          className="rounded-xl bg-ww-green py-3 text-sm font-semibold text-ink hover:bg-ww-green-dark hover:text-white"
        >
          Kan den
        </button>
      </div>

      <p className="text-center text-xs text-ink-muted">
        Kort {(index % deck.length) + 1} / {deck.length}
      </p>
    </div>
  )
}
