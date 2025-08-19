import { adminGetCourse } from "@/app/data/admin/admin-get-course";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EditCourseForm } from "./_components/edit-course-form";

type Params = Promise<{
  courseId: string;
}>;

export default async function CourseEditPage({ params }: { params: Params }) {
  const { courseId } = await params;
  const data = await adminGetCourse(courseId);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-8">
        Edit Course:
        <span className="text-primary underline">{data.title}</span>
      </h1>
      <Tabs defaultValue="basic-info" className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
          <TabsTrigger value="course-structure">Course Structure</TabsTrigger>
        </TabsList>
        <TabsContent value="basic-info">
          <Card>
            <CardHeader>
              <CardTitle>Basic Info</CardTitle>
              <CardDescription>
                Edit basic information about the course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EditCourseForm data={data} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
