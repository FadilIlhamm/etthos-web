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
import FileUpload from 'src/views/FileUpload/file-upload.component';





const ModalUploadTagihan = (props) => {
    const { action, buttonLabel, id,style } = props
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
    });
    
    const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    const ModalUploadTagihanInput = () => {
      return(
        <CRow>
          <h4 className="font-weight-bold">Upload Tagihan</h4>
            <span>Isi form dibawah ini untuk mengunggah taghan iklan</span>
            <CRow>
              <CCol xs={12}>
                
                <form onSubmit={handleSubmit}>
                    <CLabel className="mt-2">Total Tagihan</CLabel>
                    <CInput type="number" size='lg' placeholder='Masukkan Total Tagihan'></CInput>
                    <FileUpload
                        accept=".jpg,.png,.jpeg"
                        label="Bukti Saldo"
                        multiple
                        updateFilesCb={updateUploadedFiles}
                    />
                    <CButton color='info' type="submit" size="lg" style={{width:'100%'}} className="mt-3 mb-3 text-white"> Tambah Tagihan Iklan  </CButton>
                </form>
              </CCol>
            </CRow>
      </CRow>
      )
  }
  const ModalUploadTagihanDetail = () => {
    return(
      <CRow>
            <h4 className="font-weight-bold">Bukti Tagihan</h4>
          <span>Bukti Tagihan Google Ads</span>
          <CRow>
            <CCol xs={12}>
                <CImg  src={'avatars/6.jpg'}  style={{width:'100%' ,heigt:'100%'}} />
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
                ( action === 'detail' ? 'light' :  '')
            } 
            size={ action === 'insert' ? 'lg' : 'md'}
            style ={style}
            className={ action === 'insert' ? 'text-white' : 'text-black'}
            onClick={() => toggle()}
            >
            { buttonLabel }
            { action === 'insert' ? ' Upload Tagihan' : ''}
        </CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg' centered >
        <ModalHeader toggle={toggle} charCode="Y" className="border-0">
             
        </ModalHeader>
        <ModalBody>
            { action === 'insert' ? ModalUploadTagihanInput() : 
                ( action === 'detail' ? ModalUploadTagihanDetail() :  '-'
                        
                )
            } 
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalUploadTagihan