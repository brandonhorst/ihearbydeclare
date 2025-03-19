import { Handlers } from "$fresh/server.ts";
import { getDb } from "../../server.ts";
import { Declaration } from "../../types.ts";
import DeclarationForm from "../../islands/DeclarationForm.tsx";
import { Footer } from "../../components/Footer.tsx";

export const handler: Handlers = {
  async POST(req) {
    const formData = await req.formData();
    const title = formData.get("title");
    const message = formData.get("message");
    const publicationString = formData.get("publication-date") as string;

    // Enhanced validation for server-side
    if (
      typeof title !== "string" || !title.trim() ||
      typeof message !== "string" || !message.trim() ||
      typeof publicationString !== "string" || !publicationString.trim()
    ) {
      return new Response("All fields are required", { status: 400 });
    }

    const publicationTimestamp = Date.parse(publicationString);

    if (Number.isNaN(publicationTimestamp)) {
      return new Response("Invalid publication date format", { status: 400 });
    }

    const now = new Date();
    const publicationDate = new Date(publicationTimestamp);

    // Check if publication date is in the future
    if (publicationDate <= now) {
      return new Response("Publication date must be in the future", {
        status: 400,
      });
    }

    const declaration: Declaration = {
      title: title.trim(),
      message: message.trim(),
      createDate: now,
      publicationDate,
    };

    console.log("writing", declaration);

    const db = getDb();
    const declarationId = await db.createDeclaration(declaration);

    return new Response("", {
      status: 302,
      headers: { Location: `/view/${declarationId}` },
    });
  },
};

export default function Create() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center py-4 bg-gradient-to-b from-emerald-100 to-emerald-200">
      <div class="sm:max-w-md w-full bg-white/80 sm:rounded-lg rounded-none sm:shadow-lg p-8">
        <h1 class="text-4xl font-bold text-emerald-700 mb-6 text-center">
          I Hearby Declare&hellip;
        </h1>
        <DeclarationForm />
        <div class="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
