import Hero from "@/maincomponents/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center bg-red-300 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hello world

      </main>
      <div className=" my-7 bg-black text-red-900 p-[15px] rounded-2xl shadow-xl ring-1 ring-white hover:scale-110 hover:bg-white hover:ring-black transition duration-300 ease-in-out transform ">
        Weather Test
      </div>
      <div className="">
        <Hero></Hero>
      </div>
       
    </div>
  );
}
