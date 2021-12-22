import React, { lazy,useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CImg,
  CSelect
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'


const DashboardGudang = () => {
  const [redirectOut, setRedirectOut] = useState(false);

  const onLogout = event => {
    event.preventDefault();
    
    sessionStorage.removeItem('auth')
    if(sessionStorage.getItem('auth') === null){
      setRedirectOut(true)
    }
  }

  if ( redirectOut === true ) {
    return (<Redirect exact  to="/login" />)
  } 

  return (
    <>
      <CRow className="mb-5">
        <CCol md="9" xs="8">
          <h2 className="text-info">Dashboard</h2>
        </CCol>
        <CCol md="3" xs="4"  className="text-right">
          <CRow>
            <CCol md="12" xs="12">
              <CIcon name="cil-account-logout" size="xl" className="mb-4 mr-3 text-info" onClick= {(event)=>onLogout(event)} /> 
              <div className="c-avatar">
                <CImg
                  src={'avatars/6.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
              </div>
            </CCol>
           
          </CRow>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6" sm="12">
          <CCard color='success'>
            <CRow className="p-5">
              <CCol lg='3' md="4" sm="5" xs='5'>
                <CIcon size={'5xl'} name={'cilBarChart'} className="text-white" />
              </CCol>
              <CCol lg='9' md="8" sm="7" xs='7'>
                <h2 className="text-white mb-3">Availability Rate</h2>
                <h2 className="text-white">100</h2>
              </CCol>
            </CRow>
          </CCard>
        </CCol>

        <CCol md="6" sm="12">
          <CCard color='warning'>
            <CRow className="p-5">
              <CCol lg='3' md="4" sm="5" xs='5'>
                <CIcon size={'5xl'} name={'cilStorage'} className="text-white" />
              </CCol>
              <CCol lg='9' md="8" sm="7" xs='7'>
                <h2 className="text-white mb-3">Stok</h2>
                <h2 className="text-white">100</h2>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12" sm="12">
          <CCard>
            <CCardHeader className='border-0'>
              <h6>Status Ekspedisi</h6>
              
              <CSelect size="lg" style={{width:'100%'}} className='text-info border-0'>
                <option value="1">Ninja Express</option>
              </CSelect>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol md="4" sm="12">
                  <CCard className="p-4 border-dark">
                    <span className="mb-2">Dalam Proses</span>
                    <h1>10</h1>
                  </CCard>
                </CCol>
                <CCol md="4" sm="12">
                <CCard className="p-4 border-dark">
                    <span className="mb-2">Paket Hilang</span>
                    <h1>10</h1>
                  </CCard>
                </CCol>
                <CCol md="4" sm="12">
                <CCard className="p-4 border-dark">
                    <span className="mb-2">Pending</span>
                    <h1>10</h1>
                  </CCard>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="4" sm="12">
                  <CCard className="p-4 border-dark">
                    <span className="mb-2">Pick Up</span>
                    <h1>10</h1>
                  </CCard>
                </CCol>
                <CCol md="4" sm="12">
                <CCard className="p-4 border-dark">
                    <span className="mb-2">Return</span>
                    <h1>10</h1>
                  </CCard>
                </CCol>
                <CCol md="4" sm="12">
                <CCard className="p-4 border-dark">
                    <span className="mb-2">Success</span>
                    <h1>10</h1>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardGudang
