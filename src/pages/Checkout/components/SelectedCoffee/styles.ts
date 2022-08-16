import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  width: 28rem;
  height: 37rem;
`
export const SelectedCoffeeContent = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  min-height: 31.125rem;
  width: 100%;
  border-radius: 6px 44px 6px 44px;
  margin-top: 0.5rem;
  display: flex;
  flex: 1;
  padding: 1rem 2.5rem;
  flex-direction: column;
  justify-content: space-between;
`
export const SelectedCoffeeFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`

export const FooterTextBase = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CheckoutTitle = styled.h2`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fontSize.title.xs};
  font-family: ${(props) => `'${props.theme.fontFamily.Baloo}'`};
`

export const FooterTextContainer = styled(FooterTextBase)`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fontSize.text.s};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
`
export const FooterTotalContainer = styled(FooterTextBase)`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fontSize.text.l};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.Roboto};
`
export const ConfirmButton = styled.button`
  height: 2.875rem;
  width: 100%;
  background: ${(props) => props.theme.colors['brand-yellow']};
  border: none;
  border-radius: 6px;
  font-size: ${(props) => props.theme.fontSize.text['button-g']};
  color: #fff;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  cursor: pointer;
`
