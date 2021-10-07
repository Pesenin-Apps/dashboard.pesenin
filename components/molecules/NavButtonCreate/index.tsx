import Back from '../../atoms/ButtonIcon/Back';

interface NavButtonCreateProps {
  hrefBack: string;
}

export default function NavButtonCreate(props: NavButtonCreateProps) {
  const { hrefBack } = props;
  return (
    <div className="mb-10">
      <div className="clearfix">
        <div className="float-start">
          <Back href={hrefBack} />
        </div>
      </div>
    </div>
  );
}
