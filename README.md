# Prime-Time-Tracker
###Project Management Tracking system--extended weekend solo project

- [x] Add projects by name
Track time to projects (task name, date, start time and end time)
Display a history of all time entries
- [x] Delete existing entries
Show total hours worked next to each project on the project page

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
Feel free to deviate from this list and add features of your own



<!-- Angular-Extended-Weekend-Assignement
As a capstone to your AngularJS work, you'll be making a solo project in an extended weekend fashion. You'll be flexing every code muscle you've built so far! We've provided 3 projects for you to choose from. There is no code provided, save for a readme. You will be making everything from scratch.

HOMEWORK
Read Project Options
Pick Project
Copy Trello Board
Create a repo (DO NOT CLONE/FORK)

Trello
Each Assignment contains a link to a premade Trello Board. Please COPY it to your own account. You should feel free to add or remove tasks from your own copy, but do not alter the original.

Project Options
Pet Hotel
***Time Tracker***
Movie Collection

HALP IM STUCK
When you run into an issue, we ask that you try to figure it out.

Steps:

Try Debugging, Reading Errors
Google a question
Ask a neighbor
Ask an instructor / Write your name on the queue

THE NEXT TWO SCHOOL DAYS
You will still be coming to school, 8:30am to 5pm. We will not have lectures, but we will have other events. You will not have all day to work on code!

Events (Subject to change!)
1 on 1s
Speaker on Thursday
Speeches Thursday (What would you change about the Internet? 2-4 min)
MVP Standup 4pm Friday -->