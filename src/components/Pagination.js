import Classes from './Pagination.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pagination = () => {
  return (
    <ul className={Classes.pagination}>
      <li>
        <a href="#">
          <FontAwesomeIcon icon="fa-solid fa-angles-left" />
        </a>
      </li>
      <li>
        <a href="#" className={Classes.active}>1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">5</a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon="fa-solid fa-angles-right" />
        </a>
      </li>
    </ul>
  )
}

export default Pagination