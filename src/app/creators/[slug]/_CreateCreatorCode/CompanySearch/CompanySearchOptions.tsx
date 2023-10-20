import { searchCompanies } from "../searchCompanies";

export async function CompanySearchOptions({
  searchParams,
  listName,
}: {
  searchParams: { company: string };
  listName: string;
}) {
  const { data, error } = await searchCompanies(searchParams);

  if (!data.length) {
    return (
      <datalist id={listName} className="w-full">
        <option value="no results found">
          no results found
        </option>
      </datalist>
    );
  }

  return (
    <datalist id={listName} className="w-full">
      {data.map((company) => (
        <option key={company.id} value={company.name}>
          {company.name}
        </option>
      ))}
    </datalist>
  );
}
