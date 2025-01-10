import { useState } from "react";
import { TripForm } from "@/components/TripForm";
import { TripList } from "@/components/TripList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [trips, setTrips] = useState<any[]>([]);

  const handleSubmitTrip = (tripData: any) => {
    setTrips([tripData, ...trips]);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Company Trip Manager</h1>
        
        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="submit">Submit Trip</TabsTrigger>
            <TabsTrigger value="list">My Trips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="submit" className="mt-6">
            <div className="max-w-xl mx-auto">
              <TripForm onSubmit={handleSubmitTrip} />
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-6">
            {trips.length === 0 ? (
              <div className="text-center text-muted-foreground">
                No trips submitted yet
              </div>
            ) : (
              <TripList trips={trips} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;