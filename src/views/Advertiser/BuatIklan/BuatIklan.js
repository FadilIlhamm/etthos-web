import React, { lazy, useState } from 'react'
import {Link} from 'react-router-dom'
import { CCol, CRow, CDataTable, CButtonGroup, CButton, CInput, CInputGroup, CFormInput, CInputGroupText, CSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from 'src/views/styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPen, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalBuatIklan from './ModalBuatIklan';

const usersData = [
    {no: 1, tanggal: '02/11/2021', domain: 'www.optimax.com' ,  namaProduk:'Optimax', status:'Aktif'},
    {no: 2, tanggal: '02/11/2021', domain: 'www.lambungsehat.com' ,  namaProduk:'Gizidat',  status:'Tidak Aktif'},
    {no: 3, tanggal: '02/11/2021', domain: 'www.generos01.com' ,  namaProduk:'Generos',  status:'Aktif'},
    {no: 4, tanggal: '02/11/2021', domain: 'www.gizidatzidat.com' ,  namaProduk:'Gizidat', status:'Aktif'},
    {no: 5, tanggal: '02/11/2021', domain: 'www.etawaku123.com' ,  namaProduk:'Etawaku', status:'Tidak Aktif'},
]


const BuatIklan = () => {
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
           
        },
        {
            name : "Domain",
            cell : row => row.domain !== null ? row.domain : '-', 
            sortable : true,
            
        },
        {
          name : "Nama Produk",
          cell : row => row.namaProduk !== null ? row.namaProduk : '-', 
          sortable : true,
         
        },
        {
          name : "Status",
          cell : row => (
              <span className={row.status === 'Aktif' ? "text-success" : "text-danger" } > {row.status}</span>
          ),
          sortable : false
        },
        {
            name : "",
            cell : row => (
                <CRow>
                  <CCol xs={12} sm={12} md={12}>
                    <ModalBuatIklan action="update" buttonLabel={<FontAwesomeIcon icon={faPen} />} id={ row.id } />
                    <ModalBuatIklan action="delete" buttonLabel={<FontAwesomeIcon icon={faTrashAlt} />} id={ row.id } />
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
          <h2 className="text-info">Buat Iklan</h2>
        </CCol>
      </CRow>

      <div style={{backgroundColor: '#F2F2F2', borderRadius:10}} className='p-3 mb-2'>
        <CRow>
          <CCol md="9" xs="9">
            <CInputGroup size="lg">
                <CInputGroupText className="bg-white" id="basic-addon1" size="lg"><FontAwesomeIcon size="sm" icon={faSearch}/></CInputGroupText>
                <CInput placeholder="Cari" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </CInputGroup>  
          </CCol>
          <CCol md="3" xs="3">
            <ModalBuatIklan action="insert" buttonLabel={<FontAwesomeIcon icon={faPlus} />} style={{width:'100%'}}/>
          </CCol>
        </CRow>
      </div>

      <CRow className='mb-4 mt-2'>
        
        <CCol md="4" xs="12">
          <CInput type="date" defaultValue={startDate}  size="lg" className=""></CInput>
        </CCol>

        <CCol md="4" xs="12">
          <CSelect size="lg" >
            <option>Status</option>
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

export default BuatIklan