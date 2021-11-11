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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const usersData = [
    {no: 1, tanggal: '02/11/2021', namaAdv: 'Fadil' ,nominal: '1.500.000', noRek: '123456789',status:'plus'},
    {no: 2, tanggal: '02/11/2021', namaAdv: 'Fadil' ,nominal: '1.500.000', noRek: '123456789',status:'plus'},
    {no: 3, tanggal: '02/11/2021', namaAdv: 'Fadil' ,nominal: '1.500.000', noRek: '123456789',status:'plus'},
    {no: 4, tanggal: '02/11/2021', namaAdv: 'Fadil' ,nominal: '1.500.000', noRek: '123456789',status:'minus'},
    {no: 5, tanggal: '02/11/2021', namaAdv: 'Fadil' ,nominal: '1.500.000', noRek: '123456789',status:'minus',},
    {no: 6, tanggal: '02/11/2021', namaAdv: 'Fadil' ,nominal: '1.500.000', noRek: '123456789',status:'minus',},
    {no: 7, tanggal: '02/11/2021', namaAdv: 'Fadil' ,nominal: '1.500.000', noRek: '123456789',status:'minus',},
]


const BiayaAdvertiser = () => {
    const [visible, setVisible] = useState(false);
    
    const Columns = [
        {
            name : "No",
            cell : row => row.no !== null ? row.no : '-',
            sortable : true,
           maxWidth: '20px'
        },
        
        {
            name : "Tanggal",
            cell : row => row.tanggal !== null ? row.tanggal : '-', 
            sortable : true,
           
        },
        {
          name : "Nama Adv",
          cell : row => row.namaAdv !== null ? row.namaAdv : '-', 
          sortable : true,
         
        },
        {
            name : "No.Rekening",
            cell : row => row.noRek !== null ? row.noRek : '-', 
            sortable : true,
          
        },
        {
            name : "Nominal",
            cell : row => (
                <CRow>
                    <span className={row.status === 'plus' ? "text-success" : "text-danger"}>{row.status === 'plus' ? "(+) " + row.nominal : "(-) " + row.nominal }</span>
                </CRow>
            ),
            sortable : false
        },
    ]

  return (
    <>
      <CRow className="mb-4">
        <CCol md="12" xs="12">
          <h2 className="text-info">Biaya Advertiser</h2>
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

export default BiayaAdvertiser