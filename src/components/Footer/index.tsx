import * as S from "./style";
import HomeIcon from "@/assets/home.svg";
import CalendarIcon from "@/assets/calendar.svg";
import Note from "@/assets/note.svg";
import MyPageIcon from "@/assets/mypage.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <S.Footer>
            <S.IconWrapper onClick={() => navigate("/home")}>
                <img
                    src={HomeIcon}
                    style={{
                        filter:
                            currentPath === "/home"
                                ? "brightness(0)"
                                : "grayscale(1)",
                    }}
                />
                <span
                    style={{
                        fontWeight: currentPath === "/home" ? "bold" : "normal",
                    }}
                >
                    홈
                </span>
            </S.IconWrapper>

            <S.IconWrapper onClick={() => navigate("/calendar")}>
                <img
                    src={CalendarIcon}
                    style={{
                        filter:
                            currentPath === "/calendar"
                                ? "brightness(0)"
                                : "grayscale(1)",
                    }}
                />
                <span
                    style={{
                        fontWeight:
                            currentPath === "/calendar" ? "bold" : "normal",
                    }}
                >
                    캘린더
                </span>
            </S.IconWrapper>

            <S.IconWrapper onClick={() => navigate("/list")}>
                <img
                    src={Note}
                    style={{
                        filter:
                            currentPath === "/list"
                                ? "brightness(0)"
                                : "grayscale(1)",
                    }}
                />
                <span
                    style={{
                        fontWeight: currentPath === "/list" ? "bold" : "normal",
                    }}
                >
                    리스트
                </span>
            </S.IconWrapper>

            <S.IconWrapper onClick={() => navigate("/my-page")}>
                <img
                    src={MyPageIcon}
                    style={{
                        filter:
                            currentPath === "/my-page"
                                ? "brightness(0)"
                                : "grayscale(1)",
                    }}
                />
                <span
                    style={{
                        fontWeight:
                            currentPath === "/my-page" ? "bold" : "normal",
                    }}
                >
                    마이페이지
                </span>
            </S.IconWrapper>
        </S.Footer>
    );
};

export default Footer;
