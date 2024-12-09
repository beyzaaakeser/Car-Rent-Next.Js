import Image, { StaticImageData } from 'next/image';
import { CarType } from '../utils/types';
import Link from 'next/link';
import arrow from '@/app/assets/icons/arr.svg';
import mile from '@/app/assets/icons/mile.svg';
import gas from '@/app/assets/icons/gas.svg';
import transmission from '@/app/assets/icons/transmission.svg';
type Props = {
  car: CarType;
};
type InfoObject = {
  icon: StaticImageData;
  name: string;
};
const Card = ({ car }: Props) => {
  const arr: InfoObject[] = [
    { icon: mile, name: car.mileage + ' Miles' },
    { icon: gas, name: car.fuelType },
    { icon: transmission, name: car.transmission },
  ];
  return (
    <div className="border shadow rounded hover:shadow-lg">
      <div className="relative h-[250px]">
        <Image
          src={car.imageUrl}
          alt={car.model}
          fill
          unoptimized
          className="object-contain"
        />
      </div>
      <div className="py-5 px-10 sm:px-5">
        <h2 className="text-2xl font-semibold">
          {car.make} {car.model}
        </h2>
        <hr className="border-[#E9E9E9] border-[1.5px] my-4" />

        <div className="flex justify-between">
          {arr.map((i, key) => (
            <div key={key} className="flex flex-col gap-2 items-center ">
              <Image src={i.icon} alt={i.name} />
              <p className="text-lg sm:text-base">{i.name}</p>
            </div>
          ))}
        </div>

        <hr className="border-[#E9E9E9] border-[1.5px] my-4" />

        <div className="flex justify-between text-2xl sm:text-xl">
          <p className="font-semibold">${car.price}</p>
          <div className="flex gap-1 items-center text-blue-600 hover:text-blue-800">
            <Link href={`/car/${car._id}`}>Detail</Link>
            <Image src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
