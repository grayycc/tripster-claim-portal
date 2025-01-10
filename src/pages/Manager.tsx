import { useState } from "react";
import { TripList } from "@/components/TripList";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Manager = () => {
  const [trips, setTrips] = useState<any[]>([
    {
      destination: "San Francisco",
      purpose: "Client Meeting",
      amount: "500",
      amountPurpose: "Flight tickets and accommodation",
      date: new Date(),
      status: "Pending",
      staffName: "John Doe"
    },
    {
      destination: "New York",
      purpose: "Conference",
      amount: "800",
      amountPurpose: "Conference tickets and hotel",
      date: new Date(),
      status: "Pending",
      staffName: "Jane Smith"
    }
  ]);
  const { toast } = useToast();

  const handleApprove = (tripIndex: number) => {
    setTrips(currentTrips => {
      const updatedTrips = [...currentTrips];
      updatedTrips[tripIndex] = {
        ...updatedTrips[tripIndex],
        status: "Approved"
      };
      return updatedTrips;
    });

    toast({
      title: "Trip approved",
      description: "The reimbursement request has been approved.",
    });
  };

  const handleReimburse = (tripIndex: number) => {
    setTrips(currentTrips => {
      const updatedTrips = [...currentTrips];
      updatedTrips[tripIndex] = {
        ...updatedTrips[tripIndex],
        status: "Reimbursed"
      };
      return updatedTrips;
    });

    toast({
      title: "Trip reimbursed",
      description: "The reimbursement has been processed.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Manager Dashboard</h1>
        <div className="space-y-6">
          {trips.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No pending trips to review
            </div>
          ) : (
            <div className="space-y-4">
              {trips.map((trip, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <TripList trips={[trip]} />
                  <div className="flex justify-end space-x-4">
                    {trip.status === "Pending" && (
                      <Button 
                        onClick={() => handleApprove(index)}
                        className="bg-primary text-primary-foreground"
                      >
                        Approve
                      </Button>
                    )}
                    {trip.status === "Approved" && (
                      <Button 
                        onClick={() => handleReimburse(index)}
                        className="bg-success text-success-foreground"
                      >
                        Process Reimbursement
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;