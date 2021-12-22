import React, {  useState } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CImg,
  CDataTable,
  CButtonGroup,
  CInputGroup,
  CInputGroupText,
  CInput,
  CSelect,
  CLabel
} from '@coreui/react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faSearch, faPen, faTrashAlt, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import customStyles from 'src/views/styles/stylesTables';
import DataTable from 'react-data-table-component';

const ModalGudangJakarta = (props) => {
    const { action, buttonLabel, id,style } = props
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [startDate, setStartDate] = useState(new Date());
  

    const ModalGudangInput = () => {
        return(
          <CRow>
              <h4 className="font-weight-bold">Tambah Stok</h4>
              <span>Isi form dibawah ini untuk menambahkan data stok</span>
              <CRow>
                <CCol xs={12}>
                  <CLabel className="mt-2">Nama Produk</CLabel>
                  <CInput type="text" size='lg' placeholder='Masukkan Nama Produk'></CInput>
                  <CLabel className="mt-2">Jumlah Produk</CLabel>
                  <CInput type="number" size='lg' placeholder='Masukkan Jumlah Produk'></CInput>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12}>
                  <CButton color='info' size="lg" style={{width:'100%'}} className="mt-3 mb-3 text-white"> Tambah Data Produk </CButton>
                </CCol>
              </CRow>
        </CRow>
        )
    }

    const usersData = [
        {no: 1, Tanggal: '08/11/21', nodopo:'324ireji', stok: 12345, status:'In' },
        {no: 2, Tanggal: '06/11/21', nodopo:'324ird4ji', stok: 12345, status:'Out' },
        {no: 3, Tanggal: '07/11/21', nodopo:'dad3dsad1', stok: 12345, status:'In' },
        {no: 4, Tanggal: '09/11/21', nodopo:'dad3dsad1', stok: 12345, status:'Out' },
        {no: 5, Tanggal: '04/11/21', nodopo:'dad3dsad1', stok: 12345, status:'In' },
    ]
    
    const Columns = [
        {
            name : "No",
            cell : row => row.no !== null ? row.no : '-',
            sortable : true,
            maxWidth:'10px'
        },
        {
            name : "Tanggal",
            cell : row => row.Tanggal !== null ? row.Tanggal : '-', 
            sortable : true
        },
        {
            name : "No.DO/PO",
            cell : row => row.nodopo !== null ? row.nodopo : '-', 
            sortable : true
        },
        {
            name : "Jumlah Stok",
            cell : row => row.stok !== null ? row.stok : '-', 
            sortable : true
        },
        {
          name : "Status",
          cell : row => (
              <span className={row.status === 'In' ? "text-success" : "text-danger" } > {row.status}</span>
          ),
          sortable : false
        },
    ]

    const ModalGudangDetail = () => {
        return(
            <CRow>
              <div style={{backgroundColor: '#F2F2F2', borderRadius:10}} className='p-3 mb-2'>
                <CRow className='mb-2'>
                    <CCol md="9" xs="9">
                        <CInputGroup size="lg">
                            <CInputGroupText className="bg-white" id="basic-addon1" size="lg"><FontAwesomeIcon size="sm" icon={faSearch}/></CInputGroupText>
                            <CInput placeholder="Cari" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        </CInputGroup>  
                    </CCol>
                    <CCol md="3" xs="3">
                        <CButton size="lg" style={{width:'100%'}} color='warning'><FontAwesomeIcon size="lg" icon={faDownload}/>  Unduh</CButton>
                    </CCol>
                </CRow>
            </div>

            <CRow className='mb-4 mt-2'>
                <CCol md="6" xs="12">
                <CInput type="date" defaultValue={startDate}  size="lg" className=""></CInput>
                </CCol>

                <CCol md="6" xs="12">
                    <CSelect size="lg" >
                        <option>Status</option>
                        <option value="1">Semua</option>
                        <option value="2">Sudah Transfer</option>
                        <option value="3">Lunas</option>
                        <option value="4">Retur</option>
                        <option value="5">Cancel Order</option>
                    </CSelect>
                </CCol>
            </CRow>

            <CRow>
                <CCol md="12" sm="12">
                    <DataTable
                        columns={Columns}
                        data={usersData}
                        noHeader={true} 
                        persistTableHead  
                        highlightOnHover
                        pagination
                        paginationServer
                        paginationTotalRows={5}
                        paginationPerPage={5}
                        paginationComponentOptions={{
                            noRowsPerPage: true
                        }}
                        onChangePage={page => this.handleChangePage(page)}
                        customStyles={customStyles}
                    />
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
          { action === 'insert' ? ' Tambah Produk' : ''}
      </CButton>
      <Modal isOpen={modal} toggle={toggle} className='modal-xl' centered >
        <ModalHeader toggle={toggle} charCode="Y" className="border-0">
            Gudang Jakarta
        </ModalHeader>
        <ModalBody>
            { action === 'insert' ? ModalGudangInput() : 
                ( action === 'detail' ? ModalGudangDetail() :  '-'   
                )
            } 
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalGudangJakarta