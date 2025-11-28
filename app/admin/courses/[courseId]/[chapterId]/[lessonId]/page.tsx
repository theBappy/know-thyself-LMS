import { adminGetLesson } from "@/app/data/admin/admin-get-lesson";
import { LessonForm } from "./_components/lesson-form";

export default async function LessonIdPage({
  params,
}: {
  params: {
    courseId: string;
    chapterId: string;
    lessonId: string;
  };
}) {
  const { courseId, chapterId, lessonId } = params as any;
  const lesson = await adminGetLesson(lessonId);

  return <LessonForm data={lesson} chapterId={chapterId} courseId={courseId} />;
}
