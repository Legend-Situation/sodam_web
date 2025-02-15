import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingName from "./pages/SettingName";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SettingName />} />
        <Route path="/named" element={<SettingName />} />
      </Routes>
    </Router>
  );
};

export default App;
