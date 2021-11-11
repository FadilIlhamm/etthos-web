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
  CInputGroupText,
  CLabel

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from '../styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'




const UbahKataSandi = () => {

  return (
    <>
      <CRow className="mb-4">
        <CCol md="12" xs="12">
          <h2 className="text-info">Ubah Kata Sandi</h2>
        </CCol>
      </CRow>
      
      <CRow className="mt-4">
        <CCol md="12" xs="12">
            <CLabel className="mt-2 font-weight-bold">Email</CLabel>
            <CInput placeholder='Masukkan Email Anda' type="text" size='lg' className="mt-2"></CInput>
            <CLabel className="mt-2 font-weight-bold">Kata Sandi Lama</CLabel>
            <CInput placeholder='Masukkan Kata Sandi Lama Anda' size='lg' type="password" className="mt-2" ></CInput>
            <CLabel className="mt-2 font-weight-bold">Kata Sandi Bartu</CLabel>
            <CInput placeholder='Masukkan Kata Sandi Baru Anda' size='lg' type="password" className="mt-2 mb-5" ></CInput>
            <CButton type="submit" color="info" block size='lg' className="mt-5"> Ubah Kata Sandi</CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default UbahKataSandi