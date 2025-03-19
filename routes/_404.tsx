import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="min-h-screen flex flex-col items-center justify-center p-0 bg-gradient-to-b from-emerald-100 to-emerald-200">
        <div class="sm:max-w-md w-full bg-white/80 sm:rounded-lg rounded-none sm:shadow-lg p-8 text-center">
          <h1 class="text-4xl font-bold text-emerald-700 mb-4">
            404 - Page not found
          </h1>
          <p class="text-gray-600 mb-8">
            The page you were looking for doesn't exist.
          </p>
          <a
            href="/"
            class="inline-block px-6 py-3 bg-emerald-600 text-white font-medium text-lg rounded-lg shadow hover:bg-emerald-700 hover:shadow-lg transition-colors mb-8"
          >
            Go back home
          </a>
          <Footer />
        </div>
      </div>
    </>
  );
}
