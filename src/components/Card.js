import { useState } from 'react'
import Classes from './Card.module.css'
import DefaultImg2 from '../images/v.jpg'
import DefaultImg from '../images/default.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Card = ({ editUserHandler, deleteUserHandler }) => {
  const [buttonStatus, setButtonStatus] = useState('edit')

  return (
    <div className={Classes.cardArea}>
      <div className={Classes.card}>
        <div className={Classes.cardItem}>
          {/* {buttonStatus && <button className={buttonStatus === 'edit' ? Classes.cardButtonEdit : Classes.cardButtonDelete}>
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </button>
          } */}
          <button className={Classes.cardButtonEdit} onClick={editUserHandler}>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </button>
          <button className={Classes.cardButtonDelete} onClick={deleteUserHandler}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
          <div className={Classes.cardImg}>
            <img src={DefaultImg} alt="" />
          </div>
          <div className={Classes.cardInfo}>
            <div className={Classes.formInput}>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" value="王小明"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="sex">性別</label>
              <input id="sex" type="text" value="男"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="text" value="1994/02/01"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="career">職業</label>
              <input id="career" type="text" value="工程師"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="phone">電話</label>
              <input id="phone" type="text" value="0912345678"/>
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.card}>
        <div className={Classes.cardItem}>
          {/* {buttonStatus && <button className={buttonStatus === 'edit' ? Classes.cardButtonEdit : Classes.cardButtonDelete}>
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </button>
          } */}
          <button className={Classes.cardButtonEdit}>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </button>
          <button className={Classes.cardButtonDelete}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
          <div className={Classes.cardImg}>
            <img src={DefaultImg2} alt="" />
          </div>
          <div className={Classes.cardInfo}>
            <div className={Classes.formInput}>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" value="王小明"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="sex">性別</label>
              <input id="sex" type="text" value="男"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="text" value="1994/02/01"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="career">職業</label>
              <input id="career" type="text" value="工程師"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="phone">電話</label>
              <input id="phone" type="text" value="0912345678"/>
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.card}>
        <div className={Classes.cardItem}>
          {/* {buttonStatus && <button className={buttonStatus === 'edit' ? Classes.cardButtonEdit : Classes.cardButtonDelete}>
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </button>
          } */}
          <button className={Classes.cardButtonEdit}>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </button>
          <button className={Classes.cardButtonDelete}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
          <div className={Classes.cardImg}>
            <img src={DefaultImg} alt="" />
          </div>
          <div className={Classes.cardInfo}>
            <div className={Classes.formInput}>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" value="王小明"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="sex">性別</label>
              <input id="sex" type="text" value="男"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="text" value="1994/02/01"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="career">職業</label>
              <input id="career" type="text" value="工程師"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="phone">電話</label>
              <input id="phone" type="text" value="0912345678"/>
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.card}>
        <div className={Classes.cardItem}>
          {/* {buttonStatus && <button className={buttonStatus === 'edit' ? Classes.cardButtonEdit : Classes.cardButtonDelete}>
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </button>
          } */}
          <button className={Classes.cardButtonEdit}>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </button>
          <button className={Classes.cardButtonDelete}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
          <div className={Classes.cardImg}>
            <img src={DefaultImg} alt="" />
          </div>
          <div className={Classes.cardInfo}>
            <div className={Classes.formInput}>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" value="王小明"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="sex">性別</label>
              <input id="sex" type="text" value="男"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="text" value="1994/02/01"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="career">職業</label>
              <input id="career" type="text" value="工程師"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="phone">電話</label>
              <input id="phone" type="text" value="0912345678"/>
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.card}>
        <div className={Classes.cardItem}>
          {/* {buttonStatus && <button className={buttonStatus === 'edit' ? Classes.cardButtonEdit : Classes.cardButtonDelete}>
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </button>
          } */}
          <button className={Classes.cardButtonEdit}>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </button>
          <button className={Classes.cardButtonDelete}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
          <div className={Classes.cardImg}>
            <img src={DefaultImg2} alt="" />
          </div>
          <div className={Classes.cardInfo}>
            <div className={Classes.formInput}>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" value="王小明"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="sex">性別</label>
              <input id="sex" type="text" value="男"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="text" value="1994/02/01"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="career">職業</label>
              <input id="career" type="text" value="工程師"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="phone">電話</label>
              <input id="phone" type="text" value="0912345678"/>
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.card}>
        <div className={Classes.cardItem}>
          {/* {buttonStatus && <button className={buttonStatus === 'edit' ? Classes.cardButtonEdit : Classes.cardButtonDelete}>
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </button>
          } */}
          <button className={Classes.cardButtonEdit}>
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </button>
          <button className={Classes.cardButtonDelete}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
          <div className={Classes.cardImg}>
            <img src={DefaultImg} alt="" />
          </div>
          <div className={Classes.cardInfo}>
            <div className={Classes.formInput}>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" value="王小明"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="sex">性別</label>
              <input id="sex" type="text" value="男"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="text" value="1994/02/01"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="career">職業</label>
              <input id="career" type="text" value="工程師"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="phone">電話</label>
              <input id="phone" type="text" value="0912345678"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  editUserHandler: PropTypes.func.isRequired,
  deleteUserHandler: PropTypes.func.isRequired,
}

export default Card