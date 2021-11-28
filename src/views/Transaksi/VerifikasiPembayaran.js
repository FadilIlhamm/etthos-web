import React, { lazy, useState } from 'react'
import {Link} from 'react-router-dom'
import {
  CCol,
  CRow,
  CDataTable,
  CButtonGroup,
  CButton,
  CInput,
  CInputGroup,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CModalHeader,
  CInputGroupText

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from '../styles/stylesTables';
import ModalKonfirmasi from './ModalKonfirmasi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const usersData = [
    {no: 1, tanggal: '02/11/2021', invoice: 'INV/02112021' ,nominal: '1.500.000', bank: 'BCA', noRef: '12345',},
    {no: 2, tanggal: '02/11/2021', invoice: 'INV/02112021' ,nominal: '1.500.000', bank: 'BCA', noRef: '12345',},
    {no: 3, tanggal: '02/11/2021', invoice: 'INV/02112021' ,nominal: '1.500.000', bank: 'BRI', noRef: '12345',},
    {no: 4, tanggal: '02/11/2021', invoice: 'INV/02112021' ,nominal: '1.500.000', bank: 'Mandiri', noRef: '12345',},
    {no: 5, tanggal: '02/11/2021', invoice: 'INV/02112021' ,nominal: '1.500.000', bank: 'CIMB NIAGA', noRef: '12345',},
    {no: 6, tanggal: '02/11/2021', invoice: 'INV/02112021' ,nominal: '1.500.000', bank: 'BSI', noRef: '12345',},
    {no: 7, tanggal: '02/11/2021', invoice: 'INV/02112021' ,nominal: '1.500.000', bank: 'BNI', noRef: '12345',},
]


const VerifikasiPembayaran = () => {
    const [visible, setVisible] = useState(false);
    
    const Columns = [
        {
            name : "No",
            cell : row => row.no !== null ? row.no : '-',
            sortable : true,
            maxWidth: "12px"
        },
        {
            name : "Tanggal",
            cell : row => row.tanggal !== null ? row.tanggal : '-', 
            sortable : true,
            maxWidth: "20px"
        },
        {
            name : "Invoice",
            cell : row => row.invoice !== null ? row.invoice : '-', 
            sortable : true,
            maxWidth: "150px"
            
        },
        {
            name : "Nominal",
            cell : row => row.nominal !== null ? row.nominal : '-', 
            sortable : true,
            maxWidth: "40px"
        },
        {
            name : "Bank",
            cell : row => row.bank !== null ? row.bank : '-', 
            sortable : true,
            maxWidth: "150px"
        },
        {
            name : "No.Ref",
            cell : row => row.noRef !== null ? row.noRef : '-', 
            sortable : true,
            maxWidth: "250px"
        },
        {
            name : "",
            cell : row => (
                <CRow>
                    <ModalKonfirmasi></ModalKonfirmasi>
                </CRow>
            ),
            sortable : false
        },
    ]

  return (
    <>
      <CRow className="mb-4">
        <CCol md="12" xs="12">
          <h2 className="text-info">Verifikasi Pembayaran</h2>
        </CCol>
      </CRow>
      <div style={{backgroundColor: '#F2F2F2', borderRadius:10}} className='p-4 mb-4'>
        <CRow >
            <CCol md="12" xs="12">
                <CInputGroup size="lg">
                <CInputGroupText className="bg-white" id="basic-addon1" size="lg"><FontAwesomeIcon size="sm" icon={faSearch}/></CInputGroupText>
                <CInput placeholder="Cari" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                </CInputGroup>   
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

export default VerifikasiPembayaran