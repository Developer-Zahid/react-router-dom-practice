import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './components/root/RootLayout';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<RootLayout />}>
    <Route index element={<> <HomePage /> <AboutPage /> </>}></Route>
    <Route path='/about' element={<AboutPage />}></Route>
    <Route path='/contact' element={<ContactPage />}></Route>
  </Route>
  <Route path='/other/inner' element={<> <Navbar /> <HomePage /> <AboutPage /> <ContactPage /> <Footer /> </>}></Route>
  </>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;