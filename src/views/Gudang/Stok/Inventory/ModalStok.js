import React, {  useState,useEffect } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CImg,
  CLabel,
  CInput,
  CSelect,
  CFormSelect 
} from '@coreui/react'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import API_URL from 'src/constans';
import Select from 'react-select'


const ModalStok = (props) => {
  const { action, buttonLabel, id,style } = props
  const [modal, setModal] = useState(false);
  const [modalInbound, setModalInbound] = useState(false);
  const [modalOutbond, setModalOutbond] = useState(false);
  const [auth, setAuth] = useState(null)

  const toggle = () => setModal(!modal);

  const toggleInbound = () => setModalInbound(!modalInbound);

  const toggleOutbond = () => setModalOutbond(!modalOutbond);

  const [noDo, setNodo] = useState('')
  const [noPo, setNopo] = useState('')
  const [purchaseOrder, setPurchaseOrder] = useState('')
  const [stok, setStok] = useState('')
  const [remark, setRemark] = useState('')
  const [produkId, setProdukId] = useState('')
  const [optionProduk, setOptionProduk] = useState([])
  const [objProduk, setObjProduk] = useState({})
  const [supplier, setSupplier] = useState('')
  const [sku, setSku] = useState('')
  const [gudangId, setGudangId] = useState('')
  const [optionGudang, setOptionGudang] = useState([])


  
  function loadProduk() {
    axios.get(`${API_URL}product`, {
      })
      .then(res => {
        let arr = res.data.data
        let data = []

        for (let i = 0; i < arr.length; i++) {
            data.push({value : arr[i].id, label : arr[i].name })
        }

        setOptionProduk(data)

      })
      .catch(error => {
        if (error) {
          console.log( "Error : " + error )
        }
    })
  }


  function handleProdukChange(e) {
    setProdukId(e.value);
    loadSKU(e.value)
  }

  function loadSKU(id) {
    axios.get(`${API_URL}product/`+id, {
      })
      .then(res => {
        let arr = res.data.data

        setSupplier(arr.supplier.name)
        setSku(arr.sku)
      })
      .catch(error => {
        if (error) {
          console.log( "Error : " + error )
        }
    })
  }

  function loadGudang() {
    axios.get(`${API_URL}warehouse`, {
      })
      .then(res => {
        let arr = res.data.data
        let data = []

        for (let i = 0; i < arr.length; i++) {
            data.push({value : arr[i].id, label : arr[i].name })
        }

        setOptionGudang(data)

      })
      .catch(error => {
        if (error) {
          console.log( "Error : " + error )
        }
    })
  }

  const Inbound =  async () => {
    let data = {
      "productId": produkId,
      "warehouseId" : gudangId,
      "quantity" : stok,
      "remark" : remark,
      "inbound" : true,
      "quantity" : stok,
      "nodeliverorder" : noDo,
      "nopo" : noPo,

    }
    await axios({
      url : `${API_URL}stock/create`,
      method: 'POST',
      data : data
    })
    .then(res => {
      alert('Data Stok Inbound Berhasil Ditambah')
      setModalInbound(false)
      setModal(false)
      window.location.reload()
    })
  }

  const Outbond =  async () => {
    let data = {
      "productId": produkId,
      "warehouseId" : gudangId,
      "quantity" : stok,
      "remark" : remark,
      "inbound" : false,
      "quantity" : stok,
      "nopurchase" : purchaseOrder,
    }
    await axios({
      url : `${API_URL}stock/create`,
      method: 'POST',
      data : data
    })
    .then(res => {
      alert('Data Stok Outbond Berhasil Ditambah')
      setModalOutbond(false)
      setModal(false)
      window.location.reload()
    })
  }

  function handleGudangChange(e) {
    setGudangId(e.value);
  }

  const ModalStokInput = () => {
    return(
      <CRow>
        <CRow  className="mb-3">
        <CCol xs={12} sm={12}>
          <CButton 
          color='info'
          className="text-white"
          style={{width:'100%'}}
          size='lg'
          actionModal='inbound'
          onClick={() => toggleInbound()}
          >
            Inbound
          </CButton>
          
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} sm={12}>
          <CButton 
          color='info'
          className="text-white"
          style={{width:'100%'}}
          size='lg'
          actionModal='outbond'
          onClick={() => toggleOutbond()}
          >
            Outbound
          </CButton>
          
        </CCol>
      </CRow>
    </CRow>
    )
  }

  const onLoad = () => {
    loadProduk()
    loadGudang()
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
            { action === 'insert' ? ' Tambah Inventory' : ''}
        </CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg' centered >
        <ModalHeader toggle={toggle} charCode="Y" className="border-0">
            { action === 'insert' ? 'Pilih Stok' : 
                ( action === 'update' ? 'Ubah Stok' :  
                        (action === 'delete' ? 'Delete Stok': '-' )
                )
            }  
        </ModalHeader>
        <ModalBody>
          {action === 'insert' ? ModalStokInput():''
            
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={modalInbound} toggle={toggleInbound} className='modal-lg' centered >
        <ModalHeader toggle={toggleInbound} charCode="Y" className="border-0">
        </ModalHeader>
        <ModalBody>
            <h4 className="font-weight-bold">Tambahkan Stok Inbound</h4>
            <span>Isi form dibawah ini untuk menambahkan data stok</span>
            <CRow>
              <CCol xs={12}>
                <CLabel className="mt-2 ">No.Delivery Order </CLabel>
                <CInput type="text" size='md' placeholder='Masukkan No.Delivery Order' onChange={e => setNodo(e.target.value)}></CInput>
                <CLabel className="mt-2 ">Nama Produk</CLabel>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    // value={objProduk}
                    clearable={true}
                    name="Produk"
                    options={optionProduk}
                    onChange={handleProdukChange.bind(this)}
                />
                <CLabel className="mt-2">Supplier</CLabel>
                <CInput type="text" size='md' value={supplier} placeholder='Masukkan Supplier' disabled></CInput>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
                
                <CLabel className="mt-2 ">SKU</CLabel>
                <CInput type="text" size='md' placeholder='Masukkan SKU' value={sku} disabled></CInput>
                <CLabel className="mt-2">Gudang</CLabel>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    // value={objProduk}
                    clearable={true}
                    name="Gudang"
                    options={optionGudang}
                    onChange={handleGudangChange.bind(this)}
                />
              </CCol>
              <CCol md={6}>
                <CLabel className="mt-2 ">No.PO</CLabel>
                <CInput type="text" size='md' placeholder='Masukkan No. PO' onChange={e => setNopo(e.target.value)}></CInput>
                <CLabel className="mt-2">Stok</CLabel>
                <CInput type="number" size='md' placeholder='Masukkan Stok' onChange={e => setStok(e.target.value)}></CInput>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12}>
                <CLabel className="mt-2 ">Remark</CLabel>
                <CInput type="text" size='md' placeholder='Masukkan Remark' onChange={e => setRemark(e.target.value)}></CInput>
                <CButton color='info'  style={{width:'100%'}} className="mt-3 mb-3 text-white" onClick={() => Inbound()} > Simpan </CButton>
                <CButton color='danger'  style={{width:'100%'}} onClick={() => toggleInbound()}> Batal </CButton>
              </CCol>
            </CRow>
        </ModalBody>
      </Modal>

      <Modal isOpen={modalOutbond} toggle={toggleOutbond} className='modal-lg' centered >
        <ModalHeader toggle={toggleOutbond} charCode="Y" className="border-0">
        </ModalHeader>
        <ModalBody>
            <h4 className="font-weight-bold">Tambahkan Stok Outbond</h4>
            <span>Isi form dibawah ini untuk menambahkan data stok</span>
            <CRow>
              <CCol xs={12}>
                <CLabel className="mt-2 ">No.Purchase Order</CLabel>
                <CInput type="text" size='md' placeholder='Masukkan No.Purchase Order' onChange={e => setPurchaseOrder(e.target.value)}></CInput>
                <CLabel className="mt-2 ">Nama Produk</CLabel>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    // value={objProduk}
                    clearable={true}
                    name="Produk"
                    options={optionProduk}
                    onChange={handleProdukChange.bind(this)}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={6}>
                <CLabel className="mt-2">Gudang</CLabel>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  // value={objProduk}
                  clearable={true}
                  name="Gudang"
                  options={optionGudang}
                  onChange={handleGudangChange.bind(this)}
                />
              </CCol>
              <CCol md={6}>
                <CLabel className="mt-2">Stok</CLabel>
                <CInput type="number" size='md' placeholder='Masukkan Stok' onChange={e => setStok(e.target.value)}></CInput>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12}>
                <CLabel className="mt-2 ">Remark</CLabel>
                <CInput type="text" size='md' placeholder='Masukkan Remark' onChange={e => setRemark(e.target.value)}></CInput>
                <CButton color='info'  style={{width:'100%'}} className="mt-3 mb-3 text-white" onClick={() => Outbond()}> Simpan </CButton>
                <CButton color='danger'  style={{width:'100%'}} onClick={() => toggleOutbond()}> Batal </CButton>
              </CCol>
            </CRow>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalStok