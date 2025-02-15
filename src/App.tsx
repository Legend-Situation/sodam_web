import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SettingName from "./pages/SettingName";
import ShareCode from "./pages/ShareCode";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/named" element={<SettingName />} />
        <Route path="/share-code" element={<ShareCode />} />
      </Routes>
    </Router>
  );
};

export default App;
