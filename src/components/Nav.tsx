import Image from "next/image";
import type { NextPage } from "next";
import Link from "next/link";
import AddNoteForm from "./AddNoteForm";
import { SignOutButton, useUser } from "@clerk/nextjs";

const Navbar: NextPage = () => {
  const { user } = useUser();
  return (
    <div className="navbar mb-6 gap-4 bg-base-100">
      <div className="flex-1">
        <Link className="btn-ghost btn text-xl normal-case bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" href={"#"}>
          SupaNotes
        </Link>
      </div>
      <AddNoteForm />
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <Image
                src={user ? user.profileImageUrl : "https://static.zooniverse.org/www.zooniverse.org/assets/simple-avatar.png"}
                alt="profile picture"
                width={100}
                height={100}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <SignOutButton>Logout</SignOutButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
