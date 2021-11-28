import React, {  useState } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CImg,
} from '@coreui/react'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'




const ModalStok = (props) => {
    const { action, buttonLabel, id,style } = props
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
            { action === 'insert' ? ' Tambah Stok' : ''}
        </CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg' centered >
        <ModalHeader toggle={toggle} charCode="Y" className="border-0">
            { action === 'insert' ? 'Tambah Stok' : 
                ( action === 'update' ? 'Ubah Stok' :  
                        (action === 'delete' ? 'Delete Stok': '-' )
                )
            }  
        </ModalHeader>
        <ModalBody>
            <CRow className="mt-2">
                <CCol md="12" xs="12"> 
                    <h4 className='font-weight-bold'>Konfirmasi Pembayaran</h4>
                    <h6 className="mt-2">Rincian pemesanan</h6>
                   
                </CCol>
            </CRow>
            <CRow className="mt-4">
                <CCol md="2" xs="2"> 
                  <CImg  src={'avatars/6.jpg'} style={{width:100 ,heigt:100}} />
                </CCol>
                <CCol md="3" xs="3"> 
                  <h5 className="mt-3 font-weight-bold">Gizidat</h5>
                </CCol>
                <CCol md="1" xs="1"> 
                  <h5 className="mt-3 text-right font-weight-bold">x1</h5>
                </CCol>
                <CCol md="6" xs="6"> 
                  <h5 className="mt-3 text-right font-weight-bold text-warning">Rp.100.000</h5>
                </CCol>
            </CRow>
            <CRow className="mt-2">
                <CCol md="6" xs="6"> 
                  <h6 className="mt-3">Subtotal produk</h6>
                  <h6 className="mt-3">Diskon</h6>
                  <h6 className="mt-3">Ongkos Kirim</h6>
                  <h6 className="mt-3">Subsidi Ongkir</h6>
                  <h6 className="mt-3">Biaya CoD</h6>
                  <h6 className="mt-3 font-weight-bold">Total Pesanan</h6>
                  <CButton color="warning" style={{width:'100%'}} className="mt-4 text-white" size="lg">Belum Lunas</CButton>
                </CCol>
                <CCol md="6" xs="6"> 
                  <h6 className="mt-3 text-right">Rp.100.000</h6>
                  <h6 className="mt-3 text-right">-Rp.10.000</h6>
                  <h6 className="mt-3 text-right">Rp.10.000</h6>
                  <h6 className="mt-3 text-right">-Rp.10.000</h6>
                  <h6 className="mt-3 text-right">Rp.10.000</h6>
                  <h6 className="mt-3 text-right font-weight-bold">Rp.90.000</h6>
                  <CButton color="info" style={{width:'100%'}} className="mt-4" size="lg">Lunas</CButton>

                </CCol>
            </CRow>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalStok