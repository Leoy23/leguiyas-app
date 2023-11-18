import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-transparent.png";

const Nav = () => {
  return (
    <div className="navbar bg-transparent md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-darkerPink text-white rounded-box w-52"
          >
            <li>
              <Link href={"/#bio"}>BIO</Link>
            </li>
            <li>
              <Link href={"/#music"}>MUSIC</Link>
            </li>
            <li>
              <Link href={"/#videos"}>VIDEOS</Link>
            </li>
            <li>
              <Link href={"/#merch"}>MERCH</Link>
            </li>
            <li>
              <a>MEMBERS</a>
              <ul className="p-2">
                <li>
                  <Link href={"/#newsletter_form"}>JOIN OUR NEWSLETTER</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-center">
          <Image src={logo} alt="leguiya's logo" priority className="w-1/4" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/#bio"}>BIO</Link>
          </li>
          <li>
            <Link href={"/#music"}>MUSIC</Link>
          </li>
          <li>
            <Link href={"/#videos"}>VIDEOS</Link>
          </li>
          <li>
            <Link href={"/#merch"}>MERCH</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>MEMBERS</summary>
              <ul className="p-2 bg-darkerPink">
                <li>
                  <Link href={"/#newsletter_form"}>JOIN OUR NEWSLETTER</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-darkerPink text-white">
          <Link href={"/#contact"}>CONTACT</Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;
