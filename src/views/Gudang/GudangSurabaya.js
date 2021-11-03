import React, { lazy } from 'react'
import {Link} from 'react-router-dom'
import {
  CCol,
  CRow,
  CDataTable,
  CButtonGroup,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from '../styles/stylesTables';

const usersData = [
    {no: 1, namaProduk: 'Aqua', stok: 12345 },
    {no: 2, namaProduk: 'Gelas', stok: 6789},
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
            <Link>Details</Link>
        ),
        sortable : false
    },
]
const GudangSurabaya = () => {
  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Gudang Surabaya</h2>
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

export default GudangSurabaya
