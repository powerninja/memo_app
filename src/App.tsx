import React, { useState } from "react";
import { RegisterMemo } from "./components/RegisterMemo";

type Memotype = {
  id: number;
  memo?: string;
};

export const App = () => {
  const [text, setText] = useState<Memotype>({ id: 0, memo: "" });
  const [textDone, setTextDone] = useState<Memotype[]>([]);
  const addMemo = () => {
    setTextDone([...textDone, { id: text.id + 1, memo: text.memo }]);
    setText({ id: text.id + 1, memo: "" });
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
        <RegisterMemo key={memoObj.id} memo={memoObj} />
      ))}
    </>
  );
};
