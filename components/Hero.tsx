"use client";

export default function Hero() {
  return (
    <section
      className="fixed top-0 left-0 w-full h-[25vh] z-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/PINUS-ESTONADO-300x240.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Bem-vindo à Juncoplast
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">
          Desde 2010 um novo conceito em fibra sintética.
        </p>
      </div>
    </section>
  );
}
