import NavTop from './Components/NavTop';
import Feed from './Components/Feed';
import NavBottom from './Components/NavBottom';
import './Styles/app.css';

function App() {
  return (
    <div className="app">
    <NavTop />
    <Feed />
    <NavBottom />
    </div>
  );
}

export default App;
