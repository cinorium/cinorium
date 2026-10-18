import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="box-border flex flex-col lg:flex-row flex-col-reverse items-center justify-between w-full min-h-screen bg-blue-100 px-6 sm:px-10 md:px-20 lg:px-32 py-6 lg:py-12 gap-10 overflow-hidden">
      {/* Hero Text */}
      <div className="flex flex-col flex-1 max-w-2xl gap-2 w-full">
        <span className="inline-block text-sm font-normal uppercase mb-3 border-b-amber-400 border-b-2 w-max">
          DIGITAL MARKETING · SEO · CONTENT · CREATIVE
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900 leading-tight mb-4">
          Digital Marketing & Growth, backed by Creative & Web Expertise.
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          I help businesses build stronger online visibility through SEO,
          content, social media, websites and conversion-focused creative work.
        </p>

        <div className="flex flex-wrap gap-3 mt-2">
          <Button>Hire Me</Button>
          <Button variant="outline">View My Work!</Button>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="relative w-full max-w-[350px] sm:max-w-[400px] aspect-[4/5] flex-shrink-0">
        <Image
          src="/hero-image.png"
          alt="cinroium ceo image in digital art style for hero section"
          fill
          priority
          className="object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
