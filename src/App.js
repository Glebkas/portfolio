import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Notfound from './pages/Notfound';
import Layout from './components/Layout';
import Project from './pages/Project';

function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Layout scrollToTop={scrollToTop}></Layout>}
                >
                    <Route
                        index
                        path='/'
                        element={
                            <Homepage scrollToTop={scrollToTop}></Homepage>
                        }
                    ></Route>
                    <Route
                        path='portfolio'
                        element={<Portfolio></Portfolio>}
                    ></Route>
                    <Route
                        path='contactme'
                        element={<ContactMe></ContactMe>}
                    ></Route>
                    <Route
                        path='portfolio/:id'
                        element={<Project></Project>}
                    ></Route>
                    <Route path='*' element={<Notfound></Notfound>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
