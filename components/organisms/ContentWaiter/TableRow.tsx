import Link from 'next/link';
import convertDate from '../../../config/convertdate';

interface TableRowProps {
  _id: string;
  fullname: string;
  email: string;
  since: string;
}

export default function TableRow(props: TableRowProps) {
  const {
    _id, fullname, email, since,
  } = props;

  return (
    <tr className="align-middle">
      <td>
        <p className="fw-medium color-palette-0 m-0">{fullname}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-0 m-0">{email}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-0 m-0">{convertDate(since, 'dd')}</p>
      </td>
      <td>
        <Link href={`/cashier/waiters/${_id}`}>
          <a className="btn btn-primary rounded-pill text-sm">
            Detail
          </a>
        </Link>
      </td>
    </tr>
  );
}
