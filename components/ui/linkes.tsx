import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from 'next/navigation'



const linkes = [
  { name: "Home", href: "/", icone: HomeIcon },
  { name: "Home", href: "/", icone: HomeIcon },
  { name: "Home", href: "/", icone: HomeIcon },
];

export default function NavigationLink() {
    const pathname = usePathname();
  return (<>
  {linkes.map(link=>{
    const Linkicon = link.icone
    return <Link key={link.name}

    href={link.href}
    className={clsx(
        'flex bg-green-300 ',
        {
            'bg-green-200': pathname==link.href
        }
    )}>
        <Linkicon/>
        <p>{link.name}</p>

    </Link>
  })}
  </>)
}
