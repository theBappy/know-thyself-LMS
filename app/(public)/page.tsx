

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


import {
  Users,
  BookOpen,
  MonitorPlay,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface featureProps {
  title: string;
  description: string;
  icon: any;
}

const features: featureProps[] = [
  {
    title: "Comprehensive Courses",
    description:
      "Access a wide range of carefully curated courses designed by industry experts.",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
    icon: <MonitorPlay className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
    icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
    icon: <Users className="w-8 h-8 text-orange-500" />,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">
            The Future lies knowing yourself first then learn
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate Your Learning Experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover a new way to learn with modern, interactive learning
            management system. Access high-quality courses anytime, anywhere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/courses"
            >
              Explore courses
            </Link>
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-4xl mb-4">{feature.icon}</CardHeader>
            <CardTitle className="ml-4">{feature.title}</CardTitle>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}

