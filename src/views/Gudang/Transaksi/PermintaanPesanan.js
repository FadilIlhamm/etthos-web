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
import customStyles from '../../styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faUniversity, faDownload, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalDetail from './ModalDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const usersData = [
    {no: 1, tanggal: '02/11/2021', invoice: 'INV/02112021' , nama:'gigi hadid' , noHP:'081123456789', nominal: '1.500.000', metodePembayaran: 'Transfer', statusTransaksi: 'Sudah Transfer',},
    {no: 2, tanggal: '02/11/2021', invoice: 'INV/02112021' , nama:'gigi hadid' , noHP:'081123456789', nominal: '1.500.000', metodePembayaran: 'Transfer', statusTransaksi: 'Sudah Transfer',},
    {no: 3, tanggal: '02/11/2021', invoice: 'INV/02112021' , nama:'gigi hadid' , noHP:'081123456789', nominal: '1.500.000', metodePembayaran: 'Transfer', statusTransaksi: 'Lunas',},
    {no: 4, tanggal: '02/11/2021', invoice: 'INV/02112021' , nama:'gigi hadid' , noHP:'081123456789', nominal: '1.500.000', metodePembayaran: 'Transfer', statusTransaksi: 'Sudah Transfer',},
    {no: 5, tanggal: '02/11/2021', invoice: 'INV/02112021' , nama:'gigi hadid' , noHP:'081123456789', nominal: '1.500.000', metodePembayaran: 'CoD', statusTransaksi: 'Cancel Order',},
    {no: 6, tanggal: '02/11/2021', invoice: 'INV/02112021' , nama:'gigi hadid' , noHP:'081123456789', nominal: '1.500.000', metodePembayaran: 'CoD', statusTransaksi: 'Cancel Order',},
    {no: 7, tanggal: '02/11/2021', invoice: 'INV/02112021' , nama:'gigi hadid' , noHP:'081123456789', nominal: '1.500.000', metodePembayaran: 'CoD', statusTransaksi: 'Lunas',},
]


const PermintaanPesanan = () => {
    const [startDate, setStartDate] = useState(new Date());

    const Columns = [
        {
            name : "No",
            cell : row => row.no !== null ? row.no : '-',
            sortable : true,
            maxWidth: "10px"
        },
        {
            name : "Tanggal",
            cell : row => row.tanggal !== null ? row.tanggal : '-', 
            sortable : true,
            maxWidth: "15px"
        },
        {
            name : "Invoice",
            cell : row => row.invoice !== null ? row.invoice : '-', 
            sortable : true,
            maxWidth: "150px"
        },
        {
          name : "Nama Pelanggan",
          cell : row => row.nama !== null ? row.nama : '-', 
          sortable : true,
          maxWidth: "150px"
        },
        {
          name : "No HP",
          cell : row => row.noHP !== null ? row.noHP : '-', 
          sortable : true,
          maxWidth: "120px"
        },
        {
          name : "Nominal",
          cell : row => row.nominal !== null ? row.nominal : '-', 
          sortable : true,
          maxWidth: "40px"
        },
        {
          name : "Metode Pembayaran",
          cell : row => row.metodePembayaran !== null ? row.metodePembayaran : '-', 
          sortable : true,
          maxWidth: "100px"
        },
        {
          name : "Status Transaksi",
          cell : row => row.statusTransaksi !== null ? row.statusTransaksi : '-', 
          sortable : true,
          maxWidth: "150px"
        },
        {
            name : "",
            cell : row => (
                <CRow>
                  <CCol xs={12} sm={12} md={12}>
                    <ModalDetail></ModalDetail>
                  </CCol>
                </CRow>
            ),
            sortable : false
        },
    ]


  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Permintaan Pesanan</h2>
        </CCol>
      </CRow>

      <div style={{backgroundColor: '#F2F2F2', borderRadius:10}} className='p-3 mb-2'>
        <CRow className='mb-2'>
          <CCol md="12" xs="12">
            <CInputGroup size="lg">
                <CInputGroupText className="bg-white" id="basic-addon1" size="lg"><FontAwesomeIcon size="sm" icon={faSearch}/></CInputGroupText>
                <CInput placeholder="Cari" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </CInputGroup>  
          </CCol>
        </CRow>
      </div>

      <CRow className='mb-4 mt-2'>
        
        <CCol md="4" xs="12">
          <CInput type="date" defaultValue={startDate}  size="lg" className=""></CInput>
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
            <option>Metode Pembayaran</option>
            <option value="1">Transfer</option>
            <option value="2">CoD</option>
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

export default PermintaanPesanan