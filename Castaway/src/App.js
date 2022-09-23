import Header from './header/Header';
import Latest from './Latest/Latest';
import './App.css';
import Jacob from "./Jacob/Jacob";
import Work from "./Work/Work";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Latest />
      <Jacob />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
