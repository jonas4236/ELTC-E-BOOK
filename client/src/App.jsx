import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import Register from "./pages/Register"
import Layout from "./pages/Layout/Layout"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Products from "./pages/Products"
import Reward from "./pages/Reward"
import Creator from "./pages/Creator"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="creator" element={<Creator />} />
          <Route path="reward" element={<Reward />} />
          <Route path="product/:book" element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
