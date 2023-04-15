import { useAddMemo } from "../hooks/useAddMemo";

export const RegisterMemo = (props: any) => {
  const { memo } = props;
  // const { deleteMemo } = useAddMemo(memo.id);

  return (
    <>
      {memo.memo}
      {/* <button onClick={deleteMemo}>削除</button> */}
    </>
  );
};
