import { rgba } from 'polished'
import styled from 'styled-components'
import BackgroundImg from '../../assets/Background.svg'

export const HomeContainer = styled.div`
  margin-bottom: 5rem;
`

export const IntroContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 34rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
  padding: 1rem;
  width: 100vw;
  background: ${({ theme }) => `url(${BackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors.white} 100%,
        ${rgba(theme.colors['base-background'], 0.2)} 20%,
        ${theme.colors['base-background']} 10%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.section`
  display: flex;
  width: 100%;
  flex: 1;
  padding: 2rem 0;

  img {
    display: none;
  }
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    img {
      width: auto;
      height: auto;
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`
export const IntroMain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    text-align: start;
    align-items: flex-start;
    max-width: none;
  }
`

export const IntroTitle = styled.h1`
  color: ${(props) => props.theme.colors['base-title']};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.title.xl};
  }
  font-size: ${(props) => props.theme.fontSize.title.l};
  font-family: ${(props) => `'${props.theme.fontFamily.Baloo}'`};
  line-height: 1.3;
`
export const IntroSubtitle = styled.p`
  color: ${(props) => props.theme.colors['base-subtitle']};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.text.s};
  }
  font-size: ${(props) => props.theme.fontSize.text.l};
  font-family: ${(props) => props.theme.fontFamily.Roboto};
  margin-top: 1rem;
`

export const LabelsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1rem;
  margin-top: 5rem;
`

export const CoffeeListContainer = styled.main`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`

export const CoffeeList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`

export const CoffeeListTitle = styled.h2`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fontSize.title.l};
  font-family: ${(props) => `'${props.theme.fontFamily.Baloo}'`};
`
