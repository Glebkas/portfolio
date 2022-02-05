import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index path="/" element={<Homepage></Homepage>}></Route>
          <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="contactme" element={<ContactMe></ContactMe>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
