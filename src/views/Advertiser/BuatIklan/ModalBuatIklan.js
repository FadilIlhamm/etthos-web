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




const ModalBuatIklan = (props) => {
    const { action, buttonLabel, id,style } = props
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const ModaIklanInput = () => {
      return(
        <CRow>
          <h4 className="font-weight-bold">Tambahkan Iklan</h4>
            <span>Isi form dibawah ini untuk menambahkan data Iklan</span>
            <CRow>
              <CCol xs={12}>
                <CLabel className="mt-2 ">Alamat Domain</CLabel>
                <CInput type="text" size='lg' placeholder='Masukkan Alamat Domain'></CInput>
                <CLabel className="mt-2">Nama Produk</CLabel>
                <CInput type="text" size='lg' placeholder='Masukkan Nama Produk'></CInput>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12}>
                <CButton color='info' size="lg" style={{width:'100%'}} className="mt-3 mb-3 text-white"> Tambah Iklan </CButton>
              </CCol>
            </CRow>
      </CRow>
      )
  }
  const ModaIklanEdit = () => {
    return(
      <CRow>
        <h4 className="font-weight-bold">Tambahkan Iklan</h4>
          <span>Isi form dibawah ini untuk menambahkan data Iklan</span>
          <CRow>
            <CCol xs={12}>
              <CLabel className="mt-2 ">Alamat Domain</CLabel>
              <CInput type="text" size='lg' placeholder='Masukkan Alamat Domain'></CInput>
              <CLabel className="mt-2">Nama Produk</CLabel>
              <CInput type="text" size='lg' placeholder='Masukkan Nama Produk'></CInput>
              <CLabel className="mt-2">Status</CLabel>
              <CSelect size="lg" >
                <option>Status</option>
                <option value="1">Aktif</option>
                <option value="2">Tidak Aktif</option>
            </CSelect>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs={12}>
              <CButton color='info' size="lg"  style={{width:'100%'}} className="mt-3 mb-3 text-white"> Simpan Perubahan </CButton>
            </CCol>
          </CRow>
    </CRow>
    )
}

  return (
    <>
        <CButton 
            color={ 
                action === 'insert' ? 'info' : 
                ( action === 'update' ? 'secondary' : 
                    (action === 'delete' ? 'danger': 'warning')  
                )
            } 
            size={ action === 'insert' ? 'lg' : 'md'}
            style ={style}
            className="mr-3 text-white"
            onClick={() => toggle()}
            >
            { buttonLabel }
            { action === 'insert' ? ' Tambah Iklan' : ''}
        </CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg' centered >
        <ModalHeader toggle={toggle} charCode="Y" className="border-0">
             
        </ModalHeader>
        <ModalBody>
            { action === 'insert' ? ModaIklanInput() : 
                ( action === 'update' ? ModaIklanEdit() :  
                        (action === 'delete' ? 'Delete Stok': '-' )
                )
            } 
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalBuatIklan