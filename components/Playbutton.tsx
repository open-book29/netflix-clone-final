import { useRouter } from 'next/router'
import React from 'react'
import {BsFillPlayFill} from "react-icons/bs"

interface PlaybuttonProps{
  movieId: string
}

const Playbutton: React.FC<PlaybuttonProps> = ({ movieId }) => {
  const router = useRouter()

  return (
    <button onClick={() => router.push(`/watch/${movieId}`)} className='bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition'>
      <BsFillPlayFill size={25} className="w-4 md:w-7 text-black mr-1" />
      Play
    </button>
  )
}

export default Playbutton