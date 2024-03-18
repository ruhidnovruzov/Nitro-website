'use client'
import Image from "next/image";
import { useSelector } from "react-redux";
import { IState } from "@/app/store";
import Link from "next/link";
export default function Home() {
  const brands = useSelector((state: IState) => state.announcement);
  console.log(brands)
  return (
    <div className=" bg-background w-full h-[100vh] pt-14">
    <div className="w-[70%] mx-auto flex flex-wrap gap-10">
      {brands && brands.map(({ brand, image, price, year, km, cube, unit, money }: any) => (
        <div className="bg-white w-[30%] p-1 pb-2 rounded-[8px] flex items-center flex-col cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_15px_20px_-10px_rgba(0,0,0,0.3)]">
          <img src={image} alt=""  className="w-full h-52 rounded-[8px]" />
          <p className="text-xl font-bold">{price} <span>{money}</span></p>
          <p>{brand}</p>
          <div className="flex gap-3">
          <span>{year},</span>
          <span>{+cube/1000} L,</span>
          <span>{km} <span>{unit}</span></span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}