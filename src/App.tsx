import React, { useState } from "react";
import { RegisterMemo } from "./components/RegisterMemo";
import { CleanTask } from "./components/CleanTask";

import { useAddMemo } from "./hooks/useAddMemo";
import { useCleanTask } from "./hooks/useCleanTask";

type Memotype = {
  id: number;
  memo?: string;
};

export const App = () => {
  const [text, setText] = useState<Memotype>({ id: 0, memo: "" });

  const { addMemo, textDone } = useAddMemo(text.memo);

  const { deleteMemo } = useAddMemo(textDone);

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
        <React.Fragment key={memoObj.id}>
          <li>
            <RegisterMemo memo={memoObj} />
            {/* <CleanTask memo={memoObj} /> */}
            {/* <button onClick={deleteMemo}>削除</button> */}
            <button onClick={() => deleteMemo(memoObj.id)}>削除</button>
          </li>
        </React.Fragment>
      ))}
    </>
  );
};
