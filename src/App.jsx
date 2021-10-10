import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchIsShow = () => {
    // 表示だったら非表示に、非表示だったら表示に切り替える
    setIsShow(!isShow);
  };

  // numが変化した時だけ実行される関数
  useEffect(() => {
    if (num % 3 === 0) {
      // trueだったら何もしない
      isShow || setIsShow(true);
    } else {
      // trueだったらfalseに変更する
      isShow && setIsShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">how are you?</ColorfulMessage>
      <ColorfulMessage color="pink" message="I'm fine!" />
      <button onClick={onClickButton}>button</button>
      <br />
      <button onClick={onClickSwitchIsShow}>on/off</button>
      <p>{num}</p>
      {isShow && <p>( ^ω^ )</p>}
    </React.Fragment>
  );
};

export default App;
