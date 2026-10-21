import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'ux-examen-progress-v1'

export interface ProgressState {
  masteredTopics: string[]
  weakTopics: string[]
  flashcardKnown: string[]
  flashcardAgain: string[]
  quizCorrect: string[]
  quizWrong: string[]
  oralSeen: string[]
  defendSeen: string[]
}

const defaultProgress: ProgressState = {
  masteredTopics: [],
  weakTopics: [],
  flashcardKnown: [],
  flashcardAgain: [],
  quizCorrect: [],
  quizWrong: [],
  oralSeen: [],
  defendSeen: [],
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultProgress }
    return { ...defaultProgress, ...JSON.parse(raw) }
  } catch {
    return { ...defaultProgress }
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setProgress(load())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress, ready])

  const toggleMastered = useCallback((topicId: string) => {
    setProgress((p) => {
      const has = p.masteredTopics.includes(topicId)
      return {
        ...p,
        masteredTopics: has
          ? p.masteredTopics.filter((id) => id !== topicId)
          : [...p.masteredTopics, topicId],
        weakTopics: p.weakTopics.filter((id) => id !== topicId),
      }
    })
  }, [])

  const markWeak = useCallback((topicId: string) => {
    setProgress((p) => ({
      ...p,
      weakTopics: p.weakTopics.includes(topicId)
        ? p.weakTopics
        : [...p.weakTopics, topicId],
      masteredTopics: p.masteredTopics.filter((id) => id !== topicId),
    }))
  }, [])

  const markFlashcard = useCallback((id: string, known: boolean) => {
    setProgress((p) => {
      if (known) {
        return {
          ...p,
          flashcardKnown: p.flashcardKnown.includes(id)
            ? p.flashcardKnown
            : [...p.flashcardKnown, id],
          flashcardAgain: p.flashcardAgain.filter((x) => x !== id),
        }
      }
      return {
        ...p,
        flashcardAgain: p.flashcardAgain.includes(id)
          ? p.flashcardAgain
          : [...p.flashcardAgain, id],
        flashcardKnown: p.flashcardKnown.filter((x) => x !== id),
      }
    })
  }, [])

  const markQuiz = useCallback((id: string, correct: boolean) => {
    setProgress((p) => {
      if (correct) {
        return {
          ...p,
          quizCorrect: p.quizCorrect.includes(id)
            ? p.quizCorrect
            : [...p.quizCorrect, id],
          quizWrong: p.quizWrong.filter((x) => x !== id),
        }
      }
      return {
        ...p,
        quizWrong: p.quizWrong.includes(id) ? p.quizWrong : [...p.quizWrong, id],
        quizCorrect: p.quizCorrect.filter((x) => x !== id),
      }
    })
  }, [])

  const markOralSeen = useCallback((id: string) => {
    setProgress((p) => ({
      ...p,
      oralSeen: p.oralSeen.includes(id) ? p.oralSeen : [...p.oralSeen, id],
    }))
  }, [])

  const markDefendSeen = useCallback((id: string) => {
    setProgress((p) => ({
      ...p,
      defendSeen: p.defendSeen.includes(id) ? p.defendSeen : [...p.defendSeen, id],
    }))
  }, [])

  const reset = useCallback(() => {
    setProgress({ ...defaultProgress })
  }, [])

  return {
    progress,
    ready,
    toggleMastered,
    markWeak,
    markFlashcard,
    markQuiz,
    markOralSeen,
    markDefendSeen,
    reset,
  }
}

export type ProgressApi = ReturnType<typeof useProgress>
