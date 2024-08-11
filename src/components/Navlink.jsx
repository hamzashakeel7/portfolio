import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ link }) => {
  const pathname = usePathname();
  //   console.log([pathname]);

  return (
    <div>
      <Link
        className={`rounded-lg p-2 ${
          pathname === link.url && "bg-black text-white"
        }`}
        href={link.url}
      >
        {link.title}
      </Link>
    </div>
  );
};

export default Navlink;
