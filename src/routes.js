import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Pelanggan = React.lazy(() => import('./views/Pelanggan/Pelanggan'));

//gudang
const DashboardGudang = React.lazy(() => import('./views/Gudang/DashboardGudang'));
const PermintaanPesanan = React.lazy(() => import('./views/Gudang/Transaksi/PermintaanPesanan'));
const Inventory = React.lazy(() => import('./views/Gudang/Stok/Inventory/Inventory'))
const RealInventory = React.lazy(() => import('./views/Gudang/Stok/RealInventory/RealInventory'))
const RiwayatInventory = React.lazy(() => import('./views/Gudang/Stok/RiwayatInventory/RiwayatInventory'))
const GudangJakarta = React.lazy(() => import('./views/Gudang/GudangJakarta'))
const GudangSurabaya = React.lazy(() => import('./views/Gudang/GudangSurabaya'))
const GudangCilacap = React.lazy(() => import('./views/Gudang/GudangCilacap'))
const StatusBarang = React.lazy(() => import('./views/Gudang/StatusBarang/StatusBarang'))

//finance
const VerifikasiPembayaran = React.lazy(() => import('./views/Transaksi/VerifikasiPembayaran'));
const RiwayatTransaksi = React.lazy(() => import('./views/Transaksi/RiwayatTransaksi'));
const BiayaAdvertiser = React.lazy(() => import('./views/biayaAdvertiser/BiayaAdvertiser'));
const Profil = React.lazy(() => import('./views/profile/Profile'));
const UbahKataSandi = React.lazy(() => import('./views/profile/UbahKataSandi'));

//advertiser
const DashboardAdv = React.lazy(() => import('./views/Advertiser/DashboardAdv'));
const BuatIklan = React.lazy(() => import('./views/Advertiser/BuatIklan/BuatIklan'));
const BiayaIklan = React.lazy(() => import('./views/Advertiser/BiayaIklan/BiayaIklan'));
const UploadSaldo = React.lazy(() => import('./views/Advertiser/TagihanBiayaIklan/UploadSaldo/UploadSaldo'));
const UploadTagihan = React.lazy(() => import('./views/Advertiser/TagihanBiayaIklan/UploadTagihan/UploadTagihan'));






const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/pelanggan', name: 'Pelanggan', component: Pelanggan },
  { path: '/profil', name: 'Profil', component: Profil },
  { path: '/ubah-kata-sandi', name: 'Ubah Kata Sandi', component: UbahKataSandi },

  //gudang
  { path: '/dashboard-gudang', name: 'Dashboard Gudang', component: DashboardGudang },
  { path: '/permintaan-pesanan', name: 'Permintaan Pesanan', component: PermintaanPesanan },
  { path: '/inventory', name: 'Inventory', component: Inventory },
  { path: '/real-inventory', name: 'Real Inventory', component: RealInventory },
  { path: '/riwayat-inventory', name: 'Riwayat Inventory', component: RiwayatInventory },
  { path: '/gudang-jakarta', name: 'Gudang Jakarta', component: GudangJakarta },
  { path: '/gudang-surabaya', name: 'Gudang Surabaya', component: GudangSurabaya },
  { path: '/gudang-cilacap', name: 'Gudang Cilacap', component: GudangCilacap },
  { path: '/status-barang', name: 'Status Barang', component: StatusBarang },
  
  //finance
  { path: '/verif-pembayaran', name: 'Verifikasi Pembayaran', component: VerifikasiPembayaran },
  { path: '/riwayat-trx', name: 'Riwayat Transaksi', component: RiwayatTransaksi },
  { path: '/biaya-advertiser', name: 'Biaya Advertiser', component: BiayaAdvertiser },
  
  //advertiser
  { path: '/dashboard-adv', name: 'Dashboard Advertiser', component: DashboardAdv },
  { path: '/buat-iklan', name: 'Buat Iklan', component: BuatIklan },
  { path: '/biaya-iklan', name: 'Biaya Iklan', component: BiayaIklan },
  { path: '/upload-saldo', name: 'Upload Saldo', component: UploadSaldo },
  { path: '/upload-tagihan', name: 'Upload Tagihan', component: UploadTagihan },


]

export default routes;
