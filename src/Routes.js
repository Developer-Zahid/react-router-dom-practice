import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout, {pageChangeAnimation} from './layouts/main/RootLayout';
import Navbar from './layouts/header/Navbar';
import Footer from './layouts/footer/Footer';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/products/ProductPage';
import ContactPage from './pages/contact/ContactPage';
import UserPage from './pages/users/UserPage';
import CartPage from './pages/cart/CartPage';
import { getProductsData } from './data/ProductsData';

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' loader={pageChangeAnimation} element={<RootLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path='/product' loader={getProductsData} element={<ProductPage />}></Route>
      <Route path='/user' element={<UserPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/cart' element={<CartPage />}></Route>
    </Route>
    <Route path='/other/inner' loader={getProductsData} element={<> <Navbar /> <HomePage /> <ProductPage /> <ContactPage /> <Footer /> </>}></Route>
    </>
))