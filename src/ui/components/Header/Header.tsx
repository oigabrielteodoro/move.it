import { useChallenge } from 'context'
import React, { useMemo } from 'react'

import * as S from './Header.styled'

export function Header() {
  const { experienceCount, experienceCountToNextLevel } = useChallenge()

  const percentToNextLevel = useMemo(
    () => Math.round(experienceCount * 100) / experienceCountToNextLevel,
    [experienceCount, experienceCountToNextLevel],
  )

  return (
    <S.Container>
      <span>0 xp</span>
      <S.Progress progress={percentToNextLevel}>
        <span>{experienceCount} xp</span>
      </S.Progress>
      <span>{experienceCountToNextLevel} xp</span>
    </S.Container>
  )
}
