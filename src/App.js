import Footer from './components/common/Footer';
import { Header } from './components/common/Header';
import { RouterInit } from './routers/RouterInit';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function App() {
  return (
    <>
      <Header></Header>
      <RouterInit></RouterInit>
      <Footer></Footer>
    </>
  );
}

export default App;
