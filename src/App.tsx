import { BrowserRouter, Routes, Route } from "react-router-dom";

// 페이지 컴포넌트
import HomePage from "./pages/home";
// 리다이렉트
import KakaoRedirect from "./pages/home/components/snsLogin/components/redirectKakaoLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/kakao-oauth/redirect-access-token"
          element={<KakaoRedirect />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;