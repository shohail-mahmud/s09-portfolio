export default function Archive() {
  return (
    <section className="animate-fade-rise mx-auto max-w-3xl px-6 pb-32 pt-16 text-center sm:pt-24 md:pt-32">
      <h2
        className="text-5xl font-normal text-[#000000]"
        style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
      >
        Archive
      </h2>
      <p className="mt-8 text-base leading-relaxed text-[#4A4A4A] sm:text-lg">
        A separate space dedicated to my long-term interest in currency and history.
      </p>
      <a
        href="#"
        className="mt-10 inline-block rounded-full bg-[#000000] px-14 py-5 text-base text-[#FFFFFF] transition-transform duration-200 hover:scale-[1.03]"
      >
        Visit Collection
      </a>
    </section>
  );
}
