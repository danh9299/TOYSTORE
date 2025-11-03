import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@templates/Layout/Layout";
import Home from "@pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
