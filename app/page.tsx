import React from "react";
import Image from 'next/image';
import { MdOutlineEmail } from "react-icons/md";

export default function ProfileCard() {
  return (
    <div className="bg-gray-800 flex items-center justify-center min-h-screen overflow-hidden">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-80">
        <div className="relative">
          <Image
            src="https://sennzai.dev/Sennzai.gif"
            alt="sennzai.gif"
            width={320}
            height={128}
            className="w-full h-32 rounded-t-lg object-cover"
          />
          <div className="absolute top-20 left-4">
            <Image
              src="https://sennzai.dev/Sennzai.jpg"
              alt="Sennzai"
              width={90}
              height={90}
              className="rounded-full border-4 border-gray-900"
            />
          </div>
        </div>
        <div className="p-4 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Sennzai</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">sennzai • she/her</p>
            <div className="flex space-x-1">
              <Image
                src="https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png"
                alt="HypeSquad Balance Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png"
                alt="Nitro Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/cb3ae83c15e970e8f3d410bc62cb8b99.png"
                alt="Boost Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png"
                alt="Developer Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png"
                alt="HashTag Badge"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png"
                alt="Quest Badge"
                width={20}
                height={20}
              />
            </div>
          </div>
          
          <hr className="my-2 border-gray-700" />
          <div>
            <h3 className="text-base">About Me</h3>
            <br />
            <p className="text-sm font-light">
              Hello ! I'm not Sennzai
              <br />
              Interested to be a Front End Developer
              <br />
              Experience with C/C++
              <br />
              <a href="" className="text-blue-600">https://sennzai.dev</a>
            </p>
          </div>
          <hr className="my-2 border-gray-700" />
          <div>
          <h3 className="text-base">Connections</h3>
            <br />
            <a
              href="mailto:admin@sennzai.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white"
            >
              <MdOutlineEmail className="text-xl" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
