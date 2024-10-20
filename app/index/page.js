"use client";

import { BsQuestionSquareFill } from "react-icons/bs";
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    window.location.href = '/game';
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="m-auto flex flex-col items-center gap-12">
      <h1 className="text-4xl font-mono font-extrabold flex">Guess <BsQuestionSquareFill className="my-8" /> Game</h1>
      <ul className="text-2xl flex flex-col gap-5 w-40 font-mono">
        <li className="flex w-full">
          <Button className="w-full p-7 text-lg" onClick={handleStartClick}>
            Play
          </Button>
        </li>
        <li className="flex w-full">
          <Button className="w-full p-7 text-lg">
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li className="flex w-full">
          <Button className="w-full p-7 text-lg">
            <Link href="https://github.com/danielhash1" target="_blank">GitHub</Link>
          </Button>
        </li>
      </ul>

      <div className='text-center font-mono'>
        <p>
          2024
          <br></br>
          Developed by <a href='https:github.com/danielhash1' target='_blank' className='bg-gray-100 text-teal-800'>Daniel</a>
        </p>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-mono">Are you sure you want to start a game?</h2>
            <div className="flex justify-center gap-4 mt-4">
              <Button onClick={handleConfirm} className="bg-black w-20 text-white hover:bg-green-950">Yes</Button>
              <Button onClick={handleCancel} className="bg-gray-700 w-20 text-white hover:bg-red-950">No</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
