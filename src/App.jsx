import { Header } from './components/Header/Header';
import s from './App.module.css'
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={s.app}>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
