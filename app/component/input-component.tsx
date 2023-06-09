/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
'use client';
import React, { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { cardNumberFormat, mixFormattingNumber, rewriteString } from '../helpers/helper'

interface InputProps {
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  addOnLeft?: boolean;
  addOnRight?: boolean;
  labelInside?: boolean
  thousandSeperator?:boolean;
  isRewrite?: boolean;
  formatLength?: number;
  mixFormattedLength?: {
    first: number,
    second: number,
    third: number,
    fourth: number,
    fifth: number,
  }
  separatorPositions?: number[],
  separatorLengths?: number[]
  value?: any;
  icon?: IconType;
  errors: any;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type = "text",
  disabled,
  addOnLeft,
  addOnRight,
  labelInside = false,
  thousandSeperator,
  mixFormattedLength,
  separatorPositions,
  separatorLengths,
  formatLength,
  isRewrite,
  value,
  icon: Icon,
  errors,
}) => {
  const [values, setValues] = useState<any>('')

  const onChange = (val: any) => {
    setValues(val)
  }

  return (
    <div className="w-full relative">
      <label
        className={` ${errors[name] ? 'text-rose-500' : 'text-zinc-700'}
        text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
        font-semibold`}
      >
        {label}
      </label>
      <input
          disabled={disabled}
          name={name}
          placeholder=" "
          type={type}
          className={`peer w-full ${labelInside ? 'p-4 pt-6' : 'p-1'} font-light bg-white border-2 
          rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          addOnLeft ? 'pl-9' : 'pl-4'
          } ${addOnRight ? 'pr-9' : 'pr-4'} 
          ${
            errors[name]
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-neutral-300 focus:border-black'
            }
          `}
          value={value || isRewrite ? rewriteString(values) 
            : formatLength ? cardNumberFormat(values ,formatLength) 
            : values}
          onChange={(e) =>onChange(e.target.value)}
        />

      {addOnRight && Icon && <Icon size="24" className="text-neutral-700 absolute top-5 right-2" />}
      {labelInside && (<label
        className={`
        absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
         ${addOnLeft ? 'left-9' : 'left-4'}
         ${addOnRight ? 'right-9' : 'right-4'}
         ${errors[name] ? 'text-rose-500' : 'text-zinc-400'}
         peer-placeholder-shown:scale-100
         peer-placeholder-shown:translate-y-0
         peer-focus:scale-75
         peer-focus:-translate-y-4`}
      >
        {label}
      </label> )}
      <span className='text-rose-500 text-sm'>{errors[name]}</span>
    </div>
  );
};

export default Input;
