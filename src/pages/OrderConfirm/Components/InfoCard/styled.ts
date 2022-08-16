import styled from 'styled-components'

const InfoCardColors = {
  yellow: 'brand-yellow',
  purple: 'brand-purple',
  yellow_dark: 'brand-yellow-dark',
} as const

interface InfoProps {
  color: keyof typeof InfoCardColors
}

export const InfoCardContainer = styled.div<InfoProps>`
  display: flex;
  gap: 1rem;
  div {
    background: ${(props) => props.theme.colors[InfoCardColors[props.color]]};
    border-radius: 50%;
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
  }
  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fontSize.text.m};
    font-family: ${(props) => props.theme.fontFamily.Roboto};

    width: 20rem;
    strong {
      text-transform: capitalize;
    }
  }
`
