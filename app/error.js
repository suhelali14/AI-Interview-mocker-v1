// pages/500.js

import Link from 'next/link';
import Image from 'next/image';

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image src="/error-500.svg" width={300} height={300} alt="500 Error" />
      <h1 className="text-4xl font-bold mt-4">500 - Server Error</h1>
      <p className="text-gray-600 mt-2">
        Something went wrong on our end. Please try again later.
      </p>
      <Link href="/">
        <a className="mt-6 text-blue-500 hover:underline">Go back home</a>
      </Link>
    </div>
  );
}
