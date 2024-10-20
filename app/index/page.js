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
    <div className="m-auto flex flex-col items-center gap-12 mt-40 animate-fade-in">
      <h1 className="text-4xl font-mono font-extrabold flex animate-slide-in-question-mark">
        Guess <BsQuestionSquareFill className="mt-8 animate-question-mark" /> Game
      </h1>

      <ul className="text-2xl flex flex-col gap-5 w-40 font-mono animate-fade-in">
        <li className="flex w-full">
          <Button className="w-full p-7 text-lg rounded-none animate-fade-in" onClick={handleStartClick}>
            Play
          </Button>
        </li>
      </ul>

      <div className='text-center font-mono animate-fade-in'>
        <p>
          2024
          <br />
          Developed by <a href='https:github.com/danielhash1' target='_blank' className='bg-gray-100 text-teal-800 hover:text-indigo-800'>Daniel</a>
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className=" bg-white p-6 rounded-lg shadow-lg animate-scale-in">
          <BsQuestionSquareFill className="m-auto size-24 mb-10"/>
            <h2 className="text-center text-lg font-mono">Are you sure you want to start?</h2>
            <div className="flex justify-center gap-4 mt-4">
              <Button onClick={handleConfirm} className="bg-black w-20 text-white hover:bg-indigo-950 rounded-none">Yes</Button>
              <Button onClick={handleCancel} className="bg-gray-600 w-20 text-white hover:bg-red-950 rounded-none">No</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
