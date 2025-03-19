export function Footer() {
  return (
    <div class="text-gray-500 text-sm space-y-1 text-center">
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
        <a href="/privacy" class="text-emerald-600 hover:text-emerald-800">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}