
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

const requests = {
  fetchBuildings: `${baseUrl}/buildings`,
  fetchBuildingDetails: (id: number | string) => `${baseUrl}/buildings/${id}`,
  
  fetchFlats: `${baseUrl}/flats`,
  fetchFlatDetails: (id: number | string) => `${baseUrl}/flats/${id}`,
  
  fetchSectors: `${baseUrl}/sectors`,
  fetchSectorDetails: (id: number | string) => `${baseUrl}/sectors/${id}`,
  
  fetchAboutUs: `${baseUrl}/about-us`,
  
  fetchMain: `${baseUrl}/main`,
  
  fetchProjectAbout: `${baseUrl}/project-about`,
  
  fetchFloorPlans: `${baseUrl}/floor-plans`,
  fetchFloorPlanDetails: (id: number | string) => `${baseUrl}/floor-plans/${id}`,
  
  fetchApartmentTypes: `${baseUrl}/apartment-types`,
  fetchApartmentTypeDetails: (id: number | string) => `${baseUrl}/apartment-types/${id}`,
};

export default requests;