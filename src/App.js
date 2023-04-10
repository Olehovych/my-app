import "./App.scss";
import "./layout/header/Header";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
///Pages///
import MainPage from "./layout/main_page/MainPage";
import Download from "./layout/download_page/Download";
import SignUp from "./layout/sign_page/SignUp";
////
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/download" element={<Download />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
