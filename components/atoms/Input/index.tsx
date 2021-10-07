import { InputHTMLAttributes } from 'react';
import cx from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  isRequired?: boolean;
}

export default function Input(props: InputProps) {
  const {
    label, placeholder, isRequired, ...nativeProps
  } = props;
  const classStatus = cx({
    'text-danger': isRequired === true,
    'text-secondary': isRequired === false,
  });

  return (
    <>
      <label className="form-label text-lg fw-medium color-palette-0 mb-10">
        {label}
        {' '}
        <span className={classStatus}> * </span>
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
