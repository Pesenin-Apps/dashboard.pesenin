import ContentOrder from '../../components/organisms/ContentOrder/Index';
import Navbar from '../../components/organisms/Navbar';
import Sidebar from '../../components/organisms/Sidebar';

export default function Cashier() {
  return (
    <>
      <section className="dashboard-container overflow-auto">

        <Sidebar />

        <main className="main-wrapper">

          <div className="ps-lg-0">

            <Navbar activeMenu="orders" />
            <ContentOrder />

          </div>

        </main>

      </section>
    </>
  );
}
