import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Pelanggan = React.lazy(() => import('./views/Pelanggan/Pelanggan'));
const GudangJakarta = React.lazy(() => import('./views/Gudang/GudangJakarta'));
const GudangSurabaya = React.lazy(() => import('./views/Gudang/GudangSurabaya'));
const GudangCilacap = React.lazy(() => import('./views/Gudang/GudangCilacap'));
const VerifikasiPembayaran = React.lazy(() => import('./views/Transaksi/VerifikasiPembayaran'));
const RiwayatTransaksi = React.lazy(() => import('./views/Transaksi/RiwayatTransaksi'));
const BiayaAdvertiser = React.lazy(() => import('./views/biayaAdvertiser/BiayaAdvertiser'));
const Profil = React.lazy(() => import('./views/profile/Profile'));
const UbahKataSandi = React.lazy(() => import('./views/profile/UbahKataSandi'));





const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/pelanggan', name: 'Pelanggan', component: Pelanggan },
  { path: '/gudang-jakarta', name: 'Gudang Jakarta', component: GudangJakarta },
  { path: '/gudang-surabaya', name: 'Gudang Surabaya', component: GudangSurabaya },
  { path: '/gudang-cilacap', name: 'Gudang Cilacap', component: GudangCilacap },
  { path: '/verif-pembayaran', name: 'Verifikasi Pembayaran', component: VerifikasiPembayaran },
  { path: '/riwayat-trx', name: 'Riwayat Transaksi', component: RiwayatTransaksi },
  { path: '/biaya-advertiser', name: 'Biaya Advertiser', component: BiayaAdvertiser },
  { path: '/profil', name: 'Profil', component: Profil },
  { path: '/ubah-kata-sandi', name: 'Ubah Kata Sandi', component: UbahKataSandi },




]

export default routes;
