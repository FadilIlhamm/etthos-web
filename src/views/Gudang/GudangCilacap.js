import React, { lazy } from 'react'
import {Link} from 'react-router-dom'
import {
  CCol,
  CRow,
  CDataTable,
  CButtonGroup,
  CButton,
  CInputGroup,
  CInputGroupText,
  CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from '../styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPen, faTrashAlt, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons'
import ModalGudangCilacap from './ModalGudang/ModalGudangCilacap';

const usersData = [
    {no: 1, namaProduk: 'LE', stok: 12345 },
    {no: 2, namaProduk: 'Mineral', stok: 6789},
]

const Columns = [
    {
        name : "No",
        cell : row => row.no !== null ? row.no : '-',
        sortable : true,
    },
    {
        name : "Nama Produk",
        cell : row => row.namaProduk !== null ? row.namaProduk : '-', 
        sortable : true
    },
    {
        name : "Total Stok",
        cell : row => row.stok !== null ? row.stok : '-', 
        sortable : true
    },
    {
        name : "",
        cell : row => (
          <CRow>
              <ModalGudangCilacap action="detail" buttonLabel="Detail" id={ row.id }></ModalGudangCilacap>
          </CRow>
        ),
        sortable : false
    },
]
const GudangCilacap = () => {
  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Gudang Cilacap</h2>
        </CCol>
      </CRow>
      <div style={{backgroundColor: '#F2F2F2', borderRadius:10}} className='p-3 mb-2'>
        <CRow className='mb-2'>
          <CCol md="6" xs="6">
            <CInputGroup size="lg">
                <CInputGroupText className="bg-white" id="basic-addon1" size="lg"><FontAwesomeIcon size="sm" icon={faSearch}/></CInputGroupText>
                <CInput placeholder="Cari" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </CInputGroup>  
          </CCol>
          <CCol md="3" xs="3">
            <ModalGudangCilacap action="insert" buttonLabel={<FontAwesomeIcon icon={faPlus} />} style={{width:'100%'}}/>
          </CCol>
          <CCol md="3" xs="3">
            <CButton size="lg" style={{width:'100%'}} color='warning'><FontAwesomeIcon size="lg" icon={faDownload}/>  Unduh</CButton>
          </CCol>
        </CRow>
      </div>
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
    </>
  )
}

export default GudangCilacap
