import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoRedirectHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code"); // URL에서 code 가져오기

  useEffect(() => {
    console.log("인가 코드:", code);

    if (code) {
      const login = async () => {
        try {
          const response = await axios.post(
            "https://2fa8-1-215-227-114.ngrok-free.app/users/login",
            {
              code,
              deviceToken: "someString",
            },
          );

          console.log("로그인 성공:", response.data);
          navigate("/named"); // 로그인 성공 후 메인 페이지로 이동
        } catch (error) {
          console.error("로그인 실패:", error);
          alert("로그인에 실패했습니다.");
          navigate("/"); // 로그인 실패 시 메인으로
        }
      };
      login();
    } else {
      console.error("인가 코드가 없습니다.");
      navigate("/"); // code가 없으면 메인으로 이동
    }
  }, [navigate]);

  return <p>로그인 처리 중...</p>;
};

export default KakaoRedirectHandler;
