import Header from "./components/Header";
import { ItemList } from "./components/ItemList";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/header" element={<Header />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
