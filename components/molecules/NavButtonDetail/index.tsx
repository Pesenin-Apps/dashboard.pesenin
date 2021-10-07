import Back from '../../atoms/ButtonIcon/Back';
import Trash from '../../atoms/ButtonIcon/Trash';

interface NavButtonDetailProps {
  hrefBack: string;
  onClickTrash: () => void;
}

export default function NavButtonDetail(props: NavButtonDetailProps) {
  const { hrefBack, onClickTrash } = props;
  return (
    <div className="mb-10">
      <div className="clearfix">
        <div className="float-start">
          <Back href={hrefBack} />
        </div>
        <div className="float-end">
          <Trash onClick={onClickTrash} />
        </div>
      </div>
    </div>
  );
}
