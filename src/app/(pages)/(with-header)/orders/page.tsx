import OrderCard from '@/app/components/OrderCard';
import { getOrders } from '@/app/utils/service';
import React from 'react';

const Orders = async () => {
  const { orders } = await getOrders();
  console.log(orders);
  return (
    <div className="h-screen ">
      <div className="bg-black h-[80px] md:h-[110px]"></div>
      <div className="container">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <div className="grid gap-10 mt-10">
          {orders.map((order, key) => (
            <OrderCard order={order} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
