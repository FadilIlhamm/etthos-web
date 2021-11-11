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
  CImg,
  CLabel,
  CCard,
  CCardBody

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import DataTable from 'react-data-table-component';
import customStyles from '../styles/stylesTables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'




const Profile = () => {

  return (
    <>
      <CRow className="mb-4">
        <CCol md="12" xs="12">
          <h2 className="text-info">Profil</h2>
        </CCol>
      </CRow>
        
      <CRow>
        <CCol md="12" xs="12">
            <div className="text-center">
                <CImg  src={'avatars/6.jpg'} className="c-avatar-img" style={{width:100 ,heigt:100}} />
            </div>
        </CCol>
      </CRow>
      <CRow className="mt-4">
        <CCol md="12" xs="12">
           <CLabel className="font-weight-bold">Data Diri</CLabel>
           <CCard>
               <CCardBody>
                    <CRow>
                        <CCol md={6}>
                            <CLabel className="mt-2 ">Nama</CLabel>
                            <CInput type="text" size='lg' ></CInput>
                            <CLabel className="mt-2">NIK (Nomor Induk Karyawan)</CLabel>
                            <CInput type="text" size='lg' ></CInput>
                            <CLabel className="mt-2">Nomor KTP</CLabel>
                            <CInput type="text" size='lg'></CInput>
                            <CLabel className="mt-2">Alamat</CLabel>
                            <CInput type="text" size='lg'></CInput>
                        </CCol>
                        <CCol md={6}>
                            <CLabel className="mt-2 ">Nomor HP</CLabel>
                            <CInput type="text" size='lg'></CInput>
                            <CRow>
                                <CCol md={6}>
                                    <CLabel className="mt-2 ">Tempat Lahir</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                    <CLabel className="mt-2">Jenis Kelamin</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                    
                                </CCol>
                                <CCol md={6}>
                                    <CLabel className="mt-2">Tanggal Lahir</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                    <CLabel className="mt-2">Satus Pernikahan</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                </CCardBody>
           </CCard>
        </CCol>
      </CRow>
      <CRow className="mt-4">
        <CCol md="6" xs="12">
           <CLabel className="font-weight-bold">Data Karyawan</CLabel>
           <CCard>
               <CCardBody>
                    <CRow>
                        <CCol md={12}>
                            <CLabel className="mt-2 ">Satus Karyawan</CLabel>
                            <CInput type="text" size='lg'></CInput>
                            <CRow>
                                <CCol md={6}>
                                    <CLabel className="mt-2 ">Tanggal Masuk</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                    <CLabel className="mt-2">Posisi</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                    
                                </CCol>
                                <CCol md={6}>
                                    <CLabel className="mt-2">Tanggal Keluar</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                    <CLabel className="mt-2">Level</CLabel>
                                    <CInput type="text" size='lg' ></CInput>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                </CCardBody>
           </CCard>
        </CCol>
        <CCol md="6" xs="12">
           <CLabel className="font-weight-bold">Data Rekening</CLabel>
           <CCard>
               <CCardBody>
                    <CRow>
                        <CCol md={12}>
                            <CLabel className="mt-2 ">Nama Bank</CLabel>
                            <CInput type="text" size='lg'></CInput>
                            <CLabel className="mt-2 ">Nomor Rekening</CLabel>
                            <CInput type="text" size='lg' style={{marginBottom:'14.5%'}}></CInput>
                        </CCol>
                    </CRow>
                </CCardBody>
           </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Profile