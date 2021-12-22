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
  CChartPolarArea,
  CChart
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'


const DashboardAdv = () => {
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
        <CCol md="3" sm="12">
          <CCard color='success'>
            <span className="text-white mb-4 ml-2 mt-2">20/10/21</span>
            <h4 className="ml-2 text-white">Penghasilan</h4>
            <h4 className="ml-2 text-white">Rp.50.000.000</h4>
          </CCard>
        </CCol>

        <CCol md="3" sm="12">
          <CCard color='danger'>
            <span className="text-white mb-4 ml-2 mt-2">20/10/21</span>
            <h4 className="ml-2 text-white">Total Biaya Iklan</h4>
            <h4 className="ml-2 text-white">Rp.50.000.000</h4>
          </CCard>
        </CCol>
        <CCol md="3" sm="12">
          <CCard color='info'>
            <span className="text-white mb-4 ml-2 mt-2">20/10/21</span>
            <h4 className="ml-2 text-white">Total Closingan</h4>
            <h4 className="ml-2 text-white">Rp.50.000.000</h4>
          </CCard>
        </CCol>
        <CCol md="3" sm="12">
          <CCard color='warning'>
            <span className="text-white mb-4 ml-2 mt-2">20/10/21</span>
            <h4 className="ml-2 text-white">Domain Aktif</h4>
            <h4 className="ml-2 text-white">20</h4>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12" sm="12">
          <CCard>
            <CCardHeader className='border-0'>
                <CRow>
                    <CCol xs={8}>
                        <h3>Penghasilan</h3>
                    </CCol>
                    <CCol xs={4} className="text-right">
                        <CSelect size="lg" style={{width:'100%'}} className='text-info border-0'>
                            <option value="1">SKU</option>
                        </CSelect>
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
            <div className="chart-wrapper">
                <CChartBar
                    datasets={[
                    {
                        label : false,
                        backgroundColor: '#009CC6',
                        data: [40, 20, 12, 39]
                        }
                    ]}
                    labels= {['Bemomio','Freshmag','Gizidat','Antimo']}
                    options={{
                        tooltips: {
                            enabled: true
                        },
                        legend: {
                        display: false,
                        },
                    }}
                />
            </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardAdv
