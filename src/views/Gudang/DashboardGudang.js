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
  CImg
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
          <h2 className="text-info">Dashboard Gudang</h2>
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
          <span className="font-weight-bold text-info">Statistik SKU</span>
          <CChartBar
              datasets={[
                {
                  label : false,
                  backgroundColor: [
                    '#41B883',
                    '#E46651',
                    '#00D8FF',
                    '#DD1B16',

                  ],
                  data: [40, 20, 12, 39, 10, 40, 39]
                }
              ]}
              labels= {['Senin','Selasa','Rabu','Kamis', 'Jumat', 'Sabtu', 'Minggu']}
              options={{
                tooltips: {
                  enabled: true
                },
                legend: {
                  display: false,
                },
              }}
          />

          <span className="font-weight-bold text-info">Rekap</span>
        </CCol>

        <CCol md="6" sm="12">

        </CCol>
      </CRow>
    </>
  )
}

export default DashboardGudang
