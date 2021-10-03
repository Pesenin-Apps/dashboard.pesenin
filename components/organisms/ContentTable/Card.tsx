import { useCallback, useEffect, useState } from 'react';
import CardItemAdd from './CardItemAdd';
import CardItemAvailable from './CardItemAvailable';
import { getTableTableSection } from '../../../services/cashier';
import { TableTypes } from '../../../services/data-types';

interface CardProps {
  title: string;
  section: string;
}

export default function Card(props: CardProps) {
  const { title, section } = props;
  const [tableTableSectionList, setTableTableSection] = useState([]);

  const getTableTableSectionList = useCallback(
    async () => {
      const data = await getTableTableSection(section);
      setTableTableSection(data);
    },
    [getTableTableSection],
  );

  useEffect(() => {
    getTableTableSectionList();
  }, []);

  return (
    <div className="col-6 ps-15 pe-15 pb-lg-3 pb-4">
      <div className="table-card h-100">
        <p className="text-xl color-palette-0 fw-medium m-0">{title}</p>
        <div className="row d-flex justify-content-start pt-30 pb-20 ps-30 mx-auto">
          {tableTableSectionList.map((item: TableTypes) => (
            <CardItemAvailable key={item._id} id={item._id} tableNumber={item.number} />
          ))}
          <CardItemAdd />
        </div>
      </div>
    </div>
  );
}
