import { FC, MouseEventHandler } from 'react';
import { ButtonProps } from './interfaces';

export const Heading1: FC<{ text: string }> = ({ text }) => (
  <h2 className='text-5xl font-serif text-gray-50 font-bold p-2'> { text } </h2>
);

export const Heading2: FC<{ text: string }> = ({ text }) => (
  <h2 className='font-serif text-2xl text-gray-600'> { text } </h2>
);

export const Button: FC<ButtonProps> = ({ name, onClick, disabled }) => {

  const handleOnClick: MouseEventHandler<HTMLButtonElement>  = e => {
    e.preventDefault();
    onClick();
  }
  return (
    <button onClick={handleOnClick} className='py-2 px-4 text-gray-50 text-xl bg-slate-900 rounded-lg text-center m-2' disabled={disabled ? disabled : false}> { name } </button>
  )
};

export const Paragraph: FC<{ text: string }> = ({ text }) => (
  <p> { text } </p>
);

export const Image: FC<{ src: string }> = ({ src }) => (
  <img src={src} />
);