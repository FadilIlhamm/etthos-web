import React, {  useState } from 'react'
import {
  CButton,
  CRow,
  CCol
} from '@coreui/react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'




const ModalKonfirmasi = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

  return (
    <>
      <CButton color="danger" size={'md'} className="mr-3 pr-5 pl-5" onClick={() => toggle()} >Konfirmasi</CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg' centered>
        <ModalBody>
            <CRow className="mt-2">
                <CCol md="12" xs="12"> 
                    <h3 className='font-weight-bold'>Konfirmasi Pembayaran</h3>
                    <h4 className="mt-2">Apakah anda akan mengkonfirmasi pembayaran ini?</h4>
                    <CButton color="info" style={{width:'100%'}} className="mt-3" size="lg">Ya</CButton>
                    <CButton color="info" variant="outline" style={{width:'100%'}} onClick={toggle} className="mt-3" size="lg">Tidak</CButton>
                </CCol>
            </CRow>
           
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalKonfirmasi