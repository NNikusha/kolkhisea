import requests from "./links";
import axios from "axios";

export const fetchBuildings = async () => {
  try {
    const response = await axios.get(requests.fetchBuildings);
    return response.data;
  } catch (error) {
    console.error("Error fetching buildings:", error);
    throw error;
  }
};

export const fetchBuildingDetails = async (id: number | string) => {
  try {
    const response = await axios.get(requests.fetchBuildingDetails(id));
    return response.data;
  } catch (error) {
    console.error("Error fetching building details:", error);
    throw error;
  }
};

export const fetchFlats = async (filters = {}) => {
  try {
    const query = new URLSearchParams(
      filters as Record<string, string>
    ).toString();
    const url = query ? `${requests.fetchFlats}?${query}` : requests.fetchFlats;

    console.log("Fetching flats from URL:", url);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching flats:", error);
    throw error;
  }
};

export const fetchFlatDetails = async (id: number | string) => {
  try {
    const response = await axios.get(requests.fetchFlatDetails(id));
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for flat ${id}:`, error);
    throw error;
  }
};

export const fetchFlatById = async (id: number | string) => {
  try {
    console.log(`Fetching flat data for ID: ${id}`);
    const response = await axios.get(requests.fetchFlatDetails(id));
    return response.data;
  } catch (error) {
    console.error(`Error fetching flat with ID ${id}:`, error);
    throw error;
  }
};

export const fetchSectors = async () => {
  try {
    const response = await axios.get(requests.fetchSectors);
    return response.data;
  } catch (error) {
    console.error("Error fetching sectors:", error);
    throw error;
  }
};

export const fetchSectorDetails = async (id: number | string) => {
  try {
    const response = await axios.get(requests.fetchSectorDetails(id));
    return response.data;
  } catch (error) {
    console.error("Error fetching sector details:", error);
    throw error;
  }
};

export const fetchAboutUs = async () => {
  try {
    const response = await axios.get(requests.fetchAboutUs);
    return response.data;
  } catch (error) {
    console.error("Error fetching about us data:", error);
    return null;
  }
};

export const fetchMain = async () => {
  try {
    const response = await axios.get(requests.fetchMain);
    return response.data;
  } catch (error) {
    console.error("Error fetching main page data:", error);
    throw error;
  }
};

export const fetchProjectAbout = async () => {
  try {
    const response = await axios.get(requests.fetchProjectAbout);
    return response.data;
  } catch (error) {
    console.error("Error fetching project about data:", error);
    throw error;
  }
};

export const fetchFloorPlans = async (floor?: number) => {
  try {
    let url = requests.fetchFloorPlans;

    if (floor !== undefined) {
      url = `${url}?floor=${floor}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching floor plans:", error);
    throw error;
  }
};

export const fetchFloorPlanDetails = async (id: number | string) => {
  try {
    const response = await axios.get(requests.fetchFloorPlanDetails(id));
    return response.data;
  } catch (error) {
    console.error("Error fetching floor plan details:", error);
    throw error;
  }
};

export const fetchApartmentTypes = async () => {
  try {
    const response = await axios.get(requests.fetchApartmentTypes);
    return response.data;
  } catch (error) {
    console.error("Error fetching apartment types:", error);
    throw error;
  }
};

export const fetchApartmentTypeDetails = async (id: number | string) => {
  try {
    const response = await axios.get(requests.fetchApartmentTypeDetails(id));
    return response.data;
  } catch (error) {
    console.error("Error fetching apartment type details:", error);
    throw error;
  }
};

export const saveContact = async (contactData: {
  name: string;
  phone_number: string;
}) => {
  try {
    const response = await axios.post("/api/save-contact", contactData);
    return response.data;
  } catch (error) {
    console.error("Error saving contact information:", error);
    throw error;
  }
};

export const fetchGallery = async () => {
  try {
    const response = await axios.get(requests.fetchGallery);
    return response.data;
  } catch (error) {
    console.error("Error fetching Gallery", error);
    throw error;
  }
};

export const downloadPdf = async (flatId: number | string) => {
  try {
    const response = await axios.post(requests.pdfDownload, {
      flat_id: flatId,
    });
    return response.data;
  } catch (error) {
    console.error("Error downloading PDF:", error);
    throw error;
  }
};

export const fetchContactPage = async () => {
  try {
    const response = await axios.get(requests.fetchContactPage);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact page data:", error);
    throw error;
  }
};

export const fetchFlatDetailCards = async () => {
  try {
    const response = await axios.get(requests.fetchFlatDetailCards);
    console.log("flat detail card response: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching flat detail cards", error);
    throw error;
  }
};
