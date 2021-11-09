import Link from 'next/link';
import cx from 'classnames';
import NumberFormat from 'react-number-format';

interface TableRowProps {
  _id: string;
  image: string;
  name: string;
  type: string;
  category: string;
  price: number;
  isReady: boolean;
}

export default function TableRow(props: TableRowProps) {
  const {
    _id, name, image, type, category, price, isReady,
  } = props;

  const IMG = process.env.NEXT_PUBLIC_IMG;
  const imageSource = image === null ? '/images/food-placeholder.png' : `${IMG}/${image}`;
  const statusText = isReady ? 'Tersedia' : 'Tidak Tersedia';

  const statusClass = cx({
    'float-start icon-status': true,
    // eslint-disable-next-line quote-props
    'available': isReady === true,
    'not-available': isReady === false,
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3 rounded-3"
          src={imageSource}
          width="80"
          height="60"
          alt="Product Image"
        />
        <div className="menu-title-header">
          <p className="menu-title fw-medium text-start color-palette-0 m-0">
            {name}
          </p>
          <p className="text-xs fw-normal text-start color-palette-5 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-0 m-0">{type}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-0 m-0">
          <NumberFormat value={price} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
        </p>
      </td>
      <td>
        <span className={statusClass} />
        <p className="fw-medium text-start color-palette-0 m-0 position-relative">
          {statusText}
        </p>
      </td>
      <td>
        <Link href={`/cashier/menus/${_id}`}>
          <a className="btn btn-primary rounded-pill text-sm">
            Details
          </a>
        </Link>
      </td>
    </tr>
  );
}
