import { Route, Routes } from "react-router";
import "./App.css";
import Multiheat from "./components/Multiheart";
import Totinh from "./components/Totinh";
import Thutinh from "./components/Thutinh";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Multiheat />} />
      <Route path="/express" element={<Totinh />} />
      <Route path="/letter" element={<Thutinh />} />
    </Routes>
  );
}

export default App;
