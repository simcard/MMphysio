
import getApi from "@/api/client";
import { BookAppointment } from "@/model/calendar";

export const getAvailabilityTimeSlot = async (date: string, locationId: string) => {
  try {
    const api = getApi();
    const res = await api.get(`/api/availability?date=${date}&locationId=${locationId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching availability:", err);
    throw err; 
  }
};

export const bookAppointment = async (appointment: BookAppointment) => {
  try {
    const api = getApi();
    const res = await api.post(`api/book`, appointment);
    return res.data;
  } catch (err) {
    console.error("Error booking appointment:", err);
    throw err; 
  }
};