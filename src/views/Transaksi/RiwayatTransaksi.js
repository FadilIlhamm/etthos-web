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
  CInputGroupText,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from '../styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faUniversity, faDownload, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const usersData = [
    {no: 1, tanggal: '02/11/2021', nomorTelp: '081234567890' , nama: 'Fadil Ilham' , email:'Fadil@gmail.com', nominal: '1.500.000', bank: 'BCA', status:'Lunas', noRef: '12345',},
    {no: 2, tanggal: '02/11/2021', nomorTelp: '081234567890' , nama: 'Fadil Ilham' , email:'Fadil@gmail.com', nominal: '1.500.000', bank: 'BCA',  status:'Lunas', noRef: '12345',},
    {no: 3, tanggal: '02/11/2021', nomorTelp: '081234567890' , nama: 'Fadil Ilham' , email:'Fadil@gmail.com', nominal: '1.500.000', bank: 'BRI', status:'Lunas', noRef: '12345',},
    {no: 4, tanggal: '02/11/2021', nomorTelp: '081234567890' , nama: 'Fadil Ilham' , email:'Fadil@gmail.com', nominal: '1.500.000', bank: 'Mandiri', status:'Lunas', noRef: '12345',},
    {no: 5, tanggal: '02/11/2021', nomorTelp: '081234567890' , nama: 'Fadil Ilham' , email:'Fadil@gmail.com', nominal: '1.500.000', bank: 'CIMB NIAGA', status:'Lunas', noRef: '12345',},
    {no: 6, tanggal: '02/11/2021', nomorTelp: '081234567890' , nama: 'Fadil Ilham' , email:'Fadil@gmail.com', nominal: '1.500.000', bank: 'BSI', status:'Belum Lunas', noRef: '12345',},
    {no: 7, tanggal: '02/11/2021', nomorTelp: '081234567890' , nama: 'Fadil Ilham' , email:'Fadil@gmail.com', nominal: '1.500.000', bank: 'BNI', status:'Lunas', noRef: '12345',},
]


const RiwayatTransaksi = () => {
    const [startDate, setStartDate] = useState(new Date());

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
          name : "Nomor Telepon",
          cell : row => row.nomorTelp !== null ? row.nomorTelp : '-', 
          sortable : true,
          
        },
        {
          name : "Nama",
          cell : row => row.nama !== null ? row.nama : '-', 
          sortable : true,
         
        },
        {
          name : "Email",
          cell : row => row.email !== null ? row.email : '-', 
          sortable : true,
         
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
            maxWidth: "40px"
        },
        {
          name : "Status Pembayaran",
          cell : row => row.status !== null ? row.status : '-', 
          sortable : true,
         
      },
        {
            name : "No.Ref",
            cell : row => row.noRef !== null ? row.noRef : '-', 
            sortable : true
        },
        
    ]

  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Riwayat Transaksi</h2>
        </CCol>
      </CRow>
      <CRow className='mb-2'>
        <CCol md="12" xs="12">
          <CInputGroup size="lg">
              <CInputGroupText className="bg-white" id="basic-addon1" size="lg"><FontAwesomeIcon size="sm" icon={faSearch}/></CInputGroupText>
              <CInput placeholder="Cari" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
          </CInputGroup>  
        </CCol>
      </CRow>
      <div style={{backgroundColor: '#F2F2F2', borderRadius:10}} className='p-3 mb-2'>
        <CRow >
          <CCol md="4" xs="12">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border-0 pt-2 pb-3  pl-5 pr-5 rounded text-center text-dark' placeholderText="Tanggal" />
          </CCol>

          <CCol md="4" xs="12">
            <CSelect size="lg" >
              <option>Status Transaksi</option>
              <option value="1">Semua</option>
              <option value="2">Sudah Transfer</option>
              <option value="3">Lunas</option>
              <option value="4">Retur</option>
              <option value="5">Cancel Order</option>
            </CSelect>
          </CCol>
          <CCol md="4" xs="12">
            <CSelect size="lg" >
              <option>Bank</option>
              <option value="1">Mandiri</option>
              <option value="2">BCA</option>
              <option value="3">BNI</option>
              <option value="4">Panin</option>
              <option value="5">CIMB</option>
            </CSelect>
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

export default RiwayatTransaksi