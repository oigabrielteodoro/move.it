import { useChallenge } from 'context/ChallengeContext'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type TimerProviderProps = {
  children: ReactNode
}

type TimerContextData = {
  isActive: boolean
  hasFinished: boolean
  timer: [number, number]
  startTimer: () => void
  clearTimer: () => void
}

const TimerContext = createContext({} as TimerContextData)

let timerId: ReturnType<typeof setTimeout>
const timerInitialValue = 0.1 * 60 // 5 Minutes

export function TimerProvider({ children }: TimerProviderProps) {
  const [timer, setTimer] = useState(timerInitialValue)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const { startNewChallenge, resetChallenge } = useChallenge()

  useEffect(() => {
    if (isActive && timer > 0) {
      timerId = setTimeout(() => {
        setTimer((prevState) => prevState - 1)
      }, 1000)
    } else if (isActive && timer === 0) {
      startNewChallenge()
      clearTimeout(timerId)
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, timer, startNewChallenge])

  const startTimer = () => {
    setIsActive(true)
  }

  const clearTimer = () => {
    resetChallenge()
    setIsActive(false)
    setHasFinished(false)
    setTimer(timerInitialValue)
    timerId && clearTimeout(timerId)
  }

  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60

  return (
    <TimerContext.Provider
      value={{
        hasFinished,
        timer: [minutes, seconds],
        isActive,
        startTimer,
        clearTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => {
  const context = useContext(TimerContext)

  if (!context) {
    throw new Error('useTimer has TimerProvider')
  }

  return context
}
