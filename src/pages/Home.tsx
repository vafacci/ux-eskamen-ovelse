import {
  BookOpen,
  Brain,
  HelpCircle,
  Mic,
  Shield,
  RotateCcw,
} from 'lucide-react'
import { project } from '../data/project'
import { topics } from '../data/topics'
import type { ProgressApi } from '../hooks/useProgress'
import type { PageId } from '../App'

const cards: {
  id: PageId
  title: string
  desc: string
  icon: typeof BookOpen
}[] = [
  {
    id: 'laer',
    title: 'Lær',
    desc: 'Emner med forklaring, WashWorld-eksempel og mundtligt svar',
    icon: BookOpen,
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    desc: 'Vend kort, markér “kan den” eller “øv igen”',
    icon: Brain,
  },
  {
    id: 'quiz',
    title: 'Quiz',
    desc: 'Multiple choice med forklaring og fremgang',
    icon: HelpCircle,
  },
  {
    id: 'mundtlig',
    title: 'Mundtlig eksamen',
    desc: 'Svar højt, afslør model-svar og key terms',
    icon: Mic,
  },
  {
    id: 'forsvar',
    title: 'Forsvar design',
    desc: 'Argumentér for konkrete designbeslutninger',
    icon: Shield,
  },
]

export function HomePage({
  progressApi,
  onNavigate,
}: {
  progressApi: ProgressApi
  onNavigate: (page: PageId) => void
}) {
  const { progress, reset } = progressApi
  const weak = topics.filter((t) => progress.weakTopics.includes(t.id))
  const mastered = topics.filter((t) => progress.masteredTopics.includes(t.id))

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-black/8 bg-ink text-white shadow-sm">
        <div className="relative p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-ww-green/30 blur-3xl" />
          <p className="text-sm text-white/60">Problemstilling</p>
          <h2 className="mt-2 max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
            {project.problemShort}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            Kerneindsigt: {project.coreInsight}
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-ww-green px-3 py-1 font-semibold text-ink">
              Præsentation 5 min
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Individuel 10 min
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              {project.members.length} i gruppen
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {cards.map(({ id, title, desc, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            className="group rounded-2xl border border-black/8 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-ww-green/50 hover:shadow-md"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ww-green-soft text-ww-green-dark transition group-hover:bg-ww-green">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-ink-muted">{desc}</p>
          </button>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/8 bg-white p-5">
          <h3 className="font-display font-semibold">Mestrer du</h3>
          {mastered.length === 0 ? (
            <p className="mt-2 text-sm text-ink-muted">
              Markér emner som “kan den” under Lær.
            </p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {mastered.map((t) => (
                <li
                  key={t.id}
                  className="rounded-full bg-ww-green-soft px-3 py-1 text-sm text-ww-green-dark"
                >
                  {t.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-2xl border border-black/8 bg-white p-5">
          <h3 className="font-display font-semibold">Øv mere</h3>
          {weak.length === 0 ? (
            <p className="mt-2 text-sm text-ink-muted">
              Emner du markerer som svære dukker op her.
            </p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {weak.map((t) => (
                <li
                  key={t.id}
                  className="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-800"
                >
                  {t.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            if (confirm('Nulstil al fremgang?')) reset()
          }}
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
        >
          <RotateCcw size={14} /> Nulstil fremgang
        </button>
      </div>
    </div>
  )
}
