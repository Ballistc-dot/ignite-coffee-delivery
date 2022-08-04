import { ReactNode } from 'react'
import { LabelContainer, LabelIcon, LabelTitle } from './styles'

interface LabelProps {
  title: string
  icon: ReactNode
  color: 'yellow_dark' | 'yellow' | 'base_text' | 'purple'
}

export function Label({ title, icon, color }: LabelProps) {
  return (
    <LabelContainer>
      <LabelIcon color={color}>{icon}</LabelIcon>
      <LabelTitle>{title}</LabelTitle>
    </LabelContainer>
  )
}
