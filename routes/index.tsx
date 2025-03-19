import { Footer } from "../components/Footer.tsx";
import { LinkButton } from "../components/Button.tsx";

export default function Home() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center py-4 bg-gradient-to-b from-emerald-100 to-emerald-200">
      <div class="sm:max-w-md w-full bg-white/80 sm:rounded-lg rounded-none sm:shadow-lg p-8 text-center">
        <h1 class="text-4xl font-bold text-emerald-700 mb-4">
          I Hearby Declare
        </h1>
        <p class="text-gray-600 mb-8">
          Create time-locked messages that remain hidden until a time you
          choose.
        </p>
        <p class="text-gray-600 mb-8">
          Proove that you knew something before it happened, without revealing
          it beforehand.
        </p>
        <LinkButton href="/create" class="mb-8">
          Declare Something
        </LinkButton>
        <Footer />
      </div>
    </div>
  );
}
