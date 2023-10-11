import Link, { type LinkProps } from "next/link";
import { cn } from "~/lib/utils";
// import { NavBack } from "./NavBack";

type NavLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

function NavLink({ className, children, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "rounded-lg outline-offset-0 transition-all ease-elastic-out-3 visited:text-[var(--text-1)] focus:outline-dashed focus:outline-4",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="container mx-auto flex justify-between py-4">
        <div className="flex items-center space-x-4 font-cal text-lg">
          <NavLink href="/">Hive Codes</NavLink>
          {/* <NavBack /> */}
        </div>
        <div className="flex items-center space-x-4">
          <NavLink href="/search">Search</NavLink>
          <NavLink href="/creators">Creators</NavLink>
          <NavLink href="/companies">Companies</NavLink>
        </div>
      </div>
    </nav>
  );
}
