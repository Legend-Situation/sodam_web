import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SettingName from "./pages/SettingName";
import ShareCode from "./pages/ShareCode";
import CreateGroup from "./pages/CreateGroup";
import StartConnect from "./pages/StartConnect";
import Home from "./pages/Home";
import RegisterGrop from "./pages/RegisterGroup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/named" element={<SettingName />} />
        <Route path="/share-code" element={<ShareCode />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/start-content" element={<StartConnect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register-group" element={<RegisterGrop />} />
      </Routes>
    </Router>
  );
};

export default App;
