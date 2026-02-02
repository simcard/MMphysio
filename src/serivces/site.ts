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
