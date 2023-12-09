import "./inputBox.scss";
type Props = {
  randomNumbers: number[];
  sumValue: string;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setSumValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputBox = (props: Props) => {
  function onClickSubmit() {
    const sum = props.randomNumbers.reduce(
      (total, currnetValue) => (total = total + currnetValue)
    );

    if (sum === Number.parseInt(props.sumValue)) {
      console.log("corret");
    } else {
      console.log("no!");
    }
  }

  function onClickReset() {
    props.setCurrentIndex(0);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setSumValue(e.target.value);
  }

  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="숫자를 입력하세요."
        value={props.sumValue}
        onChange={onChange}
      />
      <button onClick={onClickSubmit}>입력</button>
      <button onClick={onClickReset}>리셋</button>
    </div>
  );
};

export default InputBox;
