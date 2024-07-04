import Classes from './Modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Modal = ({ cancelModal, modalStatus }) => {
  return (
    <div className={Classes.modalContainer}>
      <div className={Classes.modal}>

        {modalStatus !== 'Delete' && (
        <>
          <label className={Classes.profilePicture}>
            <FontAwesomeIcon icon="fa-solid fa-image" />
            <input
              className={Classes.fileUploader}
              type="file"
              accept="image/*"
            />
            <span>Browse file to upload</span>
          </label>

          <div className={Classes.infoGroup}>
            <div className={Classes.formInput}>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" value="" placeholder="王小明"/>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="sex">性別</label>
              <select id="sex" name="sex"> 
                <option value="" default disabled>--- 請選擇 ---</option>
                <option>男性</option>
                <option>女性</option>
              </select>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="date" value="" />
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="career">職業</label>
              <select id="career" name="career"> 
                <option value="" default disabled>--- 請選擇 ---</option>
                <option>學生</option>
                <option>工程師</option>
                <option>教師</option>
                <option>無業</option>
              </select>
            </div>
            <div className={Classes.formInput}>
              <label htmlFor="phone">電話</label>
              <input id="phone" type="number" value="" placeholder="0912345678" />
            </div>
          </div>
          </>
          )
        }

        {modalStatus === 'Delete' && <p className={Classes.warning}>確定要刪除這筆資料嗎？</p>}

        <div className={Classes.buttonGroup}>
          <button className={Classes.cancel} type="button" onClick={cancelModal}>
            <FontAwesomeIcon icon="fa-solid fa-rotate-left" />
            <span>Cancel</span>
          </button>
          <button className={Classes.submit} type="button">
            <FontAwesomeIcon icon="fa-solid fa-check" />
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  cancelModal: PropTypes.func.isRequired,
  modalStatus: PropTypes.string.isRequired,
}

export default Modal