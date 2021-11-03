import React, { lazy } from 'react'
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


const fields = ['No','Nama', 'Email', 'Nomor Telephone','Tipe','Member']
const usersData = [
    {no: 1, nama: 'Gigi', email: 'Gigi@gmail', nomorTelephone: '08213231343', tipe: 'member',member : 'gold'},
    {no: 2, nama: 'Gaga', email: 'Gaga@gmail', nomorTelephone: '08213231323', tipe: 'member',member : 'Silver'},
]
const Columns = [
    {
        name : "No",
        cell : row => row.no !== null ? row.no : '-',
        sortable : true,
    },
    {
        name : "Nama",
        cell : row => row.nama !== null ? row.nama : '-', 
        sortable : true
    },
    {
        name : "Email",
        cell : row => row.email !== null ? row.email : '-', 
        sortable : true
    },
    {
        name : "Nomor Telephone",
        cell : row => row.nomorTelephone,
        sortable : true
    },
    {
        name : "Tipe",
        cell : row => row.tipe,
        sortable : true
    },
    {
        name : "Member",
        cell : row => row.member,
        sortable : true
    },
    {
        name : "",
        cell : row => (
            <CButtonGroup>
                <CButton className="btn-warning" ></CButton>
                <CButton className="btn-danger"  onClick={() => this.showDelete(row.id)}></CButton>
            </CButtonGroup>
        ),
        sortable : false
    },
]
const Pelanggan = () => {
  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Pelanggan</h2>
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

export default Pelanggan
