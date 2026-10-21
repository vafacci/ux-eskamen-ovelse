import { useState } from 'react'
import {
  BookOpen,
  Brain,
  HelpCircle,
  Home,
  Mic,
  Shield,
} from 'lucide-react'
import { useProgress } from './hooks/useProgress'
import { topics } from './data/topics'
import { flashcards } from './data/flashcards'
import { quizQuestions } from './data/quiz'
import { Defend } from './pages/Defend'
import { Flashcards } from './pages/Flashcards'
import { HomePage } from './pages/Home'
import { Learn } from './pages/Learn'
import { Oral } from './pages/Oral'
import { Quiz } from './pages/Quiz'

export type PageId =
  | 'home'
  | 'laer'
  | 'flashcards'
  | 'quiz'
  | 'mundtlig'
  | 'forsvar'

const nav: { id: PageId; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Hjem', icon: Home },
  { id: 'laer', label: 'Lær', icon: BookOpen },
  { id: 'flashcards', label: 'Kort', icon: Brain },
  { id: 'quiz', label: 'Quiz', icon: HelpCircle },
  { id: 'mundtlig', label: 'Mundtlig', icon: Mic },
  { id: 'forsvar', label: 'Forsvar', icon: Shield },
]

export default function App() {
  const progressApi = useProgress()
  const [page, setPage] = useState<PageId>('home')
  const { progress } = progressApi

  return (
    <div className="mx-auto flex min-h-dvh max-w-5xl flex-col px-4 pb-24 pt-6 sm:px-6 sm:pb-8">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-ww-green-dark">
            Gruppe 5 · UX.1
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            WashWorld{' '}
            <span className="text-ww-green-dark">Eksamenstræner</span>
          </h1>
          <p className="mt-1 max-w-xl text-sm text-ink-muted">
            Forstå metoderne, husk dem – og forklar dem med jeres projekt.
          </p>
        </div>
        <div className="flex gap-3 text-center text-xs">
          <Stat
            label="Emner"
            value={`${progress.masteredTopics.length}/${topics.length}`}
          />
          <Stat
            label="Kort"
            value={`${progress.flashcardKnown.length}/${flashcards.length}`}
          />
          <Stat
            label="Quiz"
            value={`${progress.quizCorrect.length}/${quizQuestions.length}`}
          />
        </div>
      </header>

      <nav className="mb-6 hidden gap-1 rounded-2xl border border-black/8 bg-white/80 p-1.5 shadow-sm backdrop-blur sm:flex">
        {nav.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setPage(id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
              page === id
                ? 'bg-ink text-white'
                : 'text-ink-muted hover:bg-surface hover:text-ink'
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>

      <main className="flex-1">
        {page === 'home' && (
          <HomePage progressApi={progressApi} onNavigate={setPage} />
        )}
        {page === 'laer' && <Learn progressApi={progressApi} />}
        {page === 'flashcards' && <Flashcards progressApi={progressApi} />}
        {page === 'quiz' && <Quiz progressApi={progressApi} />}
        {page === 'mundtlig' && <Oral progressApi={progressApi} />}
        {page === 'forsvar' && <Defend progressApi={progressApi} />}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-black/8 bg-white/95 px-2 py-2 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-lg justify-between">
          {nav.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setPage(id)}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-medium ${
                page === id ? 'text-ww-green-dark' : 'text-ink-muted'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-black/8 bg-white px-3 py-2 shadow-sm">
      <p className="font-display text-base font-semibold">{value}</p>
      <p className="text-ink-muted">{label}</p>
    </div>
  )
}
