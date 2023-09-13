import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { userId } = auth();

  return (
    <div>
      <nav className="bg-red-900 py-4 px-5">
        <div className="flex items-center justify-between container">
          <div className="flex-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth</div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            {!userId ? (
              //로그인이 안 된 경우
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Dashboard
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
