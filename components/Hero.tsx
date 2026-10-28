import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-blue-100 px-6 py-16 text-center sm:px-10 md:px-20 lg:min-h-screen lg:px-32"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-2">
        <span className="mb-3 inline-block w-max border-b-2 border-amber-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
          Web Development & SEO
        </span>

        <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block">Build Better Websites.</span>
          <span className="block">Grow Through Search.</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
          We build custom and WordPress websites with a strong technical
          foundation, then help businesses improve their search visibility
          through SEO and useful content.
        </p>

        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="https://wa.me/923212481412?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20SEO%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-black px-8 py-4 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            Discuss Your Project
          </Link>

          <Link
            href="/#what-i-do"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border-2 border-black bg-white/80 px-8 py-4 text-center text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
