import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <>
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Your Courses</h1>
        <Link className={buttonVariants()} href="/admin/courses/create">Create Course</Link>
      </div>
      <div className="">
        <h1 className="">
        Here you will see all of your courses
        </h1>
      </div>
    </>
  );
}
