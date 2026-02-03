import { getLocations } from "@/serivces/site";
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
}

export const usePhysioStore = create<PhysioState>((set) => ({
  loading: false,
  error: null,
  locations: [],
  availableSlots: [],
  services: [
    {
      id: "1",
      title: "Sports Injury Rehabilitation",
      description:
        "Expert treatment for sports-related injuries to get you back in the game faster.",
      icon: "activity",
      details: [
        "Muscle strains and tears",
        "Ligament injuries",
        "Tennis/golfer elbow",
        "Running injuries",
        "Return to sport programs",
      ],
    },
    {
      id: "2",
      title: "Post-Surgery Recovery",
      description:
        "Comprehensive rehabilitation programs following surgical procedures.",
      icon: "heart-pulse",
      details: [
        "Joint replacement rehab",
        "ACL reconstruction",
        "Spinal surgery recovery",
        "Rotator cuff repair",
        "Fracture rehabilitation",
      ],
    },
    {
      id: "3",
      title: "Pain Management",
      description:
        "Effective techniques to manage and reduce chronic and acute pain.",
      icon: "shield-check",
      details: [
        "Back and neck pain",
        "Chronic pain conditions",
        "Headaches and migraines",
        "Arthritis management",
        "Nerve pain treatment",
      ],
    },
    {
      id: "4",
      title: "Manual Therapy",
      description:
        "Hands-on treatment techniques to improve mobility and function.",
      icon: "hand",
      details: [
        "Joint mobilization",
        "Soft tissue massage",
        "Trigger point therapy",
        "Myofascial release",
        "Spinal manipulation",
      ],
    },
    {
      id: "5",
      title: "Dry Needling",
      description: "Targeted treatment for muscle knots and trigger points.",
      icon: "target",
      details: [
        "Trigger point release",
        "Muscle tension relief",
        "Pain reduction",
        "Improved range of motion",
        "Faster recovery",
      ],
    },
    {
      id: "6",
      title: "Exercise Prescription",
      description:
        "Personalized exercise programs for rehabilitation and prevention.",
      icon: "dumbbell",
      details: [
        "Strength training",
        "Flexibility programs",
        "Core stability",
        "Balance exercises",
        "Home exercise programs",
      ],
    },
  ],
  team: [
    {
      id: "1",
      name: "Dr. Michelle Meyer",
      role: "Principal Physiotherapist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
      bio: "Michelle is the founder of MM Physio with over 15 years of experience in musculoskeletal physiotherapy. She is passionate about helping patients achieve their optimal physical health.",
      qualifications: [
        "BSc Physiotherapy",
        "MSc Sports Physiotherapy",
        "Certified Dry Needling Practitioner",
      ],
      specializations: [
        "Sports Injuries",
        "Spinal Rehabilitation",
        "Post-surgical Rehab",
      ],
    },
    {
      id: "2",
      name: "James Anderson",
      role: "Senior Physiotherapist",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
      bio: "James specializes in sports physiotherapy and has worked with professional athletes across various disciplines. He brings a wealth of experience in injury prevention and performance optimization.",
      qualifications: [
        "BSc Physiotherapy",
        "Sports Physiotherapy Certification",
        "Strength & Conditioning Specialist",
      ],
      specializations: [
        "Sports Performance",
        "Running Injuries",
        "Athletic Rehabilitation",
      ],
    },
    {
      id: "3",
      name: "Sarah Thompson",
      role: "Physiotherapist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
      bio: "Sarah has a special interest in women's health and chronic pain management. She takes a holistic approach to treatment, addressing both physical and lifestyle factors.",
      qualifications: [
        "BSc Physiotherapy",
        "Pilates Instructor Certification",
        "Chronic Pain Management",
      ],
      specializations: [
        "Women's Health",
        "Chronic Pain",
        "Pilates-based Rehab",
      ],
    },
    {
      id: "4",
      name: "David Chen",
      role: "Physiotherapist",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
      bio: "David brings expertise in manual therapy and dry needling. He is dedicated to providing evidence-based treatments tailored to each patient's unique needs.",
      qualifications: [
        "BSc Physiotherapy",
        "Advanced Dry Needling",
        "Manual Therapy Certification",
      ],
      specializations: ["Manual Therapy", "Dry Needling", "Neck & Back Pain"],
    },
  ],

  fetchLocations: async () => {
    try {
      const response = await getLocations();
      set({ locations: response});
    } catch (err) {
      console.log("Failed to fetch locations", err);
    }
  },
  fetchAvailabilityTimeSlots: async (date: string, locationId: string) => {
    try {
      if (!date || !locationId) return;
  
      const response = await getAvailabilityTimeSlot(date, locationId);
      set({ availableSlots: response });
    } catch (err) {
      console.log("Failed to fetch availability time slots", err);
    }
  },
  bookAppointment: async (appointment: BookAppointment) => {
    // Placeholder for booking appointment logic
    try {
      await bookAppointment(appointment)
    } catch (err) {
      console.log("Failed to book appointment", err);
    }
  },

  selectedDate: null,
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
