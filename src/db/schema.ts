import { relations } from "drizzle-orm";
import {
  serial,
  varchar,
  // pgTable,
  timestamp,
  integer,
  uniqueIndex,
  pgTableCreator,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `hive_codes_${name}`);

/*
  Company
    id
    name
    createdAt
    updatedAt
*/
export const company = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull().unique(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

/*
  Creator
    id
    name
    createdAt
    updatedAt
*/
export const creator = pgTable("creators", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).unique(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

/*
  Codes
    id
    code
    CreatorId - references Creator.id
    CompanyId - references Company.id
    description
    createdAt
    updatedAt

    UNIQUE (code, CompanyId, CreatorId)
*/

export const code = pgTable(
  "codes",
  {
    id: serial("id").primaryKey(),
    code: varchar("code", { length: 256 }),
    description: varchar("description", { length: 256 }),

    creatorId: integer("creator_id")
      .references(() => creator.id, {
        onDelete: "cascade",
      })
      .notNull(),
    companyId: integer("company_id")
      .references(() => company.id, {
        onDelete: "cascade",
      })
      .notNull(),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (codes) => {
    return {
      codes_company_creator: uniqueIndex("codes_company_creator").on(
        codes.code,
        codes.companyId,
        codes.creatorId,
      ),
    };
  },
);

/*
  Company
    - has many codes
*/
export const companyRelations = relations(company, ({ many }) => ({
  codes: many(code),
}));

/*
  Creator
    - has many codes
*/
export const creatorRelations = relations(creator, ({ many }) => ({
  codes: many(code),
}));

/*
  Code
    - belongs to creator
    - belongs to company
*/
export const codeRelations = relations(code, ({ one }) => ({
  creator: one(creator, {
    fields: [code.creatorId],
    references: [creator.id],
  }),
  company: one(company, {
    fields: [code.companyId],
    references: [company.id],
  }),
}));
