import './styles.css';
import Logo from '../../assets/airbnb_logo.svg'
export default function Navbar(): JSX.Element {
  return (
    <nav className='navbar'>
      <img src={Logo} alt="Logo Airbnb" />
    </nav>
  )
}