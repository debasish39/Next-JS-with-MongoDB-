import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-rose-100 px-6">
      {/* Decorative gradient blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-400/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-rose-500/30 blur-3xl" />

      <div className="relative z-10 max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
          Error 404
        </p>

        <h1 className="mt-4 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
          Page Not Found
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          The page you are trying to access doesn’t exist, has been removed, or
          is temporarily unavailable.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:from-red-500 hover:to-rose-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-red-200 bg-white px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
