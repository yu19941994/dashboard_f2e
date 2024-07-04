import Classes from './Header.module.css'
import Search from '../components/Search'

const Header = () => {
  return (
    <nav className={Classes.header}>
      <Search />
    </nav>
  )
}

export default Header