import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

const HeaderButtonsColors = {
  purple: 'brand-purple-light',
  yellow: 'brand-yellow-light',
} as const

interface HeaderButtonsProps {
  color: keyof typeof HeaderButtonsColors
}

export const HeaderButtons = styled.button<HeaderButtonsProps>`
  display: flex;
  background: ${(props) =>
    props.theme.colors[HeaderButtonsColors[props.color]]};

  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  align-items: center;
  gap: 0.25rem;
  span {
    font-size: ${(props) => props.theme.fontSize.text.s};
    color: ${(props) => props.theme.colors['brand-purple-dark']};
    font-family: '${(props) => props.theme.fontFamily.Roboto}';
  }
`
export const CartItensNumber = styled.span`
  width: 2rem;
  height: 2rem;
  position: absolute;
  span {
    top: calc(-1.25rem / 1.5);
    position: absolute;
    right: calc(-1.25rem / 3);
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.text['bold-s']};
    font-family: ${(props) => props.theme.fontFamily.Roboto};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
