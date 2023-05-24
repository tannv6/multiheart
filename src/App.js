import { Route, Routes } from "react-router";
import "./App.css";
import Multiheat from "./Multiheart";
import Totinh from "./Totinh";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Multiheat />} />
      <Route path="totinh" element={<Totinh />} />
    </Routes>
  );
}

export default App;
