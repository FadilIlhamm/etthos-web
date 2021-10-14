import React, { lazy } from 'react'
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



const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
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

export default Dashboard
