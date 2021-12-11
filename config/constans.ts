export const TableStatus = {
  free: 1,
  used: 2,
  reserved: 3,
} as const;

export const WaiterStatus = {
  onduty: true,
  offduty: false,
} as const;
