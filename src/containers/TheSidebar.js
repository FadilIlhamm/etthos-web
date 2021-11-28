import React, { useState, useEffect  } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CNavItem,
  CProgress,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logo from '../assets/image_ethos.png'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const [auth, setAuth]     = useState(null)

  useEffect(() => {
    const login = JSON.parse(sessionStorage.getItem('auth'))
    setAuth(login)
  }, []);
  
  return (
    <CSidebar
      colorScheme="light"
      style={{backgroundColor:'#FAFAFA'}}
      show={show}
      unfoldable
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="mt-4" style={{backgroundColor:'#FAFAFA'}} to="/">
        <CImg
            src={logo}
            class="c-sidebar-brand-full"
        />
      </CSidebarBrand>
      <CSidebarNav className="mt-4 pt-4">
        <CCreateElement
          className="p-4"
          items={auth !== null ? navigation : []}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
