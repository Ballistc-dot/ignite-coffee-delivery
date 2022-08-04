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
  justify-content: center;
  margin-top: 1rem;
`
