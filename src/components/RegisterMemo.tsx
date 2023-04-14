export const RegisterMemo = (props: any) => {
  const { memo } = props;
  const deleteMemo = () => {
    alert("削除");
    console.log(memo);
  };
  return (
    <li>
      {memo.memo}
      <button onClick={deleteMemo}>削除</button>
    </li>
  );
};
