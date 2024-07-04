import { useState } from 'react'
import Classes from './Main.module.css'
import Card from "../components/Card"
import Table from '../components/Table'
import ButtonGroup from '../components/ButtonGroup'
import Modal from '../components/Modal'
import Pagination from '../components/Pagination'

const Main = () => {
  const [display, setDisplay] = useState('Card') // Card、Table
  const [openModal, setOpenModal] = useState(false)
  const [modalStatus, setModalStatus] = useState('Add') // Add、Edit、Delete

  const switchHandler = () => {
    setDisplay(display === 'Card' ? 'Table' : 'Card')
  }
  const addUserHandler = () => {
    setOpenModal(true)
    setModalStatus('Add')
  }
  const editUserHandler = () => {
    setOpenModal(true)
    setModalStatus('Edit')
  }
  const deleteUserHandler = () => {
    setOpenModal(true)
    setModalStatus('Delete')
  }
  const cancelModal =() => {
    setOpenModal(false)
  }

  return (
    <div className={Classes.wrapper}>
      {openModal && <Modal cancelModal={cancelModal} modalStatus={modalStatus} />}
      <ButtonGroup
        switchHandler={switchHandler}
        addUserHandler={addUserHandler}
      />
      {display === 'Table' ? (
        <Table
          editUserHandler={editUserHandler}
          deleteUserHandler={deleteUserHandler}
        />
        ) : (
        <Card
          editUserHandler={editUserHandler}
          deleteUserHandler={deleteUserHandler}
        />
        )
      }
      <Pagination />
    </div>
  )
}

export default Main