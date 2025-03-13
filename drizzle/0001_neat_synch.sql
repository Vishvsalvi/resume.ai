CREATE TABLE "candidates" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"linkedin_url" text,
	"github_url" text,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "candidates_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "job_postings" (
	"id" integer PRIMARY KEY NOT NULL,
	"recruiter_id" integer NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"required_skills" jsonb NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "recruiters" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"company" text,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "recruiters_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "resume_content" (
	"id" integer PRIMARY KEY NOT NULL,
	"resume_id" integer NOT NULL,
	"chunk_order" integer NOT NULL,
	"text_chunk" text NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "resume_screening" (
	"id" integer PRIMARY KEY NOT NULL,
	"resume_id" integer NOT NULL,
	"job_id" integer NOT NULL,
	"skill_match_score" numeric NOT NULL,
	"link_quality_score" numeric DEFAULT '1.0',
	"ranking_score" numeric NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "resumes" (
	"id" integer PRIMARY KEY NOT NULL,
	"candidate_id" integer NOT NULL,
	"resume_hash" text,
	"file_url" text,
	"parsed_skills" jsonb,
	"exceptional_abilities" jsonb,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "resumes_resume_hash_unique" UNIQUE("resume_hash")
);
--> statement-breakpoint
ALTER TABLE "job_postings" ADD CONSTRAINT "job_postings_recruiter_id_recruiters_id_fk" FOREIGN KEY ("recruiter_id") REFERENCES "public"."recruiters"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resume_content" ADD CONSTRAINT "resume_content_resume_id_resumes_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."resumes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resume_screening" ADD CONSTRAINT "resume_screening_resume_id_resumes_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."resumes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resume_screening" ADD CONSTRAINT "resume_screening_job_id_job_postings_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job_postings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_candidate_id_candidates_id_fk" FOREIGN KEY ("candidate_id") REFERENCES "public"."candidates"("id") ON DELETE cascade ON UPDATE no action;