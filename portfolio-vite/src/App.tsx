import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import ProjectPage from "./pages/ProjectPage";
import ChaseSpacePage from "./pages/ChaseSpacePage";
import NotIkeaPage from "./pages/NotIkeaPage";

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
