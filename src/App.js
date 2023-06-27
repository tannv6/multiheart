import { Route, Routes } from "react-router";
import "./App.css";
import Multiheat from "./Multiheart";
import Totinh from "./Totinh";
import Thutinh from "./Thutinh";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Multiheat />} />
      <Route path="totinh" element={<Totinh />} />
      <Route path="thutinh" element={<Thutinh />} />
    </Routes>
  );
}

export default App;
