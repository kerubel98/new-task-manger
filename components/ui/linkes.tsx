'use client'

import { HomeIcon, PlusCircledIcon, EnvelopeOpenIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from 'next/navigation'



const linkes = [
  { name: "Home", href: "/notyet", icone: HomeIcon },
  { name: "Search", href: "/notyet", icone: MagnifyingGlassIcon },
  { name: "Add Task", href: "/body", icone: PlusCircledIcon },
  { name: "Inbox", href: "/task", icone: EnvelopeOpenIcon },
];

export default function NavigationLink() {
    const pathname = usePathname();
  return (<>
  {linkes.map(link=>{
    const Linkicon = link.icone
    return <Link key={link.name}

    href={link.href}
    className={clsx(
        'flex h-[40px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-blue-800 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 ',
        {
            'bg-blue-800 text-gray-900 h-[50px]': pathname===link.href
        }
    )}>
        <Linkicon/>
        <p className="hidden md:block text-gray-800">{link.name}</p>

    </Link>
  })}
  </>)
}
