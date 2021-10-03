import Sidebar from '../../../components/organisms/Sidebar';
import Navbar from '../../../components/organisms/Navbar';
import ContentTable from '../../../components/organisms/ContentTable';

export default function Tables() {
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="tables" />
          <ContentTable />
        </div>
      </main>
    </section>
  );
}
