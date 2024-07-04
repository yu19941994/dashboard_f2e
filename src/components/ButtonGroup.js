import Classes from './ButtonGroup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const ButtonGroup = ({ switchHandler, addUserHandler }) => {
  return (
    <div className={Classes.buttonGroup}>
      <button className={Classes.addUser} type="button" onClick={addUserHandler}>
        <FontAwesomeIcon icon="fa-solid fa-plus" />
        <span>Add <span>User</span></span>
      </button>
      {/* <button className={Classes.editUser} type="button">
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        <span>Edit <span>User</span></span>
      </button>
      <button className={Classes.deleteUser} type="button">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
        <span>Delete <span>User</span></span>
      </button> */}
      <button className={Classes.switch} type="button" onClick={switchHandler}>
        <FontAwesomeIcon icon="fa-solid fa-table" />
        <span><span>Switch to</span> Table</span>
      </button>
    </div>
  )
}

ButtonGroup.propTypes = {
  switchHandler: PropTypes.func.isRequired,
  addUserHandler: PropTypes.func.isRequired,
}

export default ButtonGroup
