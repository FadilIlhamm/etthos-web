import React, { lazy, useState,useEffect } from 'react'
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
import axios from 'axios';
import API_URL from 'src/constans';



const RiwayatTransaksi = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [auth, setAuth] = useState(null)

    const getTransaksi = async () => {
      await axios.get(`${API_URL}transaksi/all`, {
          })
          .then(res => {
              let row = res.data.data
              setData(row);
          })
          .catch(error => {
          if (error) {
              console.log( "Error : " + error )
          }
      })
    }

    useEffect(() => {
      const login = JSON.parse(sessionStorage.getItem('auth'))
      setAuth(login)
    }, [])
  
    useEffect(() => {
      if(auth !== null){
        getTransaksi();
      }
    }, [auth])

    const Columns = [
        {
            name : "No",
            cell : row => row.id !== null ? row.id : '-',
            sortable : true,
            maxWidth: "12px"
        },
        {
          name : "Tanggal",
          cell : row => row.createdAt !== null ? row.createdAt.substr(8,2) + '/' + row.createdAt.substr(5,2) + '/' + row.createdAt.substr(2,2) : '-', 
          sortable : true,
          maxWidth: "20px"
        },
        {
          name : "Invoice",
          cell : row => row.invoiceId !== null ? row.invoiceId : '-', 
          sortable : true,
          maxWidth: "150px"
          
        },
        {
          name : "Nominal",
          cell : row => row.totalharga !== null ? row.totalharga.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') : '-', 
          sortable : true,
          maxWidth: "40px"
        },
        {
            name : "Bank",
            cell : row => row.daexpedisis !== null ? row.daexpedisis.namabank : '-', 
            sortable : true,
            maxWidth: "150px"
        },
    
        {
          name : "No. Rekening",
          cell : row => row.daexpedisis !== null ? row.daexpedisis.norekening : '-', 
          sortable : true,
          maxWidth: "250px"
        },
        {
          name : "Status Transaksi",
          cell : row => (
            <span 
            className= { 
              row.status === 'F' ? 'text-success' : 
              ( row.status === 'E' ? 'text-warning' : 
                  (row.status === 'K' ? 'text-danger': 'text-primary')  
              )
            }  
          > 
          { 
              row.status === 'F' ? 'Lunas' : 
              ( row.status === 'E' ? 'Belum Lunas' : 
                  (row.status === 'K' ? 'Retur': 'Menunggu Konfirmasi')  
              )
            }  
          </span>
          ), 
          sortable : true,
         
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
                data={data}
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