import cx from 'classnames';

interface HeaderProps {
  image: string;
  name: string;
  category: string;
  isReady: boolean;
}

export default function Header(props: HeaderProps) {
  const {
    image, name, category, isReady,
  } = props;

  const IMG = process.env.NEXT_PUBLIC_IMG;
  const imageSource = (image == null) ? '/images/food-placeholder.png' : `${IMG}/${image}`;
  const statusText = isReady ? 'Tersedia' : 'Tidak Tersedia';

  const statusClass = cx({
    // eslint-disable-next-line quote-props
    'badge': true,
    'bg-success': isReady === true,
    'bg-danger': isReady === false,
  });

  return (
    <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
      <div className="d-flex flex-row align-items-center">
        <div className="pe-4">
          <div className="cropped">
            <img
              className="img-fluid"
              src={imageSource}
              width={200}
              height={130}
              alt="Menu Image"
            />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-0 mb-10">
            {name}
          </p>
          <p className="color-palette-5 m-0">{category}</p>
        </div>
      </div>
      <div>
        <span className={statusClass}>{statusText}</span>
      </div>
    </div>
  );
}
