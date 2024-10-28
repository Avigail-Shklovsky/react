// import Header from "./components/Header";
// import { ItemList } from "./components/ItemList";
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Navbar } from "./components/Navbar";
// import { Indicatator } from "./components/steps/Indicatator";
import { StepsViewer } from "./components/steps/StepsViewer";

function App() {
  return (
    <div>
      <StepsViewer maxSteps={7}></StepsViewer>
    </div>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<ItemList />} />
    //     <Route path="/header" element={<Header />} />
    //     <Route path="/navbar" element={<Navbar />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
