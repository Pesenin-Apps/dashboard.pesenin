interface UserProps {
  name: string;
  email: string;
}

export default function User(props: UserProps) {
  const { name, email } = props;
  return (
    <>
      <h2 className="fw-bold text-xl color-palette-0 m-0">{name}</h2>
      <p className="color-palette-5 m-0">{email}</p>
    </>
  );
}
