import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  display: flex;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(-7.5rem / 4);
  }
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  padding: 0 1.25rem;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.3125rem;
  margin-top: 1rem;
`

export const Tag = styled.span`
  background: ${(props) => props.theme.colors['brand-yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  color: ${(props) => props.theme.colors['brand-yellow-dark']};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.text.tag};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  height: 1.3125rem;
  display: flex;
  align-items: center;
`

export const CoffeeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
`

export const CoffeeFooter = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`

export const CoffeeSifra = styled.span`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fontSize.text.s};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
`

export const CoffeePrice = styled.span`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fontSize.title.m};
  font-family: ${(props) => `'${props.theme.fontFamily.Baloo}'`};
  align-items: center;
  display: flex;
`

export const AddToCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors['brand-purple-dark']};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  :not(:disabled):hover {
    background-color: ${(props) => props.theme.colors['brand-purple']};
  }
  :disabled {
    cursor: not-allowed;
  }
`
