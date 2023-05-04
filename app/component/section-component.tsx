'use client'

import { FC } from 'react'

interface SectionComponentProps {
  number: number
}

const SectionComponent: FC<SectionComponentProps> = ({
    number = 6
}) => {
  const onClickSection = () => {

  }
  return (
  <div>
    <div className='flex'>
        <p className='font-semibold text-xs my-auto'>SECTION :</p>
        {Array.from({length: number}, (_, i) => i + 1).map((i, idx) => (
            <button key={idx} className='bg-gray-500 px-4' onClick={onClickSection}>
                {i}
            </button>
        ))}
    </div>
  </div>
  )
}

export default SectionComponent