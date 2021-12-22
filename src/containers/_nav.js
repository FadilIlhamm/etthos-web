import React from 'react'
import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers} from '@fortawesome/free-solid-svg-icons'


const itemDefault = []
const login = JSON.parse(sessionStorage.getItem('auth'))

if(login != null) {
  if( login.data.role === 6 )
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
  if( login.data.role === 7 )
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
      name: 'Inventory',
      icon: 'cil-basket',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Inventory',
          to: '/inventory',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Real Inventory',
          to: '/real-inventory',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Riwayat Inventory',
          to: '/riwayat-inventory',
        },
      ]
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Gudang',
      icon: 'cil-house',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Gudang Jakarta',
          to: '/gudang-jakarta',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Gudang Surabaya',
          to: '/gudang-surabaya',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Gudang Cilacap',
          to: '/gudang-cilacap',
        },
      ]
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Status Barang',
      icon: 'cil-wifi-signal0',
      to: '/status-barang',
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
  if( login.data.role === 5 )
  {
    itemDefault.push({
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      icon: 'cil-home',
      to: '/dashboard-adv',
    },
    
    
    {
      _tag: 'CSidebarNavItem',
      name: 'Buat Iklan',
      icon: 'cib-analogue',
      to: '/buat-iklan'
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Biaya Iklan',
      icon: 'cil-wallet',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Biaya Iklan',
          to: '/biaya-iklan',
        },
        {
          _tag: 'CSidebarNavDropdown',
          name: 'Tagihan Biaya Iklan',
          _children: [
            {
              _tag: 'CSidebarNavItem',
              name: 'Upload Saldo',
              to: '/upload-saldo',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'Upload Tagihan',
              to: '/upload-tagihan',
            },
            
          ]
        },
      ]
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
