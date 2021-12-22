import React, {  useState } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CImg,
  CLabel,
  CInput,
  CSelect
} from '@coreui/react'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'




const ModalBiayaIklan = (props) => {
    const { action, buttonLabel, id,style } = props
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const ModaIklanInput = () => {
      return(
        <CRow>
            <h4 className="font-weight-bold">Tambahkan Biaya Iklan</h4>
            <span>Isi form dibawah ini untuk mengajukkan data Biaya Iklan</span>
            <CRow>
              <CCol xs={12}>
                <CLabel className="mt-2">Biaya Iklan</CLabel>
                <CInput type="text" size='lg' placeholder='Masukkan Biaya Iklan'></CInput>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12}>
                <CButton color='info' size="lg" style={{width:'100%'}} className="mt-3 mb-3 text-white"> Tambah Biaya Iklan </CButton>
              </CCol>
            </CRow>
      </CRow>
      )
  }
  

  return (
    <>
        <CButton 
            color={ 
                action === 'insert' ? 'info' : ''
            } 
            size='lg'
            style ={style}
            className="mr-3 text-white"
            onClick={() => toggle()}
            >
            { buttonLabel }
            { action === 'insert' ? ' Tambah Biaya Iklan' : ''}
        </CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg' centered >
        <ModalHeader toggle={toggle} charCode="Y" className="border-0">
             
        </ModalHeader>
        <ModalBody>
            { action === 'insert' ? ModaIklanInput() : ''
            } 
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalBiayaIklan