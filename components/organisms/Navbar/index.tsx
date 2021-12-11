import Menu from './Menu';

interface NavbarProps {
  activeMenu: 'orders' | 'histories' | 'tables' | 'menus' | 'waiters'
}

export default function Navbar(props: NavbarProps) {
  const { activeMenu } = props;
  return (
    <div className="d-flex justify-content-between mb-30">
      <Menu title="DAFTAR PESANAN" href="/cashier" active={activeMenu === 'orders'} />
      <Menu title="RIWAYAT PESANAN" href="/cashier/histories" active={activeMenu === 'histories'} />
      <Menu title="MEJA" href="/cashier/tables" active={activeMenu === 'tables'} />
      <Menu title="DAFTAR PRODUK" href="/cashier/menus" active={activeMenu === 'menus'} />
      <Menu title="PELAYANAN" href="/cashier/waiters" active={activeMenu === 'waiters'} />
    </div>
  );
}
