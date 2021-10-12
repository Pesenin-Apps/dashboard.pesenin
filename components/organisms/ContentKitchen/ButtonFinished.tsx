interface ButtonFinishedProps {
  id: string;
}

export default function ButtonFinished(props: ButtonFinishedProps) {
  const { id } = props;
  const onFinished = () => {
    console.log(id);
  };
  return (
    <button type="button" className="btn btn-success rounded-pill text-sm" onClick={onFinished}>
      Selesai
    </button>
  );
}
