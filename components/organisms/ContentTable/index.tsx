import { TableSectionTypes } from '../../../services/data-types';
import Card from './Card';

interface ContentTableProps {
  data: TableSectionTypes[];
}

export default function ContentTable(props: ContentTableProps) {
  const { data } = props;

  return (
    <div className="table-lists mb-30">
      <div className="container">
        <div className="row">
          {data.map((item: TableSectionTypes) => (
            <Card key={item._id} section={item._id} title={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
