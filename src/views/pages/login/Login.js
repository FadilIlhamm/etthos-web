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
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ImageLogin from '../../../assets/image-login.png'


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

  const handleLogin = async (event) => {
    event.preventDefault();
  
    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    }
  
    const api = await fetch(`https://mobile.telkomuniversity.ac.id/admin/login`, requestOptions)
    const res = await api.json();
    console.log(res)
    
    if (api.ok) {
      sessionStorage.setItem('auth', JSON.stringify(res))
      setRedirect(true)
      setOpen(false);
    }else{
      setErrMessage(res.error)
      alert('Email Atau Password Yang Anda Masukkan Tidak Sesuai!')
      username.value =('')
      setOpen(true);
    }
  }

  if ( redirect === true ) {
    return window.location.reload()
  } else if( sessionStorage.getItem('auth') !== null ) {
    return (<Redirect exact from="/login" to="/dashboard" />)
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6" className="mt-4">
            <div>
              <CForm onSubmit={ handleLogin } >
                <CCol md="10">
                  <h1 className="text-info">ETHOS</h1>
                  <h2 className="mb-4">Selamat Datang di Ethos Digital Marketing Management System</h2>
                  <h4 className="text-info mt-5">Login</h4>
                  <CInput placeholder='Email' type="text" className="mt-3" {...username}></CInput>
                  <CInput placeholder='Password' type="password" className="mt-3" {...password} ></CInput>
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
                      <Link>Lupa Kata Sandi</Link>
                    </CCol>
                    
                  </CRow>
                  <CButton type="submit" color="info" block style={{marginTop: '25%'}} className="p-3">Login</CButton>
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
