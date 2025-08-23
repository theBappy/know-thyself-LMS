import {
  IconBook,
  IconPlaylistX,
  IconShoppingCart,
  IconTrendingDown,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { adminGetDashboardStat } from "@/app/data/admin/admin-get-dashboard-stat";

export async function SectionCards() {
  const { totalSignups, totalCustomers, totalCourses, totalLessons } =
    await adminGetDashboardStat();

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Signups</CardDescription>
          <div className="flex flex-row items-center justify-start space-y-0 space-x-2  pb-2">
            <IconUsers className="size-6 text-muted-foreground" />
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {totalSignups}
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Registered users on the platform{" "}
            <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 3 months
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Customers</CardDescription>

          <div className="flex flex-row items-center justify-start space-y-0 space-x-2  pb-2">
            <IconShoppingCart className="size-6 text-muted-foreground" />
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {totalCustomers}
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 4% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Users who have enrolled in courses
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Courses</CardDescription>
          <div className="flex flex-row items-center justify-start space-y-0 space-x-2  pb-2">
            <IconBook className="size-6 text-muted-foreground" />
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {totalCourses}
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +3.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Course Reviews <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Available courses</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Lessons</CardDescription>
          <div className="flex flex-row items-center justify-start space-y-0 space-x-2  pb-2">
            <IconPlaylistX className="size-6 text-muted-foreground" />
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {totalLessons}
            </CardTitle>
          </div>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Lessons quality increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Total learning content available
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
