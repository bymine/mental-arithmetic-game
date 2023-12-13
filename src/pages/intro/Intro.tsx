import { useState } from "react";
import "./intro.scss";
import { Button, Input, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const [nickname, setNickname] = useState("");
  const [loadings, setLoadings] = useState(false);
  const navigate = useNavigate();

  function handleNickname(event: React.ChangeEvent<HTMLInputElement>) {
    setNickname(event.target.value);
  }

  function generateRandomNickname() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const min = 1000;
    const max = 9999;

    const number = Math.floor(Math.random() * (max - min + 1) + min);
    const alphaIndex = Math.floor(Math.random() * alphabets.length);

    return number + alphabets[alphaIndex];
  }

  function handlePlay() {
    // nickname을 어디까지 사용하고 관리할것인가?
    // spinner 테스트를 위한 지연 타이머
    setLoadings(true);

    setTimeout(() => {
      if (nickname === "") {
        const nickname = "GUEST " + generateRandomNickname();
        console.log(nickname + "님 반갑습니다.");
      } else {
        console.log(nickname + "님 반갑습니다.");
      }

      setLoadings(false);

      if (!loadings) {
        console.log("페이지 이동");
        navigate("/home");
      }
    }, 2000);
  }

  return (
    <div className="intro">
      <div className="introBox">
        <span className="title">Math.io에 온것을 환영합니다!</span>
        <span className="subTitle">
          {`Math.io는 빠르고 정확한 계산과 암산 능력을 향상시킬 수 있는 게임
          플랫폼입니다. 다른사람과 경쟁하거나 혼자서 플레이 할 수 있습니다.`}
        </span>
        <div className="nicknameContainer">
          <span>
            가입하려면 사용자명을 입력하세요. 무작위로 생성된 사용자명을
            받으려면 비워두세요.
          </span>
          <Input
            className="nickname"
            placeholder="닉네임"
            value={nickname}
            onChange={handleNickname}
          />
        </div>
        <div className="playContainer">
          <span>
            게임을 시작하고 뛰어난 계산 능력과 암산 기술을 발전시켜보세요!
          </span>
          <Spin spinning={loadings} size="large">
            <Button onClick={handlePlay}>플레이</Button>
          </Spin>
        </div>
      </div>
    </div>
  );
};

export default Intro;
