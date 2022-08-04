export interface CoffeesProps {
  name: string
  tags: string[]
  description: string
  price: number
  image: string
}

export const coffees: CoffeesProps[] = [
  {
    name: 'Expresso Tradicional',
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: 'tradicional.png',
    price: 9.9,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: 'americano.png',
    price: 9.9,
  },
  {
    name: 'Expresso Cremoso',
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: 'cremoso.png',
    price: 9.9,
  },
  {
    name: 'Expresso Gelado',
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: 'gelado.png',
    price: 9.9,
  },
  {
    name: 'Café com leite',
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: 'cafe-com-leite.png',
    price: 9.9,
  },
  {
    name: 'Latte',
    tags: ['tradicional', 'com leite'],
    description: '',

    image: 'latte.png',
    price: 9.9,
  },
  {
    name: 'Capuccino',
    tags: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: 'capuccino.png',
    price: 9.9,
  },
  {
    name: 'Macchiato',
    tags: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: 'macchiato.png',
    price: 9.9,
  },
  {
    name: 'Mocaccino',
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: 'mocaccino.png',
    price: 9.9,
  },
  {
    name: 'Chocolate Quente',
    tags: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: 'chocolate-quente.png',
    price: 9.9,
  },
  {
    name: 'Cubano',
    tags: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: 'cubano.png',
    price: 9.9,
  },
  {
    name: 'Havaiano',
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: 'havaiano.png',
    price: 9.9,
  },
  {
    name: 'Árabe',
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: 'arabe.png',
    price: 9.9,
  },
  {
    name: 'Irlandês',
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: 'irlandes.png',
    price: 9.9,
  },
]
