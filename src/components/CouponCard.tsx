import { Store, Ticket } from "lucide-react";
export function CouponCard({
  code,
  company,
  description,
}: {
  code: string;
  company: string;
  description: string | null;
}) {
  return (
    <li className="flex items-center space-x-2 rounded-lg border bg-background p-3 shadow-md">
      {/* <button className="before:grainy-2 relative  flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-full bg-stone-400 shadow-lg dark:bg-zinc-800 dark:before:opacity-60"> */}
      <Store className="relative h-10 w-10" />
      {/* </button> */}
      <div className="flex flex-grow flex-col space-y-1">
        <h3 className="font-cal">{company}</h3>
        <p className="text-shade text-sm">{description}</p>
      </div>
      <button className="before:grainy-2 relative rounded-lg border px-2 py-1">
        <h3 className="font-cal text-2xl">{code}</h3>
      </button>
    </li>
  );
}
