import { db } from "~/db";
import { CreateCreatorCode } from "./_CreateCreatorCode";
import { CreateForm } from "./_CreateCreatorCode/CreateForm";
import { Suspense } from "react";
import { LoaderBar } from "~/components/loaders/LoaderBar";
import { LoaderList } from "~/components/loaders/LoaderList";
import { CouponCard } from "~/components/CouponCard";

async function CreatorFetch(id: string) {
  const creator = await db.query.creator.findFirst({
    where(creator, { eq }) {
      // @ts-ignore -- this works, but drizzle doesn't like it
      return eq(creator.id, id);
    },
    columns: {
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return creator;
}

async function CreatorCodesFetch(id: string) {
  const codes = await db.query.code.findMany({
    where(code, { eq }) {
      // @ts-ignore -- this works, but drizzle doesn't like it
      return eq(code.creatorId, id);
    },
    with: {
      company: {
        columns: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return codes;
}

async function CreatorName({ id }: { id: string }) {
  const creator = await CreatorFetch(id);

  return <h2 className="text-center font-cal text-6xl">{creator?.name}</h2>;
}

async function CreatorCodes({ id }: { id: string }) {
  const codes = await CreatorCodesFetch(id);

  return (
    <ul className="mx-auto space-y-6 pt-4">
      {codes.length ? (
        codes.map((code) => {
          return (
            // <li key={code.id}>
            //   <h3 className="font-cal text-2xl">
            //     <pre className="inline rounded-lg border bg-[var(--surface-2)] px-2 py-1">
            //       {code.code}
            //     </pre>
            //     {" - "}
            //     {code.company.name}
            //   </h3>
            //   <p>{code.description}</p>
            // </li>
            <CouponCard
              key={code.id}
              code={code.code!}
              company={code.company.name}
              description={code.description}
            />
          );
        })
      ) : (
        <li>
          <h3>No codes found</h3>
        </li>
      )}
    </ul>
  );
}

export function CreatorData({
  id,
  searchParams,
}: {
  id: string;
  searchParams: { company: string; companyQuery: string };
}) {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center space-y-2">
      <Suspense fallback={<LoaderBar />}>
        <CreatorName id={id} />
      </Suspense>
      <CreateCreatorCode>
        <CreateForm creatorId={id} searchParams={searchParams} />
      </CreateCreatorCode>
      <Suspense
        fallback={<LoaderList list={{ className: "w-full mx-auto" }} />}
      >
        <CreatorCodes id={id} />
      </Suspense>
    </section>
  );
}
