import { useEffect, useState } from "react";
import { PhysioHeader } from "@/components/layout/PhysioHeader";
import { PhysioFooter } from "@/components/layout/PhysioFooter";
import { usePhysioStore } from "@/store/physioStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { FullScreenLoader } from "@/components/ui/FullScreenLoader";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle,
  ArrowRight,
  Phone,
  Info,
} from "lucide-react";
import { format } from "date-fns";

const PhysioBooking = () => {
  const {
    availableSlots,
    locations,
    fetchLocations,
    fetchAvailabilityTimeSlots,
    bookAppointment,
    loading
  } = usePhysioStore();

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedTherapist, setSelectedTherapist] = useState<
    { name: string; calendarId?: string } | undefined
  >(undefined);

  const [selectedLocation, setSelectedLocation] = useState<string>("");

  useEffect(() => {
    if (locations.length > 0 && !selectedLocation) {
      setSelectedLocation(locations[0].id);
    }
  }, [locations, selectedLocation]);

  useEffect(() => {
    if (!selectedDate) return;

    const formatted = format(selectedDate, "yyyy-MM-dd");

    fetchAvailabilityTimeSlots(formatted, selectedLocation);
  }, [selectedDate, fetchAvailabilityTimeSlots, selectedLocation]);

  const [step, setStep] = useState(1);
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const { toast } = useToast();

  const filteredSlots = availableSlots.filter((slot) => slot.available);

  const handleBooking = async () => {
    if (
      !selectedSlot ||
      !patientInfo.name ||
      !patientInfo.email ||
      !patientInfo.phone
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    try {
      await bookAppointment({
        date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
        name: patientInfo.name,
        email: patientInfo.email,
        phone: patientInfo.phone,
        reason: patientInfo.reason ? patientInfo.reason : "N/A",
        calendarId: selectedTherapist?.calendarId,
        therapist: selectedTherapist?.name,
        location: `${locations.find((l) => l.id === selectedLocation)?.name}: address here: ${locations.find((l) => l.id === selectedLocation)?.address || ''}`,
        time: availableSlots.find((s) => s.id === selectedSlot)?.time,
      });
    } catch (err) {
      toast({
        title: "Booking Failed",
        description:
          "There was an error booking your appointment. Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Appointment Booked!",
      description: "You will receive a confirmation email shortly.",
    });

    // Reset form
    setStep(1);
    setSelectedDate(undefined);
    setSelectedSlot(null);
    setSelectedTherapist(undefined);
    setPatientInfo({ name: "", email: "", phone: "", reason: "" });
  };
  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const d = new Date(date);
    d.setHours(0, 0, 0, 0);

    return d < today;
  };

  return (
    <div className="min-h-screen">
      {loading && <FullScreenLoader />}
      <PhysioHeader />

      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl" />
          </div>
          <div className="container-physio relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
              Book an Appointment
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Schedule your physiotherapy session in just a few clicks.
            </p>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="section-padding bg-background">
          <div className="container-physio">
            {/* Progress Steps */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-between">
                {[
                  { num: 1, label: "Select Date & Time" },
                  { num: 2, label: "Your Details" },
                  { num: 3, label: "Confirmation" },
                ].map((s, idx) => (
                  <div key={s.num} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                        step >= s.num
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step > s.num ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        s.num
                      )}
                    </div>
                    <span
                      className={`ml-3 hidden md:block font-medium ${
                        step >= s.num
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                    {idx < 2 && (
                      <div
                        className={`hidden md:block w-24 h-0.5 mx-4 ${
                          step > s.num ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Step 1: Select Date & Time */}
              {step === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Location Selection */}
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Select Location
                    </h3>
                    <div className="space-y-3">
                      {locations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => setSelectedLocation(location.id)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            selectedLocation === location.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <p className="font-semibold">{location.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {location.address}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-heading text-xl font-bold mb-4">
                      Select Date
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) =>
                        isPastDate(date) || date.getDay() === 0
                      }
                      className="rounded-md border"
                    />
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border">
                      <h3 className="font-heading text-xl font-bold mb-4">
                        Available Times for{" "}
                        {format(selectedDate, "EEEE, MMMM d")}
                      </h3>
                      {filteredSlots.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {filteredSlots.map((slot) => (
                            <button
                              key={slot.id}
                              onClick={() => {
                                setSelectedSlot(slot.id);
                                setSelectedTherapist({
                                  name: slot.therapist,
                                  calendarId: slot.calendarId || undefined,
                                });
                              }}
                              className={`p-4 rounded-xl border-2 text-center transition-all ${
                                selectedSlot === slot.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                              <p className="font-semibold">{slot.time}</p>
                              {slot.therapist && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  {slot.therapist}
                                </p>
                              )}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-8">
                          No available slots for this date. Please select
                          another date.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Next Button */}
                  <div className="lg:col-span-2 flex justify-end">
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedSlot}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                    >
                      Continue <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Patient Details */}
              {step === 2 && (
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    Your Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={patientInfo.name}
                        onChange={(e) =>
                          setPatientInfo({
                            ...patientInfo,
                            name: e.target.value,
                          })
                        }
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={patientInfo.email}
                        onChange={(e) =>
                          setPatientInfo({
                            ...patientInfo,
                            email: e.target.value,
                          })
                        }
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+27 76 485 2291"
                        value={patientInfo.phone}
                        onChange={(e) =>
                          setPatientInfo({
                            ...patientInfo,
                            phone: e.target.value,
                          })
                        }
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Reason for Visit
                      </label>
                      <Input
                        placeholder="Brief description of your condition"
                        value={patientInfo.reason}
                        onChange={(e) =>
                          setPatientInfo({
                            ...patientInfo,
                            reason: e.target.value,
                          })
                        }
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="rounded-full px-8"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={
                        !patientInfo.name ||
                        !patientInfo.email ||
                        !patientInfo.phone
                      }
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                    >
                      Review Booking <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    Confirm Your Booking
                  </h3>

                  <div className="bg-muted/50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold mb-4">Appointment Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-5 h-5 text-primary" />
                        <span>
                          {selectedDate
                            ? format(selectedDate, "EEEE, MMMM d, yyyy")
                            : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>
                          {
                            availableSlots.find((s) => s.id === selectedSlot)
                              ?.time
                          }
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-primary" />
                        <span>
                          {selectedTherapist?.name || "Any Available Therapist"}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Info className="w-5 h-5 text-primary" />
                        <span>
                          {
                            locations.find((l) => l.id === selectedLocation)
                              ?.name
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold mb-4">Patient Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Name:</span>{" "}
                        {patientInfo.name}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email:</span>{" "}
                        {patientInfo.email}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Phone:</span>{" "}
                        {patientInfo.phone}
                      </div>
                      {patientInfo.reason && (
                        <div>
                          <span className="text-muted-foreground">Reason:</span>{" "}
                          {patientInfo.reason}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <Info className="w-4 h-4 inline mr-2 text-primary" />A
                      confirmation email will be sent to {patientInfo.email}{" "}
                      with your appointment details.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="rounded-full px-8"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleBooking}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-muted/50">
          <div className="container-physio text-center">
            <h2 className="section-title">Need Help Booking?</h2>
            <p className="section-subtitle mx-auto mb-8">
              Our friendly staff are ready to assist you with any questions.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
            >
              <a href="tel:+27764852291">
                <Phone className="w-4 h-4 mr-2" />
                Call Us: +27 76 485 2291
              </a>
            </Button>
          </div>
        </section>
      </main>

      <PhysioFooter />
    </div>
  );
};

export default PhysioBooking;
