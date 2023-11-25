import './styles.css';
import Hero from '../../assets/hero.png'
export default function Navbar(): JSX.Element {
  return (
    <div className='hero-banner'>
      {/* TODO: CONVERT THIS IMAGE TO MASONRY */}
      <img src={Hero} alt="Hero Banner" />

      <div className='hero-banner__text'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}