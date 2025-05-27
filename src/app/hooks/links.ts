const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://admin.kolkhisea.ge/api";

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

  saveContact: `${baseUrl}/save-contact`,

<<<<<<< Updated upstream
=======
  fetchGallery: `${baseUrl}/gallery`,
  pdfDownload: `${baseUrl}/pdf/download`,


>>>>>>> Stashed changes
};

export default requests;
