import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <div className="flex flex-wrap justify-center items-center py-8">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <div className="p-6">
      <p className="text-gray-500 text-xl py-2 font-medium">{purpose}</p>
      <p className="text-3xl font-bold">
        {title1} <br /> {title2}
      </p>
      <p className="text-4xl py-3 font-medium text-gray-700">
        {desc1} <br /> {desc2}
      </p>
      <button className="text-xl bg-purple-800 px-3 py-2 rounded-xl text-white mt-5">
        <Link href={linkName}>{buttonText}</Link>
      </button>
    </div>
  </div>
);

export default Banner