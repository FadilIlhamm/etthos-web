import React from 'react'
import CIcon from '@coreui/icons-react'

export default {

  _nav : [
    {
      _tag: 'CSidebarNavItem',
      name: 'Beranda',
      to: '/dashboard',
      icon: "cil-grid",
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Stok',
      to: '',
      icon: 'cil-list',
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Gudang',
      icon: 'cil-home',
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
      name: 'Pelanggan',
      to: '/pelanggan',
      icon: 'cil-user-follow',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Master Data',
      to: '',
      icon: 'cil-file',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Karyawan',
      to: '',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Laporan',
      to: '',
      icon: 'cil-clipboard',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Pengaturan',
      to: '/login',
      icon: 'cil-settings',
    },
    
  ],

  navFinance:[
    {
      _tag: 'CSidebarNavItem',
      name: 'Beranda',
      to: '/dashboard',
      icon: "cil-grid",
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Transaksi',
      icon: 'cil-dollar',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Verifikasi Pembayaran',
          to: '/verifikasi-pembayaran',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Riwayat Transaksi',
          to: '/riwayat-trx',
        },
      ]
    },
  ]

}



