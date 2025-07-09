import UsersChart from "@/components/charts/UsersChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid wide py-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="pl-[30px] text-xl">
              Số lượng người dùng
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <UsersChart />
          </CardContent>
        </Card>
        {/* 
        <Card>
          <CardHeader>
            <CardTitle>Số lượng ảnh</CardTitle>
          </CardHeader>
          <CardContent>
            <ImagesChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Phản hồi người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            <FeedbackPieChart />
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
