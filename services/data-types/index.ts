export interface MenuCategoryTypes {
  _id: string;
  name: string;
}

export interface MenuTypeTypes {
  _id: string;
  name: string;
  // belong: number;
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
  status: number;
  number: number;
  section: TableSectionTypes;
  name: string;
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
  phone: string;
  createdAt: string;
}

export interface GuestTypes {
  _id: string;
  name: string;
  // eslint-disable-next-line camelcase
  device_detection: string;
  // eslint-disable-next-line camelcase
  checkin_number: string;
  status: number;
}

export interface WaiterTypes {
  _id: string;
  waiter: string;
  users: UserTypes;
}

export interface OrderItemTypes {
  _id: string;
  status: number;
  product: MenuTypes;
  price: number;
  qty: number;
  total: number;
}

export interface OrderReservation {
  _id: string;
  // eslint-disable-next-line camelcase
  datetime_plan: string;
  // eslint-disable-next-line camelcase
  number_of_people: string;
  status: number;
  // eslint-disable-next-line camelcase
  serving_type: number;
  // eslint-disable-next-line camelcase
  reservation_confirm: number;
}

export interface OrderTypes {
  _id: string;
  // eslint-disable-next-line camelcase
  is_paid: boolean;
  table: TableTypes;
  createdAt: string;
  customer: UserTypes;
  guest: GuestTypes;
  // eslint-disable-next-line camelcase
  order_items: [OrderItemTypes];
  // eslint-disable-next-line camelcase
  order_number: string;
  status: number;
  tax: number;
  // eslint-disable-next-line camelcase
  total_overall: number;
  // eslint-disable-next-line camelcase
  total_price: number;
  type: number;
  via: number;
  waiter: WaiterTypes;
  reservation: OrderReservation;
}

export interface CountOrderTypes {
  all: number;
  processed: number;
  finished: number;
}

export interface QueueTypes {
  _id: string;
  status: number;
  qty: number;
  order: OrderTypes;
  product: MenuTypes;
}
