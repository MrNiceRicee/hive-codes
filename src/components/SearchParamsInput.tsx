"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "~/components/Input";

export function SearchParamsInput({
  name,
  placeholder,
  paramName,
}: {
  name: string;
  placeholder: string;
  paramName?: string;
}) {
  const param = paramName ?? name;
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get(param) || "";

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    const newParams = new URLSearchParams(searchParams);

    if (newValue) {
      newParams.set(param, newValue);
    } else {
      newParams.delete(param);
    }

    router.push(`${pathName}?${newParams.toString()}`);
  }

  return (
    <Input
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
