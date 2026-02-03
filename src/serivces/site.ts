import getApi from "@/api/client";

export const getLocations = async () => {
  try {
    const api = getApi();
    const res = await api.get("/api/locations");
    return res.data;
  } catch (err) {
    console.error("Error fetching locations:", err);
    throw err; 
  }
};

export const getServices = async () => {
  try {
    const api = getApi();
    const res = await api.get("/api/services");
    return res.data;
  } catch (err) {
    console.error("Error fetching services:", err);
    throw err; 
  }
};

export const getTeam = async () => {
  try {
    const api = getApi();
    const res = await api.get("/api/team");
    return res.data;
  } catch (err) {
    console.error("Error fetching team:", err);
    throw err; 
  }
};