"use client";

import { useState } from "react";
import { CrossIcon } from "../icons/Cross";

// TODO: Match with the backend data structure
export interface CourseInterface {
  subject: string;
  courseNumber: string;
  alternateCourseNumber?: string;
  courseTitle: string;
}

function Course(
  props: CourseInterface & { onRemove: (course: CourseInterface) => void },
) {
  return (
    <div className="flex items-center space-x-3">
      <button
        className="mb-7 flex items-center justify-center rounded-md bg-bulldog-red p-1"
        onClick={() =>
          props.onRemove({
            subject: props.subject,
            courseNumber: props.courseNumber,
            alternateCourseNumber: props.alternateCourseNumber,
            courseTitle: props.courseTitle,
          })
        }
      >
        <CrossIcon />
      </button>
      <div className="min-w-0 space-y-0.5">
        <div className="flex items-center gap-2 text-lg font-bold">
          <span>{props.subject}</span>
          <span>{props.courseNumber}</span>
          {props.alternateCourseNumber && (
            <>
              <span>/</span>
              <span>{props.alternateCourseNumber}</span>
            </>
          )}
        </div>
        <p className="truncate">{props.courseTitle}</p>
      </div>
    </div>
  );
}

export function CoursesComponent() {
  // TODO: Fetch the courses from the API
  const [mockCourses, setMockCourses] = useState<CourseInterface[]>([
    {
      subject: "MATH",
      courseNumber: "3300",
      courseTitle: "Introduction to Linear Algebra",
    },
    {
      subject: "BIOL",
      courseNumber: "1107",
      alternateCourseNumber: "1107L",
      courseTitle: "Principles of Biology I",
    },
    {
      subject: "PHYS",
      courseNumber: "1211",
      alternateCourseNumber: "1211L",
      courseTitle: "Principles of Physics for Scientists and Engineers I",
    },
    {
      subject: "PSYC",
      courseNumber: "2101",
      courseTitle: "The Psychology of Adjustment",
    },
  ]);

  const removeCourse = (course: CourseInterface) =>
    setMockCourses((prev) =>
      prev.filter(
        (c) =>
          c.courseNumber !== course.courseNumber &&
          c.courseTitle !== course.courseTitle,
      ),
    );

  return (
    <div className="border-2 border-dusty-pink bg-white p-4">
      <div className="space-y-4">
        {mockCourses.map((course) => (
          <Course
            key={`${course.subject}-${course.courseNumber}`}
            onRemove={removeCourse}
            {...course}
          />
        ))}
      </div>
    </div>
  );
}
