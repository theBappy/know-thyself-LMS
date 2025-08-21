import { adminGetLesson } from "@/app/data/admin/admin-get-lesson";
import { LessonForm } from "./_components/lesson-form";

type Params = {
  courseId: string;
  chapterId: string;
  lessonId: string;
};

export default async function LessonIdPage({ params }: { params: Params }) {
  const { chapterId, lessonId, courseId } = params; 
  const lesson = await adminGetLesson(lessonId);

  return (
    <LessonForm data={lesson} chapterId={chapterId} courseId={courseId} />
  );
}
