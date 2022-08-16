import {
  IntroContainer,
  IntroContent,
  IntroMain,
  LabelsContainer,
  HomeContainer,
  CoffeeList,
  CoffeeListTitle,
  CoffeeListContainer,
} from './styles'
import IntroImage from '../../assets/IntroImage.svg'
import { Label } from './components/Label'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'
import { coffees } from '../../fakes/coffees'
import { TextBase, TitleBase } from '../../styles/Tipograph'

export function Home() {
  return (
    <HomeContainer>
      <title>Coffee Delivery</title>

      <IntroContainer>
        <IntroContent className="container">
          <IntroMain>
            <TitleBase color="title" size="xl" fontFamily="Baloo">
              Encontre o café perfeito para qualquer hora do dia
            </TitleBase>
            <TextBase fontFamily="Roboto" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </TextBase>
            <LabelsContainer>
              <Label
                title="Compra simples e segura"
                icon={<ShoppingCart weight="fill" color="#ffff" />}
                color="yellow_dark"
              />
              <Label
                title="Embalagem mantém o café intacto"
                icon={<Package weight="fill" color="#ffff" />}
                color="base_text"
              />
              <Label
                title="Entrega Rapida e rastreada"
                icon={<Timer weight="fill" color="#ffff" />}
                color="yellow"
              />
              <Label
                title="O café chega fresquinho até você"
                icon={<Coffee weight="fill" color="#ffff" />}
                color="purple"
              />
            </LabelsContainer>
          </IntroMain>
          <img src={IntroImage} alt="Intro image" />
        </IntroContent>
      </IntroContainer>
      <CoffeeListContainer className="container">
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard
              id={coffee.id}
              key={coffee.name}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              image={coffee.image}
              price={coffee.price}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
