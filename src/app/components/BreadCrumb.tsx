import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
};

const BreadCrumb = ({ name }: Props) => {
  return (
    <div>
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <span className="mx-1">/</span>
      <span>Cars</span>
      <span className="mx-1">/</span>
      <span>{name}</span>
    </div>
  );
};

export default BreadCrumb;
