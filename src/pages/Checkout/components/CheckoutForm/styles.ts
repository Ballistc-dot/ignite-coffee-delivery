import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`

export const FormContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`
export const DualInputForm = styled.div`
  display: flex;
  gap: 1rem;
`

export const PersonalyInput = styled.div`
  height: 2.625rem;
  background: ${(props) => props.theme.colors['base-input']};
  border: solid 1px ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors['base-label']};
  font-size: ${(props) => props.theme.fontSize.text.s};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: italic;
  width: 100%;
`

export const TripleInputForm = styled.div`
  display: flex;
  gap: 1rem;
`
