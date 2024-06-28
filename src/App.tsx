import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/messages" element={<div>Messages</div>}></Route>
          <Route path="/payments" element={<div>Payments</div>}></Route>
          <Route path="*" element={<div>Not found</div>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
