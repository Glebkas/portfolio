import { Routes, Route, useNavigate } from 'react-router-dom';
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
    let navigateToProject = useNavigate();
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
                        element={
                            <Portfolio
                                navigateToProject={navigateToProject}
                                scrollToTop={scrollToTop}
                            ></Portfolio>
                        }
                    ></Route>
                    <Route
                        path='contactme'
                        element={<ContactMe></ContactMe>}
                    ></Route>
                    <Route
                        path='portfolio/:id'
                        element={
                            <Project
                                navigateToProject={navigateToProject}
                                scrollToTop={scrollToTop}
                            ></Project>
                        }
                    ></Route>
                    <Route path='*' element={<Notfound></Notfound>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
