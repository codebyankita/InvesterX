'use client'
import React from 'react';
import Image from 'next/image';
import InvesterX from '@/public/Angelica Capital logo - 2.png';
export default function Logo() {
  return (
    <div className="group">
      <Image
        src={InvesterX}
        alt="InvesterX Logo"
        width={180}
        height={200}


      // className="transition-transform duration-200 group-hover:scale-90"
      />
    </div>
  );
}
