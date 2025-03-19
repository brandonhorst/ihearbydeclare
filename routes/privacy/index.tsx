import { Footer } from "../../components/Footer.tsx";

export default function Privacy() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center py-4 bg-gradient-to-b from-emerald-100 to-emerald-200">
      <div class="md:max-w-2xl w-full bg-white/80 md:rounded-lg md:shadow-lg p-8">
        <h1 class="text-4xl font-bold text-emerald-700 mb-6 text-center">
          Privacy Policy
        </h1>

        <div class="space-y-4 text-gray-700">
          <p>
            "I Hearby Declare" is intended as a fun, experimental tool and is
            provided without any guarantees regarding privacy or security.
          </p>

          <p>
            <strong>Data Storage:</strong>{" "}
            Your declarations are stored unencrypted in Deno KV. While we take
            reasonable measures to protect your data, we cannot guarantee its
            absolute security.
          </p>

          <p>
            <strong>Data Collection:</strong>{" "}
            We collect only the information you explicitly provide when creating
            a declaration (the message content and publication date). No
            analytics or user profile information is collected.
          </p>

          <p>
            <strong>Usage Restrictions:</strong>{" "}
            This service should not be used for:
          </p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Storing sensitive personal information</li>
            <li>Illegal activities or content</li>
            <li>Mission-critical communications</li>
            <li>Content that violates others' privacy or rights</li>
          </ul>

          <p>
            <strong>Service Continuity:</strong>{" "}
            We provide no guarantees regarding the continued availability of
            this service or the preservation of stored declarations.
          </p>

          <p>
            By using this service, you acknowledge these limitations and agree
            to use it responsibly and at your own risk.
          </p>
        </div>

        <div class="mt-8 text-center">
          <a
            href="/"
            class="inline-block px-6 py-3 bg-emerald-600 text-white font-medium text-lg rounded-lg shadow hover:bg-emerald-700 hover:shadow-lg transition-colors"
          >
            Back to Home
          </a>
        </div>

        <div class="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
