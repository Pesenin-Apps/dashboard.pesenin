import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Header />
        <Content />
        <Footer />
      </div>
    </section>
  );
}
