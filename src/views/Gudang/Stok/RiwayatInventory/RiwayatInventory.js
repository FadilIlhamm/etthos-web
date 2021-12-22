import React, { lazy,useState } from 'react'
import {Link} from 'react-router-dom'
import {
  CCol,
  CRow,
  CDataTable,
  CButtonGroup,
  CButton,
  CInputGroup,
  CInputGroupText,
  CInput,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from 'src/views/styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPen, faTrashAlt, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons'

const usersData = [
    {no: 1, namaProduk: 'LE', stok: 12345 },
    {no: 2, namaProduk: 'Mineral', stok: 6789},
]

const Columns = [
    {
        name : "No",
        cell : row => row.no !== null ? row.no : '-',
        sortable : true,
        maxWidth:'10px'
    },
    {
        name : "SKU",
        cell : row => row.namaProduk !== null ? row.namaProduk : '-', 
        sortable : true
    },
    {
        name : "Nama Produk",
        cell : row => row.stok !== null ? row.stok : '-', 
        sortable : true
    },
    {
        name : "Stok",
        cell : row => row.stok !== null ? row.stok : '-', 
        sortable : true
    },
    {
        name : "Stok Awal",
        cell : row => row.stok !== null ? row.stok : '-', 
        sortable : true
    },
    {
        name : "Stok Lain",
        cell : row => row.stok !== null ? row.stok : '-', 
        sortable : true
    },
    {
        name : "Stok Akhir",
        cell : row => row.stok !== null ? row.stok : '-', 
        sortable : true
    },
    {
        name : "Created At",
        cell : row => row.stok !== null ? row.stok : '-', 
        sortable : true
    },
    {
        name : "Transaksi",
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
const RiwayatInventory = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Riwayat Inventory</h2>
        </CCol>
      </CRow>
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
            <option>Created At</option>
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
    </>
  )
}

export default RiwayatInventory
