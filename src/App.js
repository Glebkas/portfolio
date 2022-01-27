import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index path="/" element={<Homepage></Homepage>}></Route>
            <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
