export const RegisterMemo = (props: any) => {
  const { memo } = props;

  return (
    <li>
      {memo.id}
      {memo.memo}
    </li>
  );
};
