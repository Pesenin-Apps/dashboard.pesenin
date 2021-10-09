import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { CountOrderTypes, UserTypes } from '../../../services/data-types';

interface SidebarProps {
  userData: UserTypes;
  countData: CountOrderTypes;
}

export default function Sidebar(props: SidebarProps) {
  const { userData, countData } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Header name={userData.fullname} email={userData.email} />
        <Content data={countData} />
        <Footer />
      </div>
    </section>
  );
}
