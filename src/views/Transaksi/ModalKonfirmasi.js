import React, {  useState, useEffect } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CImg,
} from '@coreui/react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import API_URL from 'src/constans'




const ModalKonfirmasi = (props) => {
    const { action, buttonLabel, idtransaksi, id, totalharga, subsidi, ongkoskirim , status } = props
    const [modal, setModal] = useState(false);
    const [auth, setAuth] = useState(null)
    const [dataKeranjang, setDataKeranjang] = useState([])
    const [total, setTotal] = useState([])
    const toggle = () => setModal(!modal);

    const getKeranjang = async () => {
      await axios.get(`${API_URL}keranjang/byidtransaksi/${idtransaksi}`, {
          })
          .then(res => {
              let row = res.data.data
              setDataKeranjang(row);
          })
          .catch(error => {
          if (error) {
              console.log( "Error : " + error )
          }
      })
    }
    const getTotal = async () => {
      await axios.get(`${API_URL}keranjang/sumtotal/${idtransaksi}`, {
          })
          .then(res => {
              let row = res.data.data
              setTotal(row.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
          })
          .catch(error => {
          if (error) {
              console.log( "Error : " + error )
          }
      })
    }

    const Lunas =  async () => {
      let data = {
        "logstatus": 'F',
      }
      await axios({
        url : `${API_URL}transaksi/addlog/${id}`,
        method: 'PUT',
        data : data
      })
      .then(res => {
        alert('Status Transaksi Sudah Lunas')
        setModal(false)
        window.location.reload()
      })
    }
    const BelumLunas =  async () => {
      let data = {
        "logstatus": 'E',
      }
      await axios({
        url : `${API_URL}transaksi/addlog/${id}`,
        method: 'PUT',
        data : data
      })
      .then(res => {
        alert('Status Transaksi Belum Lunas')
        setModal(false)
        window.location.reload()
      })
    }


    const onLoad = () => {
      getKeranjang()
      getTotal()
    }

    useEffect(() => {
      const login = JSON.parse(sessionStorage.getItem('auth'))
      setAuth(login)
    }, [])

    useEffect(() => {
      if( modal && auth !== null ){
          onLoad()
      }
    }, [auth, modal])



    const keranjang = () => {
      return dataKeranjang.map((el, i) =>
          
      <CRow className="mt-4" key={i}>
        <CCol md="2" xs="2"> 
          <CImg  src={el.linkphoto} style={{width:100 ,heigt:100}} />
        </CCol>
        <CCol md="3" xs="3"> 
          <h5 className="mt-3 font-weight-bold">{el.namaproduct}</h5>
        </CCol>
        <CCol md="1" xs="1"> 
          <h5 className="mt-3 text-right font-weight-bold">x{el.jumlahproduct}</h5>
        </CCol>
        <CCol md="6" xs="6"> 
          <h5 className="mt-3 text-right font-weight-bold text-warning">Rp. {el.price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</h5>
        </CCol>
      </CRow>
          
      )
    }

  return (
    <>
      <CButton color={status === 'E' ? 'warning' : 'info'} size={'md'} className="mr-3 pr-5 pl-5 text-white" onClick={() => toggle()} >{status === 'F' ? 'Lunas' : 
        ( status === 'E' ? 'Belum Lunas' : 'Konfirmasi')}
      </CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg' centered >
        <ModalHeader toggle={toggle} charCode="Y" className="border-0">
        </ModalHeader>
        <ModalBody>
            <CRow className="mt-2">
                <CCol md="12" xs="12"> 
                    <h4 className='font-weight-bold'>Konfirmasi Pembayaran</h4>
                    <h6 className="mt-2">Rincian pemesanan</h6>
                   
                </CCol>
            </CRow>
            {keranjang()}
            <CRow className="mt-2">
                <CCol md="6" xs="6"> 
                  <h6 className="mt-3">Subtotal produk</h6>
                   {/* <h6 className="mt-3">Diskon</h6> */}
                  <h6 className="mt-3">Ongkos Kirim</h6>
                  <h6 className="mt-3">Subsidi Ongkir</h6>
                  <h6 className="mt-4 font-weight-bold">Total Pesanan</h6>
                  <CButton color="warning" style={{width:'100%'}} className="mt-4 text-white" size="lg" onClick={() => BelumLunas()}>Belum Lunas</CButton>
                </CCol>
                <CCol md="6" xs="6"> 
                  <h6 className="mt-3 text-right">Rp. {total}</h6>
                  {/* <h6 className="mt-3 text-right">-Rp.10.000</h6> */}
                  <h6 className="mt-3 text-right">Rp. {ongkoskirim}</h6>
                  <h6 className="mt-3 text-right">-Rp. {subsidi}</h6>
                  <h6 className="mt-4 text-right font-weight-bold">Rp. {totalharga}</h6>
                  <CButton color="info" style={{width:'100%'}} className="mt-4 text-white" size="lg" onClick={() => Lunas()}>Lunas</CButton>
                </CCol>
            </CRow>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalKonfirmasi