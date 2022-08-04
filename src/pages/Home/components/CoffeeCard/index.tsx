import {
  CoffeeContainer,
  CoffeeContent,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeTitle,
  Tag,
  TagsContainer,
} from './styles'
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
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag.length * Math.random() * 1.349882}>{tag}</Tag>
        ))}
      </TagsContainer>
      <CoffeeContent>
        <CoffeeTitle>{name}</CoffeeTitle>
        <CoffeeDescription>{description}</CoffeeDescription>
      </CoffeeContent>
      <CoffeeFooter></CoffeeFooter>
    </CoffeeContainer>
  )
}
