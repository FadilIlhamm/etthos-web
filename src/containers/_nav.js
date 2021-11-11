import React from 'react'
import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers} from '@fortawesome/free-solid-svg-icons'


let itemDefault = []
const login = JSON.parse(sessionStorage.getItem('auth'))

if(login != null) {
  if( login.data.role === 4 )
  {
    itemDefault.push({
      _tag: 'CSidebarNavDropdown',
      name: 'Transaksi',
      icon: 'cil-dollar',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Verifikasi Pembayaran',
          to: '/verif-pembayaran',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Riwayat Transaksi',
          to: '/riwayat-trx',
        },
      ]
    })

    itemDefault.push({
      _tag: 'CSidebarNavItem',
      name: 'Biaya Advertiser',
      to: '/biaya-advertiser',
      icon: 'cil-group',
    })
    itemDefault.push({
      _tag: 'CSidebarNavDropdown',
      name: 'Pengaturan',
      icon: 'cil-settings',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Profil',
          to: '/profil',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Ubah Kata Sandi',
          to: '/ubah-kata-sandi',
        },
      ]
    })
  
    
  }
}

export default {
  items:itemDefault
};
