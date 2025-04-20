"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="fixed top-0 left-0 w-full h-[25vh] z-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/PINUS-ESTONADO-300x240.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
      <div className="relative z-10 flex flex-row items-center justify-center h-full text-center text-white px-4">
        {/* Imagem responsiva */}
        <div className="w-[700px] sm:w-[120px] md:w-[160px] lg:w-[500px]">
          <Image
            src="/logo2.png"
            alt="Logo JuncoPlast"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
