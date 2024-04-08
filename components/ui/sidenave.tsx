import React from "react";
import NavigationLink from "./linkes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon } from "@radix-ui/react-icons";

function Sidenave() {
  return (
    <div className="flex h-screen flex-col px-3 py-4 md:px-2 w-[250px] bg-sky-50 font-bold justify-start gap-4">
      <div className="flex flex-row  items-center mb-4 hover:bg-blue-800 hover:rounded-lg w-[235px] px-3">
        <Avatar className=" hover:bg-blue-800">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
        <div className="text-gray-900 ml-4 hidden md:flex md:flex-row md:float-left md:items-center md:justify-between">
          <p className="mr-16">Kirubel</p>

          <BellIcon />
          
        </div>
      </div>
      <NavigationLink />
    </div>
  );
}

export default Sidenave;
