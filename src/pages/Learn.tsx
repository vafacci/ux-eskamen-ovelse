import { useMemo, useState } from 'react'
import { Check, AlertCircle, ChevronLeft } from 'lucide-react'
import {
  categoryLabels,
  topics,
  type Topic,
  type TopicCategory,
} from '../data/topics'
import type { ProgressApi } from '../hooks/useProgress'
import { CrapDemo, HicksDemo, JakobDemo, StatusDemo } from '../components/Demos'

const order: TopicCategory[] = ['designprincipper', 'ux-metoder', 'supplerende']

export function Learn({ progressApi }: { progressApi: ProgressApi }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const { progress, toggleMastered, markWeak } = progressApi

  const active = topics.find((t) => t.id === activeId) ?? null

  const grouped = useMemo(() => {
    return order.map((cat) => ({
      cat,
      items: topics.filter((t) => t.category === cat),
    }))
  }, [])

  if (active) {
    return (
      <TopicDetail
        topic={active}
        mastered={progress.masteredTopics.includes(active.id)}
        weak={progress.weakTopics.includes(active.id)}
        onBack={() => setActiveId(null)}
        onMastered={() => toggleMastered(active.id)}
        onWeak={() => markWeak(active.id)}
      />
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold">Lær</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Vælg et emne – kort forklaring, WashWorld-eksempel og mundtligt svar.
        </p>
      </div>

      {grouped.map(({ cat, items }) => (
        <section key={cat}>
          <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
            {categoryLabels[cat]}
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {items.map((t) => {
              const mastered = progress.masteredTopics.includes(t.id)
              const weak = progress.weakTopics.includes(t.id)
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveId(t.id)}
                  className="rounded-2xl border border-black/8 bg-white p-4 text-left shadow-sm transition hover:border-ww-green/40"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-display font-semibold">{t.title}</p>
                      <p className="mt-1 text-sm text-ink-muted">{t.short}</p>
                    </div>
                    {mastered && (
                      <Check size={16} className="shrink-0 text-ww-green-dark" />
                    )}
                    {weak && !mastered && (
                      <AlertCircle size={16} className="shrink-0 text-amber-600" />
                    )}
                  </div>
                  <span className="mt-3 inline-block rounded-full bg-surface px-2 py-0.5 text-[11px] text-ink-muted">
                    Prioritet {t.priority}
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

function TopicDetail({
  topic,
  mastered,
  weak,
  onBack,
  onMastered,
  onWeak,
}: {
  topic: Topic
  mastered: boolean
  weak: boolean
  onBack: () => void
  onMastered: () => void
  onWeak: () => void
}) {
  return (
    <div className="space-y-5">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
      >
        <ChevronLeft size={16} /> Alle emner
      </button>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ww-green-dark">
          {categoryLabels[topic.category]}
        </p>
        <h2 className="mt-1 font-display text-3xl font-semibold">{topic.title}</h2>
        <p className="mt-2 text-ink-muted">{topic.short}</p>
      </div>

      <Block title="Hvad betyder det?" body={topic.what} />
      <Block title="Hvorfor bruger man det?" body={topic.why} />
      <Block title="WashWorld-eksempel" body={topic.washworld} accent />

      {topic.demo && (
        <div className="space-y-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
            Interaktiv demo
          </h3>
          {topic.demo === 'hicks' && <HicksDemo />}
          {topic.demo === 'status' && <StatusDemo />}
          {topic.demo === 'jakob' && <JakobDemo />}
          {topic.demo === 'crap' && <CrapDemo />}
        </div>
      )}

      <div className="rounded-2xl border border-ww-green/30 bg-ww-green-soft p-5">
        <h3 className="font-display font-semibold">Sig det til eksamen</h3>
        <p className="mt-2 text-sm leading-relaxed">{topic.oral}</p>
        {topic.tips && (
          <ul className="mt-3 space-y-1 text-sm text-ink-muted">
            {topic.tips.map((tip) => (
              <li key={tip}>· {tip}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onMastered}
          className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
            mastered
              ? 'bg-ink text-white'
              : 'bg-ww-green text-ink hover:bg-ww-green-dark hover:text-white'
          }`}
        >
          {mastered ? 'Fjern “kan den”' : 'Kan den'}
        </button>
        <button
          type="button"
          onClick={onWeak}
          className={`rounded-xl border px-4 py-2.5 text-sm font-semibold ${
            weak
              ? 'border-amber-400 bg-amber-50 text-amber-900'
              : 'border-black/10 bg-white hover:bg-surface'
          }`}
        >
          Øv mere
        </button>
      </div>
    </div>
  )
}

function Block({
  title,
  body,
  accent,
}: {
  title: string
  body: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        accent
          ? 'border-ww-green/30 bg-white'
          : 'border-black/8 bg-white'
      }`}
    >
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted">
        {title}
      </h3>
      <p className="mt-2 leading-relaxed">{body}</p>
    </div>
  )
}
