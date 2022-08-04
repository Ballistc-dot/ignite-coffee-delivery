import styled from 'styled-components'

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const LabelTitle = styled.span`
  color: ${(props) => props.theme.colors['base-text']};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.text.m};
  }
  font-size: ${(props) => props.theme.fontSize.text.tag};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
`

const LabelColors = {
  yellow_dark: 'brand-yellow-dark',
  yellow: 'brand-yellow',
  base_text: 'base-text',
  purple: 'brand-purple',
} as const

interface LabelProps {
  color: keyof typeof LabelColors
}

export const LabelIcon = styled.span<LabelProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.colors[LabelColors[props.color]]};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`
