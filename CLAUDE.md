# Claude Assistance Guidelines for ideclare

This is a Deno Fresh app called "ideclare". It lets users create "declarations"
which contains some text (message) and a publicationDate. They are completely
immutable. Declarations are given a public URL (`view/[declarationId]`) which
shows a placeholder until the publicationDate has passed - then it shows the
message.

It uses and Deno KV for storage. The app is hosted on Deno Deploy. The UI is
built with Preact. It uses Tailwind v3 for styling.

## Commands

- Build/start: `deno task start` (watches for changes)
- Lint/Typecheck: `deno lint`
- Test: `deno test`
- Format: `deno fmt`
- Update dependencies: `deno task update`

## Code Style

- **Formatting**: Use Deno's formatter (`deno fmt`)
- **Types**: Define in types.ts; use interfaces for objects with methods, type
  for plain objects
- **Functions**: Named exports for components; default exports for islands/pages
- **Error Handling**: Check for nulls before access; use early returns
- **Components**: Use functional components with explicit prop types
- **Styling**: Use Tailwind v3 classes inline
- **Frontend**: Use modern HTML features like HTML validation where possible,
  only modern browser support is required.

## Project Structure

- Fresh/Deno project, `routes`, `islands`, `components`, and `static` are all
  standard Deno Fresh directories.
- Deno KV database for persistent storage, defined in `db.ts`
- There are 3 main pages, the "landing page" or "main page" lives at
  `routes/index.tsx`, the "create page" lives at `routes/create/index.tsx`, and
  the "view page" lives at `routes/view/[declarationId]/index.tsx`.
