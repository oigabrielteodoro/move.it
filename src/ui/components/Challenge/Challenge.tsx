import React from 'react'

import { useChallenge, useTimer } from 'context'

import { BODY_ICON, EYE_ICON, UP_ICON } from 'assets'

import * as S from './Challenge.styled'

const icons = {
  body: BODY_ICON,
  eye: EYE_ICON,
}

export function Challenge() {
  const { isActive, clearTimer } = useTimer()
  const { activeChallenge, completeChallenge, resetChallenge } = useChallenge()

  const handleCompleted = () => {
    completeChallenge()
    clearTimer()
  }

  const handleFailed = () => {
    resetChallenge()
    clearTimer()
  }

  if (isActive) {
    return (
      <S.StartedContainer>
        <S.Title>
          Inicie um ciclo <br /> para receber desafios a<br />
          serem completados
        </S.Title>

        <main>
          <img src={UP_ICON} alt='Seta para cima' />
          <p>
            Complete-os e ganhe
            <br /> experiência e avance de level.
          </p>
        </main>
      </S.StartedContainer>
    )
  }

  if (activeChallenge) {
    return (
      <S.ActiveContainer>
        <header>Ganhe {activeChallenge.amount} xp</header>
        <hr />

        <main>
          <img
            src={icons[activeChallenge.type]}
            alt={activeChallenge.description}
          />

          <strong>Novo desafio</strong>
          <p>{activeChallenge.description}</p>
        </main>

        <footer>
          <button className='failed' onClick={handleFailed}>
            Falhei
          </button>
          <button className='completed' onClick={handleCompleted}>
            Completei
          </button>
        </footer>
      </S.ActiveContainer>
    )
  }

  return (
    <S.InitialContainer>
      <S.Title>
        Inicie um ciclo <br /> para receber desafios
      </S.Title>
      <img src={UP_ICON} alt='Seta para cima' />
      <p>
        Avançe de level completando
        <br /> os desafios.
      </p>
    </S.InitialContainer>
  )
}
