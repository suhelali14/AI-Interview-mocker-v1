"use client";
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <div>Logo</div>
      <UserButton/>
    </div>
  );
}

export default Header;
