import React from 'react'
import { FiX } from 'react-icons/fi'

import { WIN } from 'assets'
import { useChallenge } from 'context'

import * as S from './Modal.styled'

export function Modal() {
  const { level, closeModal } = useChallenge()

  return (
    <S.Overlay>
      <S.Content>
        <S.CloseButton onClick={closeModal}>
          <FiX size={20} />
        </S.CloseButton>

        <main>
          <S.NewLevel>
            <strong>{level}</strong>
            <img
              src={WIN}
              alt='Nível avançado!'
              width={level > 10 ? 200 : 150}
            />
          </S.NewLevel>
          <h1>Parabéns</h1>
          <h3>Você alcançou um novo level.</h3>
        </main>
      </S.Content>
    </S.Overlay>
  )
}
