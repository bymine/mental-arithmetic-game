import { useEffect, useState } from "react";
import "./home.scss";
import NumberBox from "../../components/numberBox/NumberBox";
import InputBox from "../../components/inputBox/InputBox";

const Home = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sumValue, setSumValue] = useState("");

  useEffect(() => {
    function createNumbers() {
      const newNumbers = [];

      for (let i = 0; i < 10; i++) {
        const number = Math.floor(Math.random() * 9) + 1;
        newNumbers.push(number);
      }

      setRandomNumbers(newNumbers);
    }

    createNumbers();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < randomNumbers.length) {
        console.log(
          `${currentIndex} 번째 숫자는 ${randomNumbers[currentIndex]} `
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, randomNumbers]);

  return (
    <div className="home">
      <div className="numberContainer">
        <NumberBox randomNumbers={randomNumbers} currentIndex={currentIndex} />
      </div>
      <div className="inputContainer">
        <InputBox
          randomNumbers={randomNumbers}
          sumValue={sumValue}
          setCurrentIndex={setCurrentIndex}
          setSumValue={setSumValue}
        />
      </div>
    </div>
  );
};

export default Home;
