import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

type Trip = {
  destination: string;
  purpose: string;
  amount: string;
  amountPurpose: string;
  date: Date;
  status: "Pending" | "Approved" | "Reimbursed";
};

const statusColors = {
  Pending: "bg-warning text-warning-foreground",
  Approved: "bg-primary text-primary-foreground",
  Reimbursed: "bg-success text-success-foreground",
};

export const TripList = ({ trips }: { trips: Trip[] }) => {
  return (
    <div className="space-y-4">
      {trips.map((trip, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">{trip.destination}</CardTitle>
            <Badge className={statusColors[trip.status]}>{trip.status}</Badge>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="text-sm text-muted-foreground">{trip.purpose}</div>
              <div className="flex justify-between text-sm">
                <span>{format(new Date(trip.date), "PPP")}</span>
                <div className="text-right">
                  <div className="font-semibold">${trip.amount}</div>
                  <div className="text-xs text-muted-foreground">{trip.amountPurpose}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};