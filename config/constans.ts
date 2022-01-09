export const TableStatus = {
  free: 1,
  used: 2,
  reserved: 3,
} as const;

export const WaiterStatus = {
  onduty: true,
  offduty: false,
} as const;

export const OrderType = {
  dinein: 1,
  reservation: 2,
} as const;

export const OrderStatus = {
  new: 1,
  processed: 2,
  finish: 3,
} as const;

export const OrderItemStatus = {
  new: 1,
  inqueue: 2,
  inprocess: 3,
  finish: 4,
} as const;

export const ReservationStatus = {
  new: 1,
  confirmed: 2,
} as const;

export const ReservationServingType = {
  ontime: 1,
  byconfirmation: 2,
} as const;

export const ReservationConfirmServingType = {
  waiting: 1,
  confirmed: 2,
} as const;

export const OrderVia = {
  guest: 1,
  customer: 2,
  waiter: 3,
} as const;
