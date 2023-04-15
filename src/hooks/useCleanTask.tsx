import { useState, useCallback } from "react";

type Memotype = {
  id: number;
  memo?: string;
};
// const onClickReset = useCallback(() => {}, [text]);

export const useCleanTask = (props: any) => {
  const deleteMemo = () => {
    // const updatedTextDone = textDone.filter((id) => id !== props);
    // setTextDone(updatedTextDone);
    console.log(props);
  };

  return [deleteMemo];
};
