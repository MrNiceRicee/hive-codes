import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { SubmitLoadingIndicator } from "./SubmitLoadingIndicator";

export function SubmitButton() {
  let { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="mt-4 w-full rounded-lg border py-2 font-cal backdrop-blur backdrop-brightness-125"
    >
      {pending ? <SubmitLoadingIndicator /> : "add"}
    </button>
  );
}
