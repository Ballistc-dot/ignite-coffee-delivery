import styled from 'styled-components'

export const InputContainer = styled.div`
  p {
    color: red;
    font-family: ${(props) => props.theme.fontFamily.Roboto};
    font-size: ${(props) => props.theme.fontSize.text.s};
  }
`

interface InputComponentProps {
  width: 'sm' | 'md' | 'lg' | 'all'
}

export const InputComponent = styled.input<InputComponentProps>`
  height: 2.625rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fontSize.text.s};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  background: none;
  border: none;
  width: 100%;
  :not([type='complement']) {
    background: ${(props) => props.theme.colors['base-input']};
    border: solid 1px ${(props) => props.theme.colors['base-button']};
    border-radius: 6px;
    width: ${(props) => props.theme.inputSize[props.width]};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fontSize.text.s};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
  }
  :focus {
    outline-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`
