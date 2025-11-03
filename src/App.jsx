import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@templates/Layout/Layout";
import Home from "@pages/Home/Home";
import ProductDetail from "@pages/ProductDetail/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
