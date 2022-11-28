export type Orders_prods = {
  id?: number;
  orderID: number;
  prodID: number;
  quantity: number;
};

export type Orders_users = {
  userID: number;
  orderID: number;
  status: string;
};
