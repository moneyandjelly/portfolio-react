import { requestKakaoLoginUrl } from "../../../../apis/KakaoAuth/requestLoginUrl";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store//store";

function kakaoLogin() {
    const { isLoggedIn, nickname, account_id } = useSelector(
        (state: RootState) => state.auth
    );
    const onClick = async () => {
        try {
            const data = await requestKakaoLoginUrl();
            if (data) {
                window.location.href = data;
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    return (
        isLoggedIn ? (
            <div>Welcome, {nickname}, AccountId: {account_id}</div>
        ) : (
            <div>
                <img onClick={onClick} src="/kakao_login.png" alt="" />
            </div>
        )
    );

}

export default kakaoLogin