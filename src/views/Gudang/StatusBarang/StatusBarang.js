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
    {no: 1, tanggal:'18/11/21', invoice:'INV/2021', noResi:'00123767', namaPelanggan:'Fadil Ilham', gudang:'Jakarta', ekspedisi:'Ninja Express', metodePembayaran:'Transfer', statusBarang:'dipacking', statusTransaksi:'Lunas'},
    {no: 2, tanggal:'18/11/21', invoice:'INV/2021', noResi:'00123767', namaPelanggan:'Fadil Ilham', gudang:'Jakarta', ekspedisi:'Ninja Express', metodePembayaran:'Transfer', statusBarang:'dipacking', statusTransaksi:'Lunas'},
    {no: 3, tanggal:'18/11/21', invoice:'INV/2021', noResi:'00123767', namaPelanggan:'Fadil Ilham', gudang:'Jakarta', ekspedisi:'Ninja Express', metodePembayaran:'Transfer', statusBarang:'dipacking', statusTransaksi:'Retur'},
    {no: 4, tanggal:'18/11/21', invoice:'INV/2021', noResi:'00123767', namaPelanggan:'Fadil Ilham', gudang:'Jakarta', ekspedisi:'Ninja Express', metodePembayaran:'Transfer', statusBarang:'dipacking', statusTransaksi:'Lunas'},
]

const Columns = [
    {
        name : "No",
        cell : row => row.no !== null ? row.no : '-',
        sortable : true,
    },
    {
        name : "Tanggal",
        cell : row => row.tanggal !== null ? row.tanggal : '-', 
        sortable : true
    },
    {
        name : "Invoice",
        cell : row => row.invoice !== null ? row.invoice : '-', 
        sortable : true
    },
    {
        name : "No.Resi",
        cell : row => row.noResi !== null ? row.noResi : '-', 
        sortable : true
    },
    {
        name : "Nama Pelanggan",
        cell : row => row.namaPelanggan !== null ? row.namaPelanggan : '-', 
        sortable : true
    },
    {
        name : "Gudang",
        cell : row => row.gudang !== null ? row.gudang : '-', 
        sortable : true
    },
    {
        name : "Ekspedisi",
        cell : row => row.ekspedisi !== null ? row.ekspedisi : '-', 
        sortable : true
    },
    {
        name : "Metode Pembayaran",
        cell : row => row.metodePembayaran !== null ? row.metodePembayaran : '-', 
        sortable : true
    },
    {
        name : "Status Barang",
        cell : row => row.statusBarang !== null ? row.statusBarang : '-', 
        sortable : true
    },
    {
        name : "Status Transaksi",
        cell : row => (
            <span className={row.statusTransaksi === 'Lunas' ? "text-success" : "text-danger" } > {row.statusTransaksi}</span>
        ), 
        sortable : true
    },
    {
        name : "",
        cell : row => (
          <CRow>
             <CButton color='light'>Detail</CButton>
          </CRow>
        ),
        sortable : false
    },
]
const StatusBarang = () => {
    const [startDate, setStartDate] = useState(new Date());
    
  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Status Barang</h2>
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

        <div style={{overflowX:'scroll', height:70,whiteSpace:'nowrap'}}>
            <CInput type="date" defaultValue={startDate}  size="lg" style={{width:300}} className='d-inline mr-2'></CInput>
            <CSelect size="lg" style={{width:300}} className='d-inline mr-2'>
                <option>Gudang</option>
                <option value="1">Semua</option>
                <option value="2">Sudah Transfer</option>
                <option value="3">Lunas</option>
                <option value="4">Retur</option>
                <option value="5">Cancel Order</option>
            </CSelect>
            <CSelect size="lg" style={{width:300}} className='d-inline mr-2'>
                <option>Ekspedisi</option>
                <option value="1">Semua</option>
                <option value="2">Sudah Transfer</option>
                <option value="3">Lunas</option>
                <option value="4">Retur</option>
                <option value="5">Cancel Order</option>
            </CSelect>
            <CSelect size="lg" style={{width:300}} className='d-inline mr-2'>
                <option>Metode Pembayaran</option>
                <option value="1">Semua</option>
                <option value="2">Sudah Transfer</option>
                <option value="3">Lunas</option>
                <option value="4">Retur</option>
                <option value="5">Cancel Order</option>
            </CSelect>  
            <CSelect size="lg" style={{width:300}} className='d-inline mr-2'>
                <option>Status Transaksi</option>
                <option value="1">Semua</option>
                <option value="2">Sudah Transfer</option>
                <option value="3">Lunas</option>
                <option value="4">Retur</option>
                <option value="5">Cancel Order</option>
            </CSelect>
            <CSelect size="lg" style={{width:300}} className='d-inline mr-2'>
                <option>Status Bayar</option>
                <option value="1">Semua</option>
                <option value="2">Sudah Transfer</option>
                <option value="3">Lunas</option>
                <option value="4">Retur</option>
                <option value="5">Cancel Order</option>
            </CSelect>  
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

export default StatusBarang
