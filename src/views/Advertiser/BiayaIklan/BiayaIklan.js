import React, { lazy, useState } from 'react'
import {Link} from 'react-router-dom'
import { CCol, CRow, CDataTable, CButtonGroup, CButton, CInput, CInputGroup, CFormInput, CInputGroupText, CSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from 'src/views/styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPen, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalBiayaIklan from './ModalBiayaIklan';

const usersData = [
    {no: 1, tanggal: '02/11/2021', domain: 'www.optimax.com' ,  namaProduk:'Optimax',  biaya:'Rp. 1.500.00'},
    {no: 2, tanggal: '02/11/2021', domain: 'www.lambungsehat.com' ,  namaProduk:'Gizidat',   biaya:'Rp. 1.500.00'},
    {no: 3, tanggal: '02/11/2021', domain: 'www.generos01.com' ,  namaProduk:'Generos',   biaya:'Rp. 1.500.00'},
    {no: 4, tanggal: '02/11/2021', domain: 'www.gizidatzidat.com' ,  namaProduk:'Gizidat',  biaya:'Rp. 1.500.00'},
    {no: 5, tanggal: '02/11/2021', domain: 'www.etawaku123.com' ,  namaProduk:'Etawaku',  biaya:'Rp. 1.500.00'},
]


const BiayaIklan = () => {
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
          name : "Biaya",
          cell : row => (
              <span className= "text-danger" > (-) {row.biaya}</span>
          ),
          sortable : false
        },
    ]


  return (
    <>
      <CRow className="mb-5">
        <CCol md="12" xs="12">
          <h2 className="text-info">Biaya Iklan</h2>
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
            <ModalBiayaIklan action="insert" style={{width:'100%'}}/>
          </CCol>
        </CRow>
      </div>

      <CRow className='mb-4 mt-2'>
        
        <CCol md="6" xs="12">
          <CInput type="date" defaultValue={startDate}  size="lg" className=""></CInput>
        </CCol>

        <CCol md="6" xs="12">
          <CSelect size="lg" >
            <option>Produk</option>
            <option value="1">Gizidat</option>
            <option value="2">Freshmag</option>
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

export default BiayaIklan