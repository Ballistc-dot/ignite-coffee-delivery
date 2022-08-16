import styled, { css } from 'styled-components'

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  height: 12.9375rem;
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 2rem;
  flex-direction: column;
  input {
    visibility: hidden;
    appearance: none;
  }
  gap: 1rem;
  display: flex;
  align-items: center;

  input:checked + label div {
    border: solid 1px;
    ${({ theme }) => css`
      background: ${theme.colors['brand-purple-light']};
      border-color: ${theme.colors['brand-purple']};
      &:hover {
        background: ${theme.colors['brand-purple-light']};
      }
    `}
  }
`
export const PaymentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5rem;
`
export const PaymentHeaderTexts = styled.div`
  gap: 0.2rem;
  display: flex;
  flex-direction: column;
`
export const PaymentContent = styled.div`
  width: 11.125rem;
  height: 3.1875rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  text-transform: uppercase;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.text['button-s']};
    color: ${theme.colors['base-text']};
    font-family: ${theme.fontFamily.Roboto};
    background: ${theme.colors['base-button']};
  `}
  border-radius: 6px;
  padding: 0.75rem;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`
export const PaymentMethods = styled.div`
  margin-top: 0.35rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
