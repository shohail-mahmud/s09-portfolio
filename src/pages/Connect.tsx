export default function Connect() {
  return (
    <section className="animate-fade-rise mx-auto max-w-xl px-6 pb-32 pt-16 text-center sm:pt-24 md:pt-32">
      <h2
        className="text-5xl font-normal text-[#000000]"
        style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
      >
        Connect
      </h2>

      <div className="mt-10 flex flex-col items-center">
        <span className="mb-4 text-sm text-[#4A4A4A]">Find me online</span>
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://instagram.com/shohailmahmud09"
            target="_blank"
            rel="noreferrer"
            className="w-full min-w-[280px] rounded-full bg-[#000000] px-10 py-4 text-sm text-[#FFFFFF] transition-all duration-300 hover:scale-105"
          >
            Personal Instagram
          </a>
          <a
            href="https://instagram.com/s09_currency"
            target="_blank"
            rel="noreferrer"
            className="w-full min-w-[280px] rounded-full bg-[#000000] px-10 py-4 text-sm text-[#FFFFFF] transition-all duration-300 hover:scale-105"
          >
            Currency Archive
          </a>
        </div>
      </div>
    </section>
  );
}
