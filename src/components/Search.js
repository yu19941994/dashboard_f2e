import Classes from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
  return (
    <div className={Classes.searchContainer}>
      <input type="text" className={Classes.search} placeholder="Search..."/>
      <button type="button" className={Classes.searchButton}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={Classes.searchIcon} />
      </button>
    </div>
  )
}

export default Search