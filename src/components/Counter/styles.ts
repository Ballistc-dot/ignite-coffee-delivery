import styled from 'styled-components'

const CounterContainerSizes = {
  lg: '2.375rem',
  md: '2rem',
} as const

interface CounterContainerProps {
  size: keyof typeof CounterContainerSizes
}

export const CounterContainer = styled.div<CounterContainerProps>`
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    width: 1.25rem;
    background: transparent;
    border: none;
    text-align: center;
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.fontSize.text.m};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
  }
  height: ${(props) => CounterContainerSizes[props.size]};
  width: 4.5rem;
  background: ${(props) => props.theme.colors['base-button']};
  justify-content: space-around;
  align-items: center;
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors['brand-purple']};
    :hover {
      color: ${(props) => props.theme.colors['brand-purple-dark']};
    }
  }
`
