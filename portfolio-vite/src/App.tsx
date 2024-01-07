import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ChaseSpacePage from "./pages/ChaseSpacePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/chasespace" element={<ChaseSpacePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
