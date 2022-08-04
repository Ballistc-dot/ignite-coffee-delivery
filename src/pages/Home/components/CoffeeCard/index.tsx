import { CoffeeContainer } from './styles'
import { CoffeesProps } from '../../../../fakes/coffees'

export function CoffeeCard({
  name,
  description,
  tags,
  image,
  price,
}: CoffeesProps) {
  return (
    <CoffeeContainer>
      <img src={`/coffees/${image}`} alt="" />
    </CoffeeContainer>
  )
}
