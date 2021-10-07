import ContentWaiter from '../../../components/organisms/ContentWaiter';
import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';

export default function Waiters() {
  return (
    <section className="dashboard-container overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <Navbar activeMenu="waiters" />
          <ContentWaiter />
        </div>
      </main>
    </section>
  );
}
