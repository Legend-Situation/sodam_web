import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SettingName from "./pages/SettingName";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/named" element={<SettingName />} />
      </Routes>
    </Router>
  );
};

export default App;
