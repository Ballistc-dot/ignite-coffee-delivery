import styled from 'styled-components'
import BackgroundImg from '../../assets/Background.svg'

export const HomeContainer = styled.div`
  margin-bottom: 5rem;
`

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background: url(${BackgroundImg}) no-repeat center;
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
`
export const IntroMain = styled.div``

export const IntroTitle = styled.h1`
  color: ${(props) => props.theme.colors['base-title']};
  font-size: ${(props) => props.theme.fontSize.title.xl};
  font-family: ${(props) => `'${props.theme.fontFamily.Baloo}'`};
  line-height: 1.3;
`
export const IntroSubtitle = styled.p`
  color: ${(props) => props.theme.colors['base-subtitle']};
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

export const CoffeeListContainer = styled.main``
export const CoffeeList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CoffeeListTitle = styled.h2`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fontSize.title.l};
  font-family: ${(props) => `'${props.theme.fontFamily.Baloo}'`};
`
