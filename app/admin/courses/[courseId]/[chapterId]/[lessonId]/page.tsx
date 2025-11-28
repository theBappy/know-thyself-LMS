import { adminGetLesson } from "@/app/data/admin/admin-get-lesson";
import { LessonForm } from "./_components/lesson-form";

export const dynamic = "force-dynamic";

export default async function LessonIdPage({ params }: any) {
  const { courseId, chapterId, lessonId } = params;

  const lesson = await adminGetLesson(lessonId);

  return <LessonForm data={lesson} chapterId={chapterId} courseId={courseId} />;
}

export async function generateStaticParams() {
  return [];
}
