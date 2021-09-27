import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { CHALLENGES } from 'assets'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengeProviderProps = {
  children: ReactNode
}

type ChallengeContextData = {
  level: number
  leveledUp: boolean
  completedCount: number
  experienceCount: number
  activeChallenge?: Challenge
  experienceCountToNextLevel: number
  completeChallenge: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
}

const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1)
  const [completedCount, setCompletedCount] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState<Challenge>()
  const [leveledUp, setLeveledUp] = useState(false)

  const experienceCountToNextLevel = useMemo(
    () => Math.pow((level + 1) * 4, 2),
    [level],
  )

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() + CHALLENGES.length)
    const challenge = CHALLENGES[randomChallengeIndex]

    if (!challenge) return

    setActiveChallenge(challenge as Challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} de xp!`,
        silent: false,
      })
    }
  }, [])

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    const finalExperience = experienceCount + amount

    if (finalExperience >= experienceCountToNextLevel) {
      setLevel((prevState) => prevState + 1)
      setLeveledUp(true)
    }

    setCompletedCount((prevState) => prevState + 1)
    setExperienceCount(finalExperience)
    setActiveChallenge(undefined)
  }, [activeChallenge, experienceCount, experienceCountToNextLevel])

  const resetChallenge = useCallback(() => {
    setActiveChallenge(undefined)
  }, [])

  return (
    <ChallengeContext.Provider
      value={{
        level,
        leveledUp,
        completedCount,
        experienceCount,
        activeChallenge,
        experienceCountToNextLevel,
        completeChallenge,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
