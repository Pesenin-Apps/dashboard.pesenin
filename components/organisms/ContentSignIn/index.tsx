import Form from './Form';
import Header from './Header';
import Title from './Title';

export default function ContentSignIn() {
  return (
    <section className="sign-in mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <Header />
        <Title />
        <Form />
      </div>
    </section>
  );
}
