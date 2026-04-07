import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex h-[calc(100vh-80px)] overflow-hidden flex-col items-center justify-center px-6 pb-12 text-center">
      <h1
        className="animate-fade-rise max-w-7xl text-5xl font-normal text-[#000000] sm:text-7xl md:text-8xl"
        style={{
          fontFamily: "var(--font-display)",
          lineHeight: 0.95,
          letterSpacing: "-2.46px",
          textShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        Between <span className="italic text-[#4A4A4A]">code</span> and{" "}
        <span className="italic text-[#4A4A4A]">curiosity</span>, I explore and create.
      </h1>

      <Link
        to="/about"
        className="animate-fade-rise-delay mt-12 rounded-full bg-[#000000] px-14 py-5 text-base text-[#FFFFFF] transition-transform duration-200 hover:scale-[1.03]"
      >
        About Me
      </Link>
    </section>
  );
}
