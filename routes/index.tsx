export default function Home() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center p-0 bg-gradient-to-b from-emerald-100 to-emerald-200">
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
        <a
          href="/create"
          class="inline-block px-6 py-3 bg-emerald-600 text-white font-medium text-lg rounded-lg shadow hover:bg-emerald-700 hover:shadow-lg transition-colors mb-8"
        >
          Declare Something
        </a>
        <div class="text-gray-500 text-sm space-y-1">
          <p>
            Made by{" "}
            <a
              href="https://brandonhorst.me"
              target="_blank"
              class="text-emerald-600 hover:text-emerald-800"
            >
              Brandon Horst
            </a>
            , view on{"  "}
            <a
              href="https://github.com/brandonhorst/ihearbydeclare"
              class="text-emerald-600 hover:text-emerald-800"
            >
              GitHub
            </a>
          </p>
          <p>
            <a href="/" class="text-emerald-600 hover:text-emerald-800">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
