import Image from "next/image";
import type { NextPage } from "next";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <div className="navbar bg-base-100 mb-6">
      <div className="flex-1">
        <Link className="btn-ghost btn text-xl normal-case" href={"#"}>
          Expensesify
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input"
          />
        </div>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <Image
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
              <Link className="justify-between" href={"#"}>
                Profile
              </Link>
            </li>
            <li>
              <Link href={"#"}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;