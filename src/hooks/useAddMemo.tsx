import { useState, useCallback } from "react";

type Memotype = {
  id: number;
  memo?: string;
};
// const onClickReset = useCallback(() => {}, [text]);

export const useAddMemo = (props: any) => {
  const [text, setText] = useState<Memotype>({ id: 0, memo: "" });
  const [textDone, setTextDone] = useState<Memotype[]>([]);

  const addMemo = () => {
    setTextDone([...textDone, { id: text.id + 1, memo: props }]);
    setText({ id: text.id + 1, memo: "" });
  };

  const deleteMemo = (id: number) => {
    const updatedTextDone = props.filter((memoid: any) => memoid.id !== id);
    setTextDone(updatedTextDone);
    console.log(updatedTextDone);
    console.log(id);
  };

  return { text, textDone, addMemo, deleteMemo };
};
