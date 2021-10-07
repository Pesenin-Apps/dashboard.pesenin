import Image from 'next/image';

interface TrashProps {
  onClick: () => void;
}

export default function Trash(props: TrashProps) {
  const { onClick } = props;
  return (
    <button type="button" className="btn btn-icon" onClick={onClick}>
      <Image src="/assets/icons/trash.svg" width={24} height={24} />
    </button>
  );
}
