import React, { lazy, useState } from 'react'
import {Link} from 'react-router-dom'
import { CCol, CRow, CDataTable, CButtonGroup, CButton, CInput, CInputGroup, CFormInput, CInputGroupText, CSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from 'src/views/styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPen, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalStok from './ModalStok';

const usersData = [
    {no: 1, tanggal: '02/11/2021', noDO: '00123' , sku:'ETA01' , namaProduk:'Etawaku', gudang: 'Jakarta', stok: 15000,},
    {no: 2, tanggal: '02/11/2021', noDO: '00123' , sku:'GIZ01' , namaProduk:'Gizidat', gudang: 'Cilacap', stok: 15000, },
    {no: 3, tanggal: '02/11/2021', noDO: '00123' , sku:'FRE01' , namaProduk:'Freshmag', gudang: 'Surabaya', stok: 15000,},
    {no: 4, tanggal: '02/11/2021', noDO: '00123' , sku:'GEN01' , namaProduk:'Generos', gudang: 'Jakarta', stok: 15000,},
    {no: 5, tanggal: '02/11/2021', noDO: '00123' , sku:'GIZ02' , namaProduk:'Gizidat', gudang: 'Cilacap', stok: 1500, },
    {no: 6, tanggal: '02/11/2021', noDO: '00123' , sku:'OPT01' , namaProduk:'Optimax', gudang: 'Surabaya', stok: 1500,},
    {no: 7, tanggal: '02/11/2021', noDO: '00123' , sku:'ETA02' , namaProduk:'Etawaku', gudang: 'Jakarta', stok: 1000, },
]


const RealStok = () => {
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
            name : "No.DO",
            cell : row => row.noDO !== null ? row.noDO : '-', 
            sortable : true,
            maxWidth: "150px"
        },
        {
          name : "SKU",
          cell : row => row.sku !== null ? row.sku : '-', 
          sortable : true,
          maxWidth: "150px"
        },
        {
          name : "Nama Produk",
          cell : row => row.namaProduk !== null ? row.namaProduk : '-', 
          sortable : true,
          maxWidth: "150px"
        },
        {
          name : "Gudang",
          cell : row => row.gudang !== null ? row.gudang : '-', 
          sortable : true,
          maxWidth: "100px"
        },
        {
          name : "Stok",
          cell : row => row.stok !== null ? row.stok : '-', 
          sortable : true,
          maxWidth: "100px"
        },
        {
            name : "",
            cell : row => (
                <CRow>
                  <CCol xs={12} sm={12} md={12}>
                    <ModalStok action="update" buttonLabel={<FontAwesomeIcon icon={faPen} />} id={ row.id } />
                    <ModalStok action="delete" buttonLabel={<FontAwesomeIcon icon={faTrashAlt} />} id={ row.id } />
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
          <h2 className="text-info">Stok</h2>
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
            <ModalStok action="insert" buttonLabel={<FontAwesomeIcon icon={faPlus} />} style={{width:'100%'}}/>
          </CCol>
        </CRow>
      </div>

      <CRow className='mb-4 mt-2'>
        
        <CCol md="4" xs="12">
          <CInput type="date" defaultValue={startDate}  size="lg" className=""></CInput>
        </CCol>

        <CCol md="4" xs="12">
          <CSelect size="lg" >
            <option>Gudang</option>
            <option value="1">Semua</option>
            <option value="2">Sudah Transfer</option>
            <option value="3">Lunas</option>
            <option value="4">Retur</option>
            <option value="5">Cancel Order</option>
          </CSelect>
        </CCol>
        <CCol md="4" xs="12">
          <CSelect size="lg" >
            <option>Produk</option>
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

export default RealStok