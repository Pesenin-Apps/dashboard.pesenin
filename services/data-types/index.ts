export interface TableSectionTypes {
  _id: string;
  name: string;
  code: string;
}

export interface TableTypes {
  _id: string;
  name: string;
  number: number;
  used: boolean;
}

export interface signInTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  _id: string;
  fullname: string;
  email: string;
  role: string;
}
