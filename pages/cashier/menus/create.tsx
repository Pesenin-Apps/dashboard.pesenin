import ContentMenuCreate from '../../../components/organisms/ContentMenuCreate';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';

export default function Create() {
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="menus" />
          <ContentMenuCreate />
        </div>
      </main>
    </section>
  );
}
