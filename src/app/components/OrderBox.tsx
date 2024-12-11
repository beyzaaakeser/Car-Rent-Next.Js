import Image from 'next/image';
import { CarType } from '../utils/types';
import profile from '@/app/assets/images/pp.png';
import tel from '@/app/assets/icons/tel.svg';
import location from '@/app/assets/icons/loc.svg';
import RentButton from './RentButton';

type Props = {
  car: CarType;
};

const OrderBox = ({ car }: Props) => {
  return (
    <div className="border shadow rounded-md p-5 max-xl:mt-10 w-full xl:col-span-2">
      <div className="flex gap-5">
        <Image src={profile} alt="Profile Picture" />
        <div className="text-xl">
          <h2 className="font-semibold">
            <span className="text-amber-600">NEXT</span> DRIVE{' '}
            <span className="font-medium">Gallery</span>
          </h2>
          <p>Istanbul,Maltepe</p>
        </div>
      </div>

      <div className="flex justify-between my-5 ">
        <div className="flex gap-1 items-center cursor-pointer">
          <Image src={location} alt="Location" />
          <p>Check Out Location</p>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <Image src={tel} alt="Phone" />
          <p>+90 555 666 77 88</p>
        </div>
      </div>

      <RentButton car={car} />
      <button className="bg-green-600  w-full text-center p-2 rounded-lg text-white font-bold transition hover:bg-green-800 mt-5">
        Whatsapp
      </button>
    </div>
  );
};

export default OrderBox;
