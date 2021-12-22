import React, { lazy, useState } from 'react'
import {Link} from 'react-router-dom'
import { CCol, CRow, CDataTable, CButtonGroup, CButton, CInput, CInputGroup, CFormInput, CInputGroupText, CSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from 'src/views/styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPen, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalUploadSaldo from './ModalUploadSaldo';

const usersData = [
    {no: 1, tanggal: '02/11/2021'},
    {no: 2, tanggal: '02/11/2021'},
    {no: 3, tanggal: '02/11/2021'},
    {no: 4, tanggal: '02/11/2021'},
    {no: 5, tanggal: '02/11/2021'},
]


const UploadSaldo = () => {
    const [startDate, setStartDate] = useState(new Date());
    

    const Columns = [
        {
            name : "No",
            cell : row => row.no !== null ? row.no : '-',
            sortable : true,
        },
        {
            name : "Tanggal",
            cell : row => row.tanggal !== null ? row.tanggal : '-', 
            sortable : true,
        },
        {
            name : "",
            cell : row => (
                <CRow>
                  <CCol xs={12} sm={12} md={12}>
                    <ModalUploadSaldo action="detail" buttonLabel="Detail" id={ row.id } />
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
          <h2 className="text-info">Tagihan Biaya Iklan - Upload Saldo</h2>
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
            <ModalUploadSaldo action="insert" buttonLabel={<FontAwesomeIcon icon={faPlus} />} style={{width:'100%'}}/>
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
            <option value="2">Fresh</option>
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

export default UploadSaldo