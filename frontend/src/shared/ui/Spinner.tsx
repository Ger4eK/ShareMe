import React from 'react';
import { ColorRing } from 'react-loader-spinner';

type Props = { message: string };

const Spinner = ({ message }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <ColorRing
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        height={150}
        width={150}
      />

      <p className='text-lg text-center px-2 mt-5'>{message}</p>
    </div>
  );
};

export default Spinner;
