import styled from 'styled-components'

const TitleBaseColors = {
  title: 'base-title',
  subtitle: 'base-subtitle',
  text: 'base-text',
  yellow_dark: 'brand-yellow-dark',
} as const

interface TitleBaseProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl'
  color: keyof typeof TitleBaseColors
  weight?: string
  fontFamily: 'Roboto' | 'Baloo'
}

export const TitleBase = styled.h1<TitleBaseProps>`
  color: ${(props) => props.theme.colors[TitleBaseColors[props.color]]};
  font-size: ${(props) => props.theme.fontSize.title[props.size]};
  font-weight: ${(props) => (props.weight ? props.weight : '')};
  font-family: ${(props) => `'${props.theme.fontFamily[props.fontFamily]}'`};
  line-height: 1.3;
`

const TextBaseColors = {
  text: 'base-text',
  subtitle: 'base-subtitle',
  label: 'base-label',
  brandPurple: 'brand-purple-dark',
  brandYellow: 'brand-yellow-dark',
} as const

interface TextBaseProps {
  size?: 'l' | 'm' | 's'
  color?: keyof typeof TextBaseColors
  weight?: 'bold' | 'normal'
  fontFamily: 'Roboto' | 'Baloo'
}

export const TextBase = styled.p<TextBaseProps>`
  color: ${(props) =>
    props.theme.colors[TextBaseColors[props.color ?? 'label']]};
  font-size: ${(props) =>
    props.weight
      ? props.theme.fontSize.text['bold-s']
      : props.theme.fontSize.text[props.size ?? 'l']};
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => `'${props.theme.fontFamily[props.fontFamily]}'`};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.text.s};
  }
`
