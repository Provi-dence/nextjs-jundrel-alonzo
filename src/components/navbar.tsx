import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-xl sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
                <Link href="/Jundrel_CV.pdf" target="_blank" rel="noopener noreferrer"
                className="btn btn-outline btn-primary">
                    Resume
                </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className=" normal-case text-xl flex items-center">
          <Image
            src="/images/junwell_logo.png"
            alt="Jundrel Alonzo Logo"
            width={150}
            height={70}
            className="mr-2 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-10">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-10">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="mr-10">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="mr-10">
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/Jundrel_CV.pdf" target="_blank" rel="noopener noreferrer">
                Resume
            </Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}