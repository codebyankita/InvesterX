'use client'
import React from 'react';
import Image from 'next/image';
import InvesterX from '@/public/logo.svg';
export default function Logo() {
  return (
    <div className="group">
      <Image
        src={InvesterX}
        alt="InvesterX Logo"
        width={160}
        height={180}
      // className="transition-transform duration-200 group-hover:scale-90"
      />
    </div>
  );
}
