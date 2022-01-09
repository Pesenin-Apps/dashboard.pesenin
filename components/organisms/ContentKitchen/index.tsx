import { MenuTypeTypes } from '../../../services/data-types';
import Card from './Card';

interface ContentKitchenProps {
  data: MenuTypeTypes[];
}

export default function ContentKitchen(props: ContentKitchenProps) {
  const { data } = props;

  return (
    <div className="queue-lists mb-30">
      <div className="row">
        {data.map((item: MenuTypeTypes) => (
          <Card key={item._id} id={item._id} name={item.name} />
        ))}
      </div>
    </div>
  );
}
