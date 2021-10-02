interface ScoreboardProps {
  title: string;
  amount?: number;
}

export default function Scoreboard(props: Partial<ScoreboardProps>) {
  const { title, amount = 0 } = props;
  return (
    <div className="row pb-50">
      <div className="h5 mb-3">{title}</div>
      <div className="h2">{amount}</div>
    </div>
  );
}
