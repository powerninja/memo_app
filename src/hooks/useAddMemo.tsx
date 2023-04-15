import { useState } from "react";

type Memotype = {
  id: number;
  memo?: string;
};

export const useAddMemo = (props: any) => {
  const [text, setText] = useState<Memotype>({ id: 0, memo: "" });
  const [textDone, setTextDone] = useState<Memotype[]>([]);

  const addMemo = () => {
    setTextDone([...textDone, { id: text.id + 1, memo: props }]);
    setText({ id: text.id + 1, memo: "" });
  };

  const deleteMemo = (id: number, taskMemo: any) => {
    const updatedTextDone = taskMemo.filter((memoid: any) => memoid.id !== id);
    setTextDone([...updatedTextDone]);
  };

  return { text, textDone, addMemo, deleteMemo };
};
