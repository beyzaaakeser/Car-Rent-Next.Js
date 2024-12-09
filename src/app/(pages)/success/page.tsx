import Image from 'next/image';
import check from '@/app/assets/icons/check.png';
import Link from 'next/link';

const Success = () => {
  return (
    <div className="h-screen">
      <div className="h-[50%] bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Image src={check} alt="checkmark" width={80} height={80} />
          <p className="text-center text-4xl font-semibold">
            Booking Confirmed! Your payment was successful.
          </p>
        </div>
      </div>

      <div className='text-center p-10 mt-10'>
        <p className='text-lg'>
          You will receive an email soon regarding the status of your vehicle's
          pick-up.
        </p>
        <p className='mt-5 mb-10'>Please check your email. </p>

        <Link href="/orders" className='border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg'>Orders</Link>
        <br />
        <br />
        <br />
        <Link href="/" className='border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg mt-5'>Home</Link>
      </div>
    </div>
  );
};

export default Success;
