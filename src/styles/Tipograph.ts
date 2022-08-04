import styled from 'styled-components'

const TitleBaseColors = {
  title: 'base-title',
  subtitle: 'base-subtitle',
  text: 'base-text',
} as const

interface TitleBaseProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  color?: keyof typeof TitleBaseColors
  weight?: string
}

export const TitleBase = styled.h1<TitleBaseProps>`
  color: ${(props) =>
    props.theme.colors[TitleBaseColors[props.color ?? 'title']]};
  font-size: ${(props) => props.theme.fontSize.title[props.size ?? 'xl']};
  font-weight: ${(props) => (props.weight ? props.weight : '')};
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
}

export const TextBase = styled.p<TextBaseProps>`
  color: ${(props) =>
    props.theme.colors[TextBaseColors[props.color ?? 'label']]};
  font-size: ${(props) =>
    props.weight
      ? props.theme.fontSize.text['bold-s']
      : props.theme.fontSize.text[props.size ?? 'l']};
  font-weight: ${(props) => props.weight};
`
