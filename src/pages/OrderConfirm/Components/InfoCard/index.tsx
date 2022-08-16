import { ReactNode } from 'react'
import { InfoCardContainer } from './styled'

interface InfoCardProps {
  children: ReactNode
  icon: ReactNode
  color: 'purple' | 'yellow' | 'yellow_dark'
}

export function InfoCard({ children, icon, color }: InfoCardProps) {
  return (
    <InfoCardContainer color={color}>
      <div>{icon}</div>
      <p>{children}</p>
    </InfoCardContainer>
  )
}
