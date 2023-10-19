import type { SearchCompanies } from "./searchCompanies";

export function CompanySearchOptions({
  data,
  listName,
}: {
  data: SearchCompanies;
  listName: string;
}) {
  // const data =  searchCompanies(query);

  if (!data.length) {
    return (
      <datalist id={listName} className="w-full">
        <option value="no results found" disabled>no results found</option>
      </datalist>
    );
  }

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
