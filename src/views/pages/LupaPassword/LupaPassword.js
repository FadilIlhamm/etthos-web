import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormGroup,
  CInputCheckbox,
  CLabel,
  CSpinner
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ImageLogin from '../../../assets/image_login_ethos.png'
import ImageIcon from '../../../assets/image_ethos.png'
import API_URL from 'src/constans'
// import axios from 'axios'



const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

const LupaPassword = () => {
  const username = useFormInput('');
  const password = useFormInput('');
  const reset = useFormInput('');
  const [errMessage, setErrMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loader, setLoader] = useState(false);


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="12">
            <div>
              <CForm>
                <CCol md="12">
                  <img src={ImageIcon} className="mb-5" style={{width: '12%'}}/>
                  <h2 className="mb-4">Lupa Kata Sandi</h2>
                  <h4 className="text-info mt-4 mb-4">Silahkan masukkan email anda</h4>
                  <CLabel>Email</CLabel>
                  <CInput placeholder='Masukkan Email Anda' type="text" {...username} style={{heigt:'20%'}} className="mt-1 mb-1"></CInput>
                  <p className="text-right">Anda akan mendapat link untuk merubah kata sandi via email.</p>
                  <CButton type="submit" color="info" block style={{marginTop: '20%'}} className="p-3"> {loader === true ? <CSpinner size="sm"/> : 'Kirim'}</CButton>
                </CCol>
              </CForm>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default LupaPassword