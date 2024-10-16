import { AddCourses } from "@/components/courses/AddCourses";
import { CoursesComponent } from "@/components/courses/Courses";
import { Filters } from "@/components/courses/Filters";

export default function Courses() {
  return (
    <section id="courses" className="m-auto w-[70%]">
      <div className="flex flex-col justify-between gap-12">
        <div className="grid h-full grid-cols-3 gap-12">
          <div className="col-span-3 space-y-3 lg:col-span-2">
            <h2 className="text-3xl font-bold">Add Courses</h2>
            <AddCourses />
          </div>
          <div className="col-span-3 space-y-3 lg:col-span-1">
            <h2 className="text-3xl font-bold">Courses</h2>
            <CoursesComponent />
          </div>
        </div>
        <div className="w-full">
          <Filters />
        </div>
      </div>
    </section>
  );
}
