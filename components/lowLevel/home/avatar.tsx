import Image from "next/image";
import vanshaj from "@/public/vanshaj.jpeg"

export default function avatar() {
  return (
    <>
      <Image src={vanshaj} alt="Vanshaj Kataria" className="w-fit mx-auto h-fit rounded-lg object-cover border-4 border-[#ffffff]" />
    </>
  );
}
