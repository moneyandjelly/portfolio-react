import {requestKakaoLoginUrl} from "../../../../apis/KakaoAuth/requestLoginUrl";
function kakaoLogin() {
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
        <img onClick={onClick} src="/kakao_login.png" alt="" />
    )
}

export default kakaoLogin