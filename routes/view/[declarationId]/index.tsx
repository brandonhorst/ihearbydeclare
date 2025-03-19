import { Handlers, PageProps } from "$fresh/server.ts";
import { getDb } from "../../../server.ts";
import { ViewDeclaration } from "../../../types.ts";
import CountdownTimer from "../../../islands/CountdownTimer.tsx";
import { Footer } from "../../../components/Footer.tsx";
import { LinkButton } from "../../../components/Button.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { declarationId } = ctx.params;
    const db = getDb();
    const viewDeclaration = await db.getViewDeclaration(declarationId);
    if (viewDeclaration == null) {
      return new Response("", {
        status: 302,
        headers: { Location: "/" },
      });
    } else {
      return ctx.render(viewDeclaration);
    }
  },
};

export default function View(props: PageProps<ViewDeclaration>) {
  const { data } = props;
  const createDateStr = new Date(data.createDate).toLocaleString();
  const publicationDateStr = new Date(data.publicationDate).toLocaleString();

  return (
    <div class="min-h-screen flex flex-col items-center justify-center py-4 bg-gradient-to-b from-emerald-100 to-emerald-200">
      <div class="sm:max-w-md w-full bg-white/80 sm:rounded-lg sm:shadow-lg p-8">
        {data.isPublished
          ? (
            // Display when publication date has passed
            <>
              <h1 class="text-4xl font-bold text-center mb-4 text-emerald-700">
                {data.title}
              </h1>
              <p class="text-xl text-center my-6">{data.message}</p>
              <div class="text-gray-600 mt-8 text-center">
                <p>
                  <span class="font-semibold">Declared:</span> {createDateStr}
                </p>
                <p>
                  <span class="font-semibold">Revealed:</span>{" "}
                  {publicationDateStr}
                </p>
              </div>
            </>
          )
          : (
            // Display when publication date has not yet passed
            <>
              <h1 class="text-3xl font-bold text-center mb-4 text-emerald-700">
                {data.title}
              </h1>
              <div class="text-xl text-center mb-6 bg-black p-12 rounded">
              </div>
              <div class="text-gray-600 text-center mb-8">
                <p>
                  <span class="font-semibold">Declared:</span> {createDateStr}
                </p>
                <p>
                  <span class="font-semibold">Will be revealed:</span>{" "}
                  {publicationDateStr}
                </p>
              </div>
              <CountdownTimer publicationDate={data.publicationDate} />
            </>
          )}
        <div class="mt-8 text-center">
          <LinkButton href="/">Go Home</LinkButton>
        </div>
        <div class="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
