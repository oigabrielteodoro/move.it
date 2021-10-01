import React from 'react'
import { AiOutlineCaretRight, AiOutlineClose } from 'react-icons/ai'
import { FaCheckCircle } from 'react-icons/fa'

import { useChallenge, useTimer } from 'context'

import { theme } from 'ui/styles'
import { Button } from '../Button'

import * as S from './Timer.styled'

function formatValue(value: number) {
  return String(value).padStart(2, '0').split('')
}

export function Timer() {
  const {
    isActive,
    hasFinished,
    timer: [minutes, seconds],
    startTimer,
    clearTimer,
  } = useTimer()

  const { completedCount } = useChallenge()

  const [minuteLeft, minuteRight] = formatValue(minutes)
  const [secondLeft, secondRight] = formatValue(seconds)

  const completedCountFormatted = formatValue(completedCount)

  return (
    <S.Container>
      <section>
        <span>Desafios completos</span>
        <span>{completedCountFormatted}</span>
      </section>
      <hr />

      <S.TimerArea>
        <div>
          <h1>{minuteLeft}</h1>
          <h1>{minuteRight}</h1>
        </div>
        <h1>:</h1>
        <div>
          <h1>{secondLeft}</h1>
          <h1>{secondRight}</h1>
        </div>
      </S.TimerArea>

      {hasFinished ? (
        <Button variant='finished' onClick={clearTimer}>
          Ciclo completo
          <FaCheckCircle size={14} color={theme.colors.green[500]} />
        </Button>
      ) : (
        <Button
          variant={isActive ? 'cancel' : 'default'}
          onClick={isActive ? clearTimer : startTimer}
        >
          {isActive ? (
            <>
              Abandonar ciclo
              <AiOutlineClose size={16} />
            </>
          ) : (
            <>
              Iniciar um ciclo
              <AiOutlineCaretRight size={16} />
            </>
          )}
        </Button>
      )}
    </S.Container>
  )
}
