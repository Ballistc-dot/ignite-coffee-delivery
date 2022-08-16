import styled from 'styled-components'

export const CheckoutContainer = styled.div``

export const CompleteYourOrder = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
`

export const CompleteYourOrderContent = styled.div`
  gap: 2rem;
`

export const CheckoutFormContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  min-height: 23.25rem;
  width: 100%;
  border-radius: 6px;
  margin-top: 0.5rem;
  display: flex;
  flex: 1;
  padding: 1rem 2.5rem;
  flex-direction: column;
`
export const FormHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const FormHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
    font-size: ${(props) => props.theme.fontSize.text.m};
  }
  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
    font-size: ${(props) => props.theme.fontSize.text.s};
  }
`
export const CheckoutTitle = styled.h2`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fontSize.title.xs};
  font-family: ${(props) => `'${props.theme.fontFamily.Baloo}'`};
`
export const FormContainer = styled.form`
  display: flex;
  height: 40rem;
  gap: 2rem;
`
