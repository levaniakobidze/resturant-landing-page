import Home from "./components/Home/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";
import Categories from "./components/Categories/Categories";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Featured />
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
