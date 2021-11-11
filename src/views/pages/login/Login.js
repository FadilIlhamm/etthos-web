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

const Login = () => {
  const username = useFormInput('');
  const password = useFormInput('');
  const reset = useFormInput('');
  const [errMessage, setErrMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loader, setLoader] = useState(false);
  const [login,setLogin] = useState(null)

  const handleLogin = async (event) => {
    setLoader(true)
    event.preventDefault();
  
    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'email=' + username.value + '&password=' + password.value
    }
  
    const api = await fetch(`http://34.101.240.70:3000/api/ethos/login`, requestOptions)
    const res = await api.json();
    console.log(res)
    
    if (api.ok) {
      sessionStorage.setItem('auth', JSON.stringify(res))
      setLoader(false)
      setRedirect(true)
      setOpen(false);
    }else{
      setLoader(false)
      setErrMessage(res.error)
      alert('Email Atau Password Yang Anda Masukkan Tidak Sesuai!')
      setOpen(true);
    }
  }
  console.log(login)
  if ( redirect === true ) {
    return window.location.reload()
  } else if( sessionStorage.getItem('auth') !== null ) {
    return (<Redirect to="/verif-pembayaran"/>)
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6" className="mt-2">
            <div>
              <CForm onSubmit={ handleLogin } >
                <CCol md="11">
                  <img src={ImageIcon} className="mb-5" style={{width: '25%'}}/>
                  <h2 className="mb-4">Selamat Datang di Ethos Digital Marketing Management System</h2>
                  <h4 className="text-info mt-4 mb-4">Silahkan Login ke akun Anda</h4>
                  <CLabel>Email</CLabel>
                  <CInput placeholder='Masukkan Email Anda' type="text" {...username} style={{heigt:'20%'}} className="mt-1 mb-1"></CInput>
                  <CLabel>Kata Sandi</CLabel>
                  <CInput placeholder='Masukkan Kata Sandi Anda' type="password" className="mt-1" {...password} ></CInput>
                  <CRow className="mb-5 mt-2">
                    <CCol md="6">
                      <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox 
                            custom 
                            id="inline-checkbox1" 
                            name="inline-checkbox1" 
                            value="option1" 
                          />
                          <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Tetap Masuk</CLabel>
                      </CFormGroup>
                    </CCol>
                    <CCol md="6" className="text-right ">
                      <Link to='/lupa-password'>Lupa Kata Sandi</Link>
                    </CCol>
                    
                  </CRow>
                  <CButton type="submit" color="info" block style={{marginTop: '20%'}} className="p-3"> {loader === true ? <CSpinner size="sm"/> : 'Login'}</CButton>
                </CCol>
              </CForm>
            </div>
          </CCol>
          <CCol md="6">
            <img src={ImageLogin} style={{width: '100%'}} />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
