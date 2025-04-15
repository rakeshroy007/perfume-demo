import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';

function App() {

  return (
    <div className='h-full w-full bg-gradient-to-r from-blue-100 to-gray-200 text-white'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<Product />} />
        {/* <Route exact path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
