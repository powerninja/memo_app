import React, { useState } from "react";
import { RegisterMemo } from "./components/RegisterMemo";

type Memotype = {
  memo?: string;
};

export const App = () => {
  const [text, setText] = useState<Memotype>({ memo: "" });
  const [textDone, setTextDone] = useState<Memotype[]>([]);
  const addMemo = () => {
    setTextDone([...textDone, { memo: text.memo }]);
    setText({ memo: "" });
  };
  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input
        type="text"
        value={text.memo}
        onChange={(event) => setText({ ...text, memo: event.target.value })}
      ></input>
      <button onClick={addMemo}>追加</button>

      {textDone.map((memoObj) => (
        <RegisterMemo memo={memoObj} />
      ))}
    </>
  );
};

// export default App;
