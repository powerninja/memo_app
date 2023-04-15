import { useState } from "react";

type Memotype = {
  id: number;
  memo?: string;
};

export const useAddMemo = (props: any) => {
  console.log(props);
  const [text, setText] = useState<Memotype>({ id: 0, memo: "" });
  const [textDone, setTextDone] = useState<Memotype[]>([]);

  const addMemo = () => {
    console.log(textDone);
    setTextDone([...textDone, { id: text.id + 1, memo: props }]);
    setText({ id: text.id + 1, memo: "" });
  };

  return { text, textDone, addMemo };
};
