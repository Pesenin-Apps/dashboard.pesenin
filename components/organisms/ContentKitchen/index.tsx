import { MenuTypeTypes } from '../../../services/data-types';
import Card from './Card';

interface ContentKitchenProps {
  data: MenuTypeTypes[];
}

export default function ContentKitchen(props: ContentKitchenProps) {
  const { data } = props;

  return (
    <main className="queue-lists main-wrapper">
      <div className="ps-lg-0">
        <div className="row">
          {data.map((item: MenuTypeTypes) => (
            <Card key={item._id} id={item._id} name={item.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
