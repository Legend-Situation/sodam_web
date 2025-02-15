import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SettingName from "./pages/SettingName";
import ShareCode from "./pages/ShareCode";
import CreateGroup from "./pages/CreateGroup";
import StartConnect from "./pages/StartConnect";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/named" element={<SettingName />} />
        <Route path="/share-code" element={<ShareCode />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/start-content" element={<StartConnect />} />
      </Routes>
    </Router>
  );
};

export default App;
