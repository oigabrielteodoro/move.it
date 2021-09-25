import React from 'react'
import { AiOutlineCaretRight, AiOutlineClose } from 'react-icons/ai'
import { FaCheckCircle } from 'react-icons/fa'

import { useTimer } from 'context'

import { theme } from 'ui/styles'
import { Button } from '../Button'

import * as S from './Timer.styled'

function getFormattedTimer(value: number) {
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

  const [minuteLeft, minuteRight] = getFormattedTimer(minutes)
  const [secondLeft, secondRight] = getFormattedTimer(seconds)

  return (
    <S.Container>
      <section>
        <span>Desafios completos</span>
        <span>00</span>
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
          Ciclo completo{' '}
          <FaCheckCircle size={14} color={theme.colors.green[500]} />
        </Button>
      ) : (
        <Button
          variant={isActive ? 'cancel' : 'default'}
          onClick={isActive ? clearTimer : startTimer}
        >
          {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
          {isActive ? (
            <AiOutlineClose size={16} />
          ) : (
            <AiOutlineCaretRight size={16} />
          )}
        </Button>
      )}
    </S.Container>
  )
}
