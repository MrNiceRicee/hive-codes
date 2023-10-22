import { Loader } from "lucide-react";

export function SubmitLoadingIndicator() {
  return (
    <div className="flex animate-pulse items-center justify-center space-x-2">
      <Loader className="h-5 w-5 animate-spin" />
      <span className="inline-block">adding...</span>
    </div>
  );
}
