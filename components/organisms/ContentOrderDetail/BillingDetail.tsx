import NumberFormat from 'react-number-format';

interface BillingDetailProps {
  label: string;
  bill: number;
}

export default function BillingDetail(props: BillingDetailProps) {
  const { label, bill } = props;
  return (
    <div className="row-4">
      <p className="text-md color-palette-5 fw-medium m-0">{label}</p>
      <p className="text-2xl color-palette-0 fw-medium m-0">
        <NumberFormat value={bill} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
      </p>
    </div>
  );
}
