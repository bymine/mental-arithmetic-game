import "./numberBox.scss";

type Props = {
  randomNumbers: number[];
  currentIndex: number;
};

const NumberBox = (props: Props) => {
  return (
    <div className="numberBox">
      <div className="numberItem">
        {props.randomNumbers[props.currentIndex]}
      </div>
    </div>
  );
};

export default NumberBox;
