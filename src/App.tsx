import React, { useState } from "react";
import { RegisterMemo } from "./components/RegisterMemo";

type Memotype = {
  memo?: string;
};

function App() {
  const [text, setText] = useState<Memotype>({ memo: "" });
  const addMemo = () => {
    alert("test");
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
      {text.memo}
      <RegisterMemo />
    </>
  );
}

export default App;
