import Card, { CardProps } from "../Card"
import './styles.css'
// TODO: CREATE A NEW LAYER OF DATA FOR INJECT DATA
const data: CardProps[] = [
  {
    description: 'Life Lessons with Katie Zaferes',
    from: 'BRA',
    price: 129,
    ratingAvarage: 5.8,
    ratingCount: 35,
    image: 'photo_1.png',
    available: 0
  },
  {
    description: 'Learn Wedding Photography',
    from: 'USA',
    price: 129,
    ratingAvarage: 5.8,
    ratingCount: 35,
    image: 'photo_2.png',
    available: 10
  },
  {
    description: 'Group Mountain Biking',
    from: 'USA',
    price: 129,
    ratingAvarage: 5.8,
    ratingCount: 35,
    image: 'photo_3.png',
  },
]

const cards = data.map((item, index) => {
  return (
    <Card {...item} key={`card-${index}`} />
  )
})

export default function Carousel(): JSX.Element {
  return (
    <section className="carousel">
      {cards}
    </section>
  )
}