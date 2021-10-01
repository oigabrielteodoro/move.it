import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Modal } from 'ui'

import { CHALLENGES, NOTIFICATION } from 'assets'

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
  closeModal: () => void
}

const ChallengeContext = createContext({} as ChallengeContextData)

function getStoragedValue(key: string) {
  const storagedValue = localStorage.getItem(`@move-it:${key}`)

  if (storagedValue) {
    return Number(storagedValue)
  }

  return undefined
}

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(getStoragedValue('level') || 1)
  const [completedCount, setCompletedCount] = useState(
    getStoragedValue('completedCount') || 0,
  )
  const [experienceCount, setExperienceCount] = useState(
    getStoragedValue('experienceCount') || 0,
  )

  const [activeChallenge, setActiveChallenge] = useState<Challenge>()
  const [leveledUp, setLeveledUp] = useState(false)

  const experienceCountToNextLevel = useMemo(
    () => Math.pow((level + 1) * 4, 2),
    [level],
  )

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    localStorage.setItem('@move-it:level', String(level))
    localStorage.setItem('@move-it:experienceCount', String(experienceCount))
    localStorage.setItem('@move-it:completedCount', String(completedCount))
  }, [level, experienceCount, completedCount])

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * CHALLENGES.length)
    const challenge = CHALLENGES[randomChallengeIndex]

    if (!challenge) return

    setActiveChallenge(challenge as Challenge)

    new Audio(NOTIFICATION).play()

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

  const closeModal = () => setLeveledUp(false)

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
        closeModal,
      }}
    >
      {children}

      {leveledUp && <Modal />}
    </ChallengeContext.Provider>
  )
}

export const useChallenge = () => {
  const context = useContext(ChallengeContext)

  if (!context) {
    throw new Error('useChallenge has ChallengeProvider')
  }

  return context
}
