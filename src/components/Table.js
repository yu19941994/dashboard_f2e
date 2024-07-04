import Classes from './Table.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Table = ({ editUserHandler, deleteUserHandler }) => {
  return (
    <div className={Classes.tableArea}>
      <table className={Classes.table}>
        <thead>
          <tr>
            <th width="180">姓名</th>
            <th width="180">性別</th>
            <th width="240">生日</th>
            <th width="240">職業</th>
            <th width="300">電話</th>
            <th width="100">修改</th>
            <th width="100">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>王小明</td>
            <td>男性</td>
            <td>1994/02/01</td>
            <td>工程師</td>
            <td>0912345678</td>
            <td>
              <button className={Classes.editUser} type="button" onClick={editUserHandler}>
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
              </button>
            </td>
            <td>
              <button className={Classes.deleteUser} type="button" onClick={deleteUserHandler}>
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
          <tr>
            <td>王小明</td>
            <td>男性</td>
            <td>1994/02/01</td>
            <td>工程師</td>
            <td>0912345678</td>
            <td>
              <button className={Classes.editUser} type="button" onClick={editUserHandler}>
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
              </button>
            </td>
            <td>
              <button className={Classes.deleteUser} type="button" onClick={deleteUserHandler}>
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
          <tr>
            <td>王小明</td>
            <td>男性</td>
            <td>1994/02/01</td>
            <td>工程師</td>
            <td>0912345678</td>
            <td>
              <button className={Classes.editUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
              </button>
            </td>
            <td>
              <button className={Classes.deleteUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
          <tr>
            <td>王小明</td>
            <td>男性</td>
            <td>1994/02/01</td>
            <td>工程師</td>
            <td>0912345678</td>
            <td>
              <button className={Classes.editUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
              </button>
            </td>
            <td>
              <button className={Classes.deleteUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
          <tr>
            <td>王小明</td>
            <td>男性</td>
            <td>1994/02/01</td>
            <td>工程師</td>
            <td>0912345678</td>
            <td>
              <button className={Classes.editUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
              </button>
            </td>
            <td>
              <button className={Classes.deleteUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
          <tr>
            <td>王小明</td>
            <td>男性</td>
            <td>1994/02/01</td>
            <td>工程師</td>
            <td>0912345678</td>
            <td>
              <button className={Classes.editUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
              </button>
            </td>
            <td>
              <button className={Classes.deleteUser} type="button">
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  editUserHandler: PropTypes.func.isRequired,
  deleteUserHandler: PropTypes.func.isRequired,
}

export default Table