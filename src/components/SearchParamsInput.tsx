"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
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
  const [value, setValue] = useState(searchParams.get(param) || "");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set(param, value);
      setValue(value);
    } else {
      newParams.delete(param);
      setValue("");
    }

    router.push(`${pathName}?${newParams.toString()}`);
  }

  return (
    <Input
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
