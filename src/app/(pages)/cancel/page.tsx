import Image from 'next/image';
import cancel from '@/app/assets/icons/close.png';
import Link from 'next/link';

const Cancel = () => {
  return (
    <div className="h-screen">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Image src={cancel} alt="cancel" width={80} height={80} />
          <p className="text-center text-4xl font-semibold">
            Payment Unsuccessful.
          </p>
        </div>
      </div>

      <div className="text-center p-10 mt-10">
        <p className="text-lg mb-10">
          Please try again or use a different payment method.
        </p>

        <Link
          href="/"
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg mt-5"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
