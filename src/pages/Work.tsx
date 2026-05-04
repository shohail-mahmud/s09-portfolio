export default function Work() {
  return (
    <section className="animate-fade-rise mx-auto max-w-3xl px-6 pb-32 pt-16 text-center sm:pt-24 md:pt-32">
      <h2
        className="text-5xl font-normal text-[#000000] dark:text-[#FFFFFF]"
        style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
      >
        Work
      </h2>
      <p className="mt-8 text-base leading-relaxed text-[#4A4A4A] dark:text-[#B5B5B5] sm:text-lg">
        Selected explorations and experiments are available on my GitHub.
      </p>
      <a
        href="https://github.com/shohail-mahmud"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block rounded-full bg-[#000000] px-14 py-5 text-base text-[#FFFFFF] transition-transform duration-200 hover:scale-[1.03] dark:bg-[#FFFFFF] dark:text-[#000000]"
      >
        View GitHub
      </a>
    </section>
  );
}
