import cx from 'classnames';

interface ButtonPaginationProps {
  disabled: boolean;
  onClick: () => void;
  text: string;
}

export default function ButtonPagination(props: ButtonPaginationProps) {
  const { disabled, onClick, text } = props;
  const classListPagination = cx({
    'page-item': true,
    disabled,
  });
  return (
    <li className={classListPagination}>
      <button type="button" disabled={disabled} className="page-link" onClick={onClick}>
        {text}
      </button>
    </li>

  );
}
