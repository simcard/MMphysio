import { getLocations, getServices, getTeam } from "@/serivces/site";
import { create } from "zustand";
import { Location } from "../model/site";
import { bookAppointment, getAvailabilityTimeSlot } from "@/serivces/calander";  
import { BookAppointment } from "@/model/calendar";
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  qualifications: string[];
  specializations: string[];
}
export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  therapist?: string;
  calendarId?: string;
}

interface PhysioState {
  services: Service[];
  team: TeamMember[];
  locations: Location[];
  fetchLocations: () => Promise<void>;
  fetchAvailabilityTimeSlots: (date: string, locationId: string) => Promise<void>;
  availableSlots: TimeSlot[];
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  bookAppointment: (appointment: BookAppointment) => Promise<void>;
  fetchServices: () => Promise<void>;
  fetchTeam: () => Promise<void>;
  loading: boolean
}

export const usePhysioStore = create<PhysioState>((set) => ({
  loading: false,
  error: null,
  locations: [],
  availableSlots: [],
  services: [],
  team: [],
  fetchLocations: async () => {
    try {
      set({ loading: true });
      const response = await getLocations();
      set({ locations: response, loading: false });
    } catch (err) {
      console.log("Failed to fetch locations", err);
      set({ loading: false });
    }
  },
  fetchAvailabilityTimeSlots: async (date: string, locationId: string) => {
    try {
      if (!date || !locationId) return;
    set({ loading: true });
      const response = await getAvailabilityTimeSlot(date, locationId);
      set({ availableSlots: response, loading: false });
    } catch (err) {
      console.log("Failed to fetch availability time slots", err);
      set({ loading: false });
    }
  },

  bookAppointment: async (appointment: BookAppointment) => {
    try {
      set({ loading: true });
      await bookAppointment(appointment)
      set({ loading: false });
    } catch (err) {
      console.log("Failed to book appointment", err);
      set({ loading: false });
    }
  },
  fetchServices: async () => {
    try {
      set({ loading: true });
      const response = await getServices();
      set({ services: response, loading: false });
    } catch (err) {
      console.log("Failed to fetch services", err);
      set({ loading: false });
    }
  },
  fetchTeam: async () => {
    try {
      set({ loading: true });
      const response = await getTeam();   
      set({ team: response, loading: false });
    } catch (err) {
      console.log("Failed to fetch team", err);
      set({ loading: false });  
    }
  },
  selectedDate: null,
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
