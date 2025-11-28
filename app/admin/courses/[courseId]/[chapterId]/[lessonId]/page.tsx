import { adminGetLesson } from "@/app/data/admin/admin-get-lesson";
import { LessonForm } from "./_components/lesson-form";

// Force this page to be fully dynamic (no static pre-render)
export const dynamic = "force-dynamic";

// Define the route parameters
type LessonPageParams = {
  courseId: string;
  chapterId: string;
  lessonId: string;
};

// Page component
export default async function LessonIdPage({
  params,
}: {
  params: LessonPageParams;
}) {
  const { courseId, chapterId, lessonId } = params;

  // Fetch lesson data from your admin API
  const lesson = await adminGetLesson(lessonId);

  return <LessonForm data={lesson} chapterId={chapterId} courseId={courseId} />;
}

// Placeholder for generateStaticParams to satisfy TypeScript in nested dynamic routes
export async function generateStaticParams(): Promise<LessonPageParams[]> {
  return [];
}
