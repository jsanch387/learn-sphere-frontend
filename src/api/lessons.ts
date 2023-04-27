import client from "./client";

export const fetchAllLessons = async () => {
  try {
    const response = await client.get("/lessons");
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error;
  }
};
