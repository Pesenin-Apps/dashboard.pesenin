import Navbar from '../../../components/organisms/Navbar';
import Sidebar from '../../../components/organisms/Sidebar';

export default function Histories() {
  return (
    <>
      <section className="dashboard-container overflow-auto">

        <Sidebar />

        <main className="main-wrapper">

          <div className="ps-lg-0">

            <Navbar activeMenu="histories" />

          </div>

        </main>

      </section>
    </>
  );
}
