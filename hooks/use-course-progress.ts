"use client"

import { useMemo } from "react";
import { CourseSidebarDataType } from "@/app/data/course/get-course-sidebar-data";

interface Props {
  courseData: CourseSidebarDataType["course"];
}

interface ProgressProps {
  totalLessons: number;
  completedLessons: number;
  progressPercentage: number;
}

export function useCourseProgress({ courseData }: Props): ProgressProps {

  return useMemo(() => {
    let totalLessons = 0;
    let completedLessons = 0;

    courseData.chapter.forEach((chapter) => {
      chapter.lessons.forEach((lesson) => {
        totalLessons++;

        // check if this lesson is completed
        const isCompleted = lesson.lessonProgress.some(
          (progress) => progress.lessonId === lesson.id && progress.completed
        );
        if (isCompleted) {
          completedLessons++;
        }
      });
    });

    const progressPercentage =
      totalLessons > 0
        ? Math.round((completedLessons / totalLessons) * 100)
        : 0;

    return {
      totalLessons,
      completedLessons,
      progressPercentage,
    };
  }, [courseData]);
}
