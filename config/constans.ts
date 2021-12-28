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

export const OrderVia = {
  guest: 1,
  customer: 2,
  waiter: 3,
} as const;
