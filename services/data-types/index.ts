export interface MenuCategoryTypes {
  _id: string;
  name: string;
}

export interface MenuTypeTypes {
  _id: string;
  name: string;
}

export interface MenuTypes {
  _id: string;
  price: number;
  // eslint-disable-next-line camelcase
  is_ready: boolean;
  // eslint-disable-next-line camelcase
  image_url: string;
  name: string;
  description: string;
  category: MenuCategoryTypes;
  type: MenuTypeTypes;
}

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
  section: TableSectionTypes;
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
  password: string;
  createdAt: string;
}

export interface CustomerTypes {
  _id: string;
  name: string;
  // eslint-disable-next-line camelcase
  device_detection: string;
  // eslint-disable-next-line camelcase
  checkin_number: string;
  status: number;
}

export interface OrderTypes {
  _id: string;
  table: TableTypes;
  createdAt: string;
  customer: CustomerTypes;
  // eslint-disable-next-line camelcase
  total_price: number;
  tax: number;
  // eslint-disable-next-line camelcase
  total_overall: number;
  status: number;
}
