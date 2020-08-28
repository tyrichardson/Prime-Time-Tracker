# Prime-Time-Tracker

##Project Management Tracking system

AngularJS, Material, ChartJS, Node/Express, PostgreSQL

Database
-[x]
  CREATE TABLE "entries" (
  "id" serial primary key,
  "entry" varchar(120),
  "date" date,
  "hours" INT not null
);

  CREATE TABLE "projects" (
  "id" serial primary key,
  "project_name" varchar(80)
);

ALTER TABLE "entries" ADD COLUMN "projects_id" INT REFERENCES "projects";

ALTER TABLE "entries" ADD COLUMN "projects_id" INT REFERENCES "projects";

ALTER TABLE "projects" DROP COLUMN "total_hours";

