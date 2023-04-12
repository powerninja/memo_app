export const RegisterMemo = (props: any) => {
  const { memo } = props;
  return (
    <li>
      {memo.memo}
      <button>削除</button>
    </li>
  );
};
