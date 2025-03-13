import {
  pgTable,
  text,
  integer,
  timestamp,
  boolean,
  jsonb,
  numeric,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const candidates = pgTable("candidates", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  linkedinUrl: text("linkedin_url"),
  githubUrl: text("github_url"),
  createdAt: timestamp("created_at").notNull(),
});

export const resumes = pgTable("resumes", {
  id: integer("id").primaryKey(),
  candidateId: integer("candidate_id")
    .notNull()
    .references(() => candidates.id, { onDelete: "cascade" }),
  resumeHash: text("resume_hash").unique(),
  fileUrl: text("file_url"),
  parsedSkills: jsonb("parsed_skills"),
  exceptionalAbilities: jsonb("exceptional_abilities"),
  createdAt: timestamp("created_at").notNull(),
});

export const resumeContent = pgTable("resume_content", {
  id: integer("id").primaryKey(),
  resumeId: integer("resume_id")
    .notNull()
    .references(() => resumes.id, { onDelete: "cascade" }),
  chunkOrder: integer("chunk_order").notNull(),
  textChunk: text("text_chunk").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const recruiters = pgTable("recruiters", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  company: text("company"),
  createdAt: timestamp("created_at").notNull(),
});

export const jobPostings = pgTable("job_postings", {
  id: integer("id").primaryKey(),
  recruiterId: integer("recruiter_id")
    .notNull()
    .references(() => recruiters.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  requiredSkills: jsonb("required_skills").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const resumeScreening = pgTable("resume_screening", {
  id: integer("id").primaryKey(),
  resumeId: integer("resume_id")
    .notNull()
    .references(() => resumes.id, { onDelete: "cascade" }),
  jobId: integer("job_id")
    .notNull()
    .references(() => jobPostings.id, { onDelete: "cascade" }),
  skillMatchScore: numeric("skill_match_score").notNull(),
  linkQualityScore: numeric("link_quality_score").default("1.0"),
  rankingScore: numeric("ranking_score").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
