import { useCallback, useEffect, useState } from 'react';
import { getTableSection } from '../../../services/cashier';
import { TableSectionTypes } from '../../../services/data-types';
import Card from './Card';

export default function ContentTable() {
  const [tableSectionList, setTableSection] = useState([]);

  const getTableSectionList = useCallback(
    async () => {
      const data = await getTableSection();
      setTableSection(data.data.data);
    },
    [getTableSection],
  );

  useEffect(() => {
    getTableSectionList();
  }, []);
  return (
    <>
      <div className="table-lists mb-30">
        <div className="container">
          <div className="row">
            {tableSectionList.map((item: TableSectionTypes) => (
              <Card key={item._id} section={item._id} title={item.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
