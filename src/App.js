import "./App.scss";
import "./layout/header/Header";
import Header from "./layout/header/Header";
import MainPage from "./layout/main_page/MainPage";
import Footer from "./layout/footer/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <MainPage />
      <Footer></Footer>
    </>
  );
}

export default App;
