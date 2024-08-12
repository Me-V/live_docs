'use client'
import { useRouter } from 'next/navigation';
import { Vortex } from "@/components/ui/vortex";
import { FlipWords } from "@/components/ui/flip-words";


export default function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/sign-in');
  };


  const words = ["Creation", "Editing", "Sharing", "Collaboration"];

  return (
    <div className="w-full h-full fixed inset-0 flex items-center justify-center overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center">
          Lively Docs
        </h2>
        <div className="h-[10rem] flex justify-center items-center px-4">
          <div className="text-4xl font-normal text-center mx-auto text-white dark:text-neutral-400">
            <FlipWords words={words} />
            made easy with Lively Docs
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button onClick={handleClick} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Login To Get Started
            </div>
          </button>
        </div>
      </Vortex>
    </div>
  );
}
