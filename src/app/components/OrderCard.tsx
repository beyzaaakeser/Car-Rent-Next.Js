import Order from '@/app/api/(models)/Order';
import { OrderType } from '../utils/types';
import Image from 'next/image';
import millify from 'millify';
type Props = {
  order: OrderType;
};

const OrderCard = ({ order }: Props) => {
  return (
    <div
      className="border p-4 rounded-md gap-5 shadow items-center justify-between grid grid-cols-3 
  xl:grid-cols-5 hover:bg-zinc-100/10 transition cursor-pointer
  "
    >
      <Image
        width={250}
        height={250}
        src={order.product.imageUrl}
        unoptimized
        alt="car"
      />

      <Info title={order.product.make} value={order.product.model} />
      <Info
        title="Total Amount"
        value={millify(order.money_spend) + ' ₺'}
        designs="text-green-700"
      />
      <Info
        title="Pick Up Date"
        value={new Date(order.createdAt).toLocaleDateString()}
        designs="text-blue-700"
      />
      <Info
        title="Payment Type"
        value={order.type}
        designs="text-blue-700 whitespace-nowrap "
      />
    </div>
  );
};

type InfoProps = {
  title: string;
  value: string;
  designs?: string;
};

const Info = ({ title, value, designs }: InfoProps) => {
  return (
    <p className="flex max-md:flex-col gap-1">
      <span className="whitespace-nowrap">{title}</span>
      <span className={`font-bold ${designs}`}>{value}</span>
    </p>
  );
};

export default OrderCard;
