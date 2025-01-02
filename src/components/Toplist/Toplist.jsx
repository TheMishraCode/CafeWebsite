import React from 'react'
import coldbrew from '../../assets/coldbrew.png'
import latte from '../../assets/lattecoffee.png'
import espresso from '../../assets/espresso2.png'
import { IoStar } from "react-icons/io5";
import { motion, AnimatePresence } from 'motion/react';
import { IoStarHalf } from "react-icons/io5";

const FoodData = [
  {
    image: coldbrew,
    price: "$10.99",
    name: "Coldbrew coffee",
    desc: "Our Cold Brew Coffee comes in 4 flavours- Original, Dark Roast, French Vanilla, and New Orleans.",
  },
  {
    image: espresso,
    rating: "⭐⭐⭐⭐⭐",
    price: "$9.99",
    name: "Espresso",
    desc: "Processed which locks the aroma and delivers a delicious and tasty coffee. – Vegan friendly with no preservatives, no additives, and no added sugar"
  },
  {
    image: latte,
    rating: "⭐⭐⭐⭐⭐",
    price: "$12.99",
    name: "Latte coffee",
    desc: "Our Latte is a classic coffee drink made with espresso and steamed milk. It is best enjoyed with our almond biscotti.",
  },
];


const Toplist = () => {
  return (
   <motion.div
   initial={{opacity:0}}
   animate={{opacity:1, y:20, duration:0.4}}
   exit={{opacity:0}}
   transition={{duration:0.6}}
   className='container py-11 text-white z-10 relative overflow-y-hidden'>
   {/* header section */}
   <div className='text-center'>
      <h1 className='text-4xl font-semibold uppercase'>Our top list</h1>
   </div>
   {/* card section  */}
   <div className='grid grid-cols-1 gap-4 md:grid-cols-3 sm:px-0 justify-center items-center 
   mt-9 px-10 h-full   '>
  {FoodData.map((item, index) => (
    <div key={index} className='bg-slate-900/45 cursor-pointer pb-7 px-4 rounded-lg shadow-lg
     shadow-black/50  hover:scale-105 transition duration-350 flex flex-col justify-center items-center '>
      <img src={item.image} alt="" 
      className='w-[200px] h-72  object-contain  align-middle '
      />
      <div className='space-y-2'>
        <p className='text-lg font-semibold'>{item.name}</p>
        <p className='flex gap-2'>
        <IoStar className='text-yellow-500 text-lg' />
        <IoStar className='text-yellow-500 text-lg' />
        <IoStar className='text-yellow-500 text-lg' />
        <IoStar className='text-yellow-500 text-lg' />
        <IoStar className='text-yellow-500 text-lg' />
        </p>
        <p>{item.desc}</p>
        <p>{item.price}</p>
      </div>

    </div>
  ))}
  
 
   </div>
   </motion.div>
  )
}

export default Toplist;