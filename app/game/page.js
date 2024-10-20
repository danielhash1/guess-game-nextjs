import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";

export default function Game() {
  return (
    <div className='p-5'>
      <div className='flex'>
        <Link href="/" className=' hover:bg-black flex items-center font-mono hover:text-white block'>
          <IoIosArrowBack className='mr-1 size-8'/>
        </Link>

      </div>

      <div className=" items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">




      <div className="m-auto flex flex-col items-center">
        <div>
          <h1 className="text-3xl font-mono font-extrabold ">Mission:</h1>
          <h1 className="text-3xl font-mono font-extrabold bg-black text-white">// Find all fruits</h1>
        </div>
      


      </div>
    </div>
    </div>
  );
}
