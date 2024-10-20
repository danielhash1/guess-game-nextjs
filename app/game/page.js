import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";

export default function Game() {
  return (
    <div className='p-5'>
      <Link href="/">
        <Button><IoIosArrowBack />Back</Button>      
      </Link>

      <div className=" items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">




      <div className="m-auto flex flex-col items-center gap-20">
      <h1 className="text-3xl font-mono font-extrabold ">// Match all fruits</h1>


      </div>
    </div>
    </div>
  );
}
