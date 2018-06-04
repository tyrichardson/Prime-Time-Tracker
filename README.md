# Prime-Time-Tracker
###Project Management Tracking system

- [x] Add projects by name
- [x] Track time to projects (task name, date, start time and end time)
- [x] Display a history of all time entries
- [x] Delete existing entries
- [x] Show total hours worked next to each project on the project page

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


For future iterations:
Angular Material
Ability to edit entries or projects (PUT routes)
Display a chart showing the total number of hours worked for each project (ChartJS)
Ability to select start and end dates to influence what appears on the chart

