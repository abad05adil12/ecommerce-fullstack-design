import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import Footer from "./components/footer";
import Main from "./pages/mainbody";
import Mail from "./components/mail";
import Web from "./components/weblistview";
import Cart from "./components/cart";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Navbar2 />
          <Main />
          <Mail />
          <Footer />
        </>
      ),
    },
    {
      path: "/weblistview",
      element: (
        <>
          <Navbar />
          <Navbar2 />
          <Web />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Navbar2 />
          <Cart />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;