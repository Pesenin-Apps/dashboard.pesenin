import { useRouter } from 'next/router';
import { MenuTypeTypes } from '../../../services/data-types';
import Card from './Card';

interface ContentKitchenProps {
  data: MenuTypeTypes[];
}

export default function ContentKitchen(props: ContentKitchenProps) {
  const { data } = props;
  const router = useRouter();

  const onRefresh = () => {
    router.reload();
  };

  return (
    <main className="queue-lists main-wrapper">
      <div className="ps-lg-0">
        <div className="row">
          <div className="mb-3 d-grid">
            <button type="button" className="btn btn-refresh rounded-pill text-sm btn-block float-center" onClick={onRefresh}>Refresh</button>
          </div>
          {data.map((item: MenuTypeTypes) => (
            <Card key={item._id} id={item._id} name={item.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
