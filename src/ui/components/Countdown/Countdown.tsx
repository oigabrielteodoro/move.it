import { useTimer } from 'context'
import React from 'react'
import { Button } from '../Button'

import * as S from './Countdown.styled'

function getFormattedTimer(value: number) {
  return String(value).padStart(2, '0').split('')
}

export function Countdown() {
  const {
    timer: [minutes, seconds],
    startTimer,
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

      <Button onClick={startTimer}>Iniciar um ciclo</Button>
    </S.Container>
  )
}
