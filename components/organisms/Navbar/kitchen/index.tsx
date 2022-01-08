import Menu from './Menu';

interface NavbarProps {
  activeMenu: 'queue' | 'reservation'
}

export default function NavbarKitchen(props: NavbarProps) {
  const { activeMenu } = props;
  return (
    <div className="d-flex justify-content-around mb-30">
      <Menu title="REGULAR" href="/kitchen" active={activeMenu === 'queue'} />
      <Menu title="RESERVASI" href="/kitchen/reservation" active={activeMenu === 'reservation'} />
    </div>
  );
}
