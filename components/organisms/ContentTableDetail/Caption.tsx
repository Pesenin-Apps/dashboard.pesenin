interface CaptionProps {
  title: string;
  content: string;
}

export default function Caption(props: CaptionProps) {
  const { title, content } = props;
  return (
    <p className="text-lg color-palette-0 mb-20">
      {title}
      {' '}
      <span className="table-details">{content}</span>
    </p>
  );
}
