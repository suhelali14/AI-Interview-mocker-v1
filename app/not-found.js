// pages/404.js

import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image src="/error-404.svg" width={300} height={300} alt="404 Error" />
      <h1 className="text-4xl font-bold mt-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <a className="mt-6 text-blue-500 hover:underline">Go back home</a>
      </Link>
    </div>
  );
}
