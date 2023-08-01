import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/lib/constants";

import Button from "./Button";
import ProfileMenu from "./ProfileMenu";

const Navigation = async () => {
  const loggedIn = true;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {loggedIn ? (
          <>
            <ProfileMenu session={loggedIn} />

            <Link href="/create-project">
              <Button title="Share work" />
            </Link>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
