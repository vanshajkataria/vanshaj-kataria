import Link from "next/link";

export default function navbar() {
  return (
    <>
      <header className="p-6 flex flex-col lg:flex-row justify-between border-b fixed top-0 w-full">
        <h1 className="text-xl lg:text-4xl font-black text-center lg:text-left">
          Vanshaj Kataria
        </h1>
        <nav className="flex justify-center items-center">
          <ul className="flex flex-wrap justify-center items-center lg:justify-end gap-2 md:gap-6">
            <Link href="#">
              <li className="text-sm md:text-base lg:text-xl font-semibold hover:bg-[#d9d9d9] hover:text-[#0b090a] duration-300 ease-in-out transition-all px-2">
                About
              </li>
            </Link>
            <Link href="#">
              <li className="text-sm md:text-base lg:text-xl font-semibold hover:bg-[#d9d9d9] hover:text-[#0b090a] duration-300 ease-in-out transition-all px-2">
                Education
              </li>
            </Link>
            <Link href="#">
              <li className="text-sm md:text-base lg:text-xl font-semibold hover:bg-[#d9d9d9] hover:text-[#0b090a] duration-300 ease-in-out transition-all px-2">
                Experience
              </li>
            </Link>
            <Link href="#">
              <li className="text-sm md:text-base lg:text-xl font-semibold hover:bg-[#d9d9d9] hover:text-[#0b090a] duration-300 ease-in-out transition-all px-2">
                Projects
              </li>
            </Link>
            <Link href="#">
              <li className="text-sm md:text-base lg:text-xl font-semibold hover:bg-[#d9d9d9] hover:text-[#0b090a] duration-300 ease-in-out transition-all px-2">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
