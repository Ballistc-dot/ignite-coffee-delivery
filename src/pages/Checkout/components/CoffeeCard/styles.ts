import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;

  ::after {
    content: '';
    background-color: aliceblue;
    width: 100%;
    border-bottom: solid 1px ${(props) => props.theme.colors['base-button']};
    margin-top: 3rem;
  }
`
export const SelectedCoffeeCard = styled.div`
  padding: 2rem 0;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  img {
    width: 4rem;
    height: 4rem;
  }

  span:first-child {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fontSize.text.m};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
  }
  span:last-child {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fontSize.text.m};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
    font-weight: bold;
  }
  align-items: flex-start;
`

export const SelectedCoffeeContent = styled.div`
  display: flex;
  gap: 1rem;
`
export const SelectedCoffeeButtons = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
  button {
    background: none;
    border: none;
  }
  button:nth-child(2) {
    background: ${(props) => props.theme.colors['base-button']};
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border-radius: 6px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fontSize.text['button-s']};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
    padding: 0.5rem;
    cursor: pointer;
    :hover {
      background: ${(props) => props.theme.colors['base-hover']};
    }
  }
`
export const PriceInfo = styled.div``
