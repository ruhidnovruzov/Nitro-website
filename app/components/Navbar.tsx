import { link } from 'fs'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <header className='W-full h-20 mx-auto bg-primary flex items-center'>
            <div className='w-[70%] mx-auto flex items-center justify-between text-white'>
                <h1 className='font-bold text-2xl'>NITRO.AZ</h1>
                <ul className='flex gap-5'>
                    <li>Bütün elanlar</li>
                    <li>Salonlar</li>
                    <li>Moto</li>
                    <li>Ehtiyyat hissələri və aksesuarlar</li>
                    <li>İcarə</li>
                </ul>
                <Link href='./new'>
                <button className='bg-[#7ed321] flex items-center gap-2 text-white rounded-[8px] p-2'><img src="https://turbo.azstatic.com/assets/shared/add-new-1d8da7d6ddb04b4215161c0fea37f8c521de2f7b730a9b5f085244ac074ffcd6.svg" alt="" /> Yeni elan</button>
                </Link>
            </div>
        </header>
    </div>
  )
}

export default Navbar