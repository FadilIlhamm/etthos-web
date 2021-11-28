import React from 'react'
import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers} from '@fortawesome/free-solid-svg-icons'


const itemDefault = []
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
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Biaya Advertiser',
      to: '/biaya-advertiser',
      icon: 'cil-group',
    },
    {
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
  if( login.data.role === 5 )
  {
    itemDefault.push({
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      icon: 'cil-home',
      to: '/dashboard-gudang',
    },
    
    
    {
      _tag: 'CSidebarNavItem',
      name: 'Permintaan Pesanan',
      icon: 'cil-dollar',
      to: '/permintaan-pesanan'
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Stok',
      icon: 'cil-basket',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Real Stok',
          to: '/real-stok',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Riwayat Stok',
          to: '/riwayat-stok',
        },
      ]
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Gudang',
      icon: 'cil-house',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Status Barang',
      icon: 'cil-wifi-signal0',
    },
    {
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
    }
    )
  }
}

export default itemDefault
