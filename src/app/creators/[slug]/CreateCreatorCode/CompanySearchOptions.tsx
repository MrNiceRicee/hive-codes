import type { SearchCompanies } from "./SearchCompanies";

export function CompanySearchOptions({
  data,
  listName,
}: {
  data: SearchCompanies;
  listName: string;
}) {
  // const data =  searchCompanies(query);

  return (
    <datalist id={listName} className="w-full">
      {data.map((company) => (
        <option key={company.id} value={company.id}>
          {company.name}
        </option>
      ))}
    </datalist>
  );
}
