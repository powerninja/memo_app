import { useState, useCallback } from "react";

type Memotype = {
  id: number;
  memo?: string;
};
// const onClickReset = useCallback(() => {}, [text]);

export const useAddMemo = (props: any) => {
  const [text, setText] = useState<Memotype>({ id: 0, memo: "" });
  const [textDone, setTextDone] = useState<Memotype[]>([]);

  // console.log(textDone, text);
  const addMemo = useCallback(() => {
    console.log("addMemo: ");
    console.log(text);

    setTextDone([...textDone, { id: text.id + 1, memo: props }]);
    setText({ id: text.id + 1, memo: "" });
    console.log(textDone);
  }, [props]);

  const deleteMemo = () => {
    const updatedTextDone = textDone.filter((id) => id !== props);
    setTextDone(updatedTextDone);
    console.log("deleteMemo: " + textDone + props);
  };

  return { text, textDone, addMemo, deleteMemo };
};
