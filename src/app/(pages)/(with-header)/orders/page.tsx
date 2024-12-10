import { getOrders } from '@/app/utils/service';
import React from 'react';

const Orders = async () => {
  const orders = await getOrders()
  console.log(orders)
  return (
    <div className="h-screen bg-black text-white pt-20">
      <h1 className="text-3xl">Orders</h1>
    </div>
  );
};

export default Orders;
