import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@/pages/Main";
import SettingName from "@/pages/SettingName";
import ShareCode from "@/pages/ShareCode";
import CreateGroup from "@/pages/CreateGroup";
import StartConnect from "@/pages/StartConnect";
import Home from "@/pages/Home";
import RegisterGrop from "@/pages/RegisterGroup";
import ChooseFeel from "@/pages/ChooseFeel";
import Chat from "@/pages/Chat";
import List from "@/pages/List";
import ShowAnswer from "@/pages/ShowAnswer";
import MyPage from "@/pages/MyPage";
import KakaoRedirectHandler from "@/pages/KakaoRedirectHandler";
import Calendar from "@/pages/Calendar";
import Shop from "@/pages/Shop";
import TimeCapsule from "@/pages/TimeCapsule";
import GrowthTree from "@/pages/GrowthTree";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/auth/kakao/callback"
          element={<KakaoRedirectHandler />}
        />
        <Route path="/named" element={<SettingName />} />
        <Route path="/share-code" element={<ShareCode />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/start-content" element={<StartConnect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register-group" element={<RegisterGrop />} />
        <Route path="/choose-feel" element={<ChooseFeel />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/list" element={<List />} />
        <Route path="/show-answer" element={<ShowAnswer />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/timecapsule" element={<TimeCapsule />} />
        <Route path="/growthtree" element={<GrowthTree />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
