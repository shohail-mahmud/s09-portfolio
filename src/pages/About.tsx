export default function About() {
  return (
    <section className="animate-fade-rise mx-auto max-w-3xl px-6 h-[calc(100vh-88px)] overflow-hidden flex flex-col justify-center text-center -mt-12">
      <h2
        className="text-5xl font-normal text-[#000000] dark:text-[#FFFFFF]"
        style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
      >
        About
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#4A4A4A] dark:text-[#B5B5B5] sm:text-lg">
        I&apos;m Shohail Mahmud, a builder from Bangladesh exploring ideas through code,
        creativity, and history. I use modern AI tools to turn simple concepts into
        meaningful digital experiences.
      </p>
      <p className="mt-4 text-base leading-relaxed text-[#4A4A4A] dark:text-[#B5B5B5] sm:text-lg">
        I don&apos;t follow a fixed path. I explore ideas, experiment with tools, and build what feels meaningful.
        From digital experiences to historical curiosity, my work is driven by simplicity,
        creativity, and a constant desire to learn.
      </p>
    </section>
  );
}
