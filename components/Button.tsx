import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = JSX.HTMLAttributes<HTMLAnchorElement>;

export function Button({ ...props }: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-colors bg-emerald-600 text-white hover:bg-emerald-700";

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${baseClasses} ${props.class || ""}`}
    />
  );
}

export function LinkButton({ ...props }: LinkButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-colors inline-block bg-emerald-600 text-white hover:bg-emerald-700";

  return <a {...props} class={`${baseClasses} ${props.class || ""}`} />;
}
