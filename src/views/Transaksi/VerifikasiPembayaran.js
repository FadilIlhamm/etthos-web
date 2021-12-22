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
  CInputGroupText

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from '../styles/stylesTables';
import ModalKonfirmasi from './ModalKonfirmasi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import API_URL from 'src/constans';

const VerifikasiPembayaran = () => {
    const [visible, setVisible] = useState(false);
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
            name : "Nomor Rekening",
            cell : row => row.daexpedisis !== null ? row.daexpedisis.norekening : '-', 
            sortable : true,
            maxWidth: "250px"
        },
        {
            name : "",
            cell : row => (
                <CRow>
                    <ModalKonfirmasi idtransaksi={ row.idtransaksi } id={row.id} totalharga={row.totalharga.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} subsidi={row.subsidi.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} ongkoskirim={row.ongkoskirim.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} status={row.status}></ModalKonfirmasi>
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

export default VerifikasiPembayaran