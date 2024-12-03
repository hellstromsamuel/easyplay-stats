import { ICollectionStat } from "@/shared/interfaces/ICollectionStat";

export async function getStatsFromApi(): Promise<ICollectionStat[]> {
  const baseUrl = process.env.EASYPLAY_API_BASE_URL;
  const authToken = process.env.EASYPLAY_API_AUTH_TOKEN;

  try {
    if (!baseUrl || !authToken) {
      throw new Error("Missing API base URL or authentication token");
    }

    const response = await fetch(baseUrl + "/stats", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      switch (response.status) {
        case 401:
          throw new Error("Unauthorized: Invalid or expired token");
        case 500:
          throw new Error("Internal server error");
        default:
          throw new Error(`Error. Status: ${response.status}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error("Stats fetch error:", error);
    return [];
  }
}
