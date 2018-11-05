# Prime-Time-Tracker

###Project Management Tracking system--extended weekend solo project

Database
-[x] Start with two tables projects & entries. When base features are complete, add more tables as needed for stretch goals.
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

- [x] Create branch


Stretch Goals
Angular Material for design
Ability to edit entries or projects
Display a chart showing the total number of hours worked for each project
Ability to select start and end dates to influence what appears on the chart




<!-- Angular-Extended-Weekend-Assignement
As a capstone to your AngularJS work, you'll be making a solo project in an extended weekend fashion. You'll be flexing every code muscle you've built so far! We've provided 3 projects for you to choose from. There is no code provided, save for a readme. You will be making everything from scratch.








