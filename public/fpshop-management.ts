// Interfaces for FP Shop Management System data
interface KoilInfo {
  id: number;
  districtName: string;
  noOfWsd: number;
  rec2018: number;
  rec2019: number;
  rec2020: number;
  rec2021: number;
  rec2022: number;
  total: number;
}

interface FpsStatus {
  id: number;
  userName: string;
  districtName: string;
  noOfFpshops: number;
  dataEntered: number;
  inchargeDataEntered: number;
  dataPending: number;
  percentage: string;
}

interface InsuranceInfo {
  id: number;
  districtName: string;
  noOfFpshops: number;
  insuranceDataEntered: number;
  deathDetailsEntered: number;
  totalDataEntered: number;
  dataPending: number;
  percentage: string;
}

// Dummy data – will be replaced by backend API
const koilData: KoilInfo[] = [
  { id: 1, districtName: 'HYDERABAD', noOfWsd: 125, rec2018: 120, rec2019: 118, rec2020: 115, rec2021: 112, rec2022: 110, total: 795 },
  { id: 2, districtName: 'MEDAK', noOfWsd: 89, rec2018: 85, rec2019: 82, rec2020: 80, rec2021: 78, rec2022: 75, total: 589 },
  { id: 3, districtName: 'RANGAREDDY', noOfWsd: 156, rec2018: 150, rec2019: 148, rec2020: 145, rec2021: 142, rec2022: 140, total: 1021 },
  { id: 4, districtName: 'MAHBUBNAGAR', noOfWsd: 98, rec2018: 95, rec2019: 92, rec2020: 90, rec2021: 88, rec2022: 85, total: 648 },
  { id: 5, districtName: 'NIZAMABAD', noOfWsd: 76, rec2018: 72, rec2019: 70, rec2020: 68, rec2021: 65, rec2022: 62, total: 473 },
  { id: 6, districtName: 'KARIMNAGAR', noOfWsd: 112, rec2018: 108, rec2019: 105, rec2020: 102, rec2021: 100, rec2022: 98, total: 725 },
  { id: 7, districtName: 'WARANGAL', noOfWsd: 85, rec2018: 82, rec2019: 80, rec2020: 78, rec2021: 75, rec2022: 72, total: 572 },
  { id: 8, districtName: 'KHAMMAM', noOfWsd: 93, rec2018: 90, rec2019: 88, rec2020: 85, rec2021: 82, rec2022: 80, total: 618 },
  { id: 9, districtName: 'ADILABAD', noOfWsd: 67, rec2018: 65, rec2019: 62, rec2020: 60, rec2021: 58, rec2022: 55, total: 467 },
  { id: 10, districtName: 'MANKATHA', noOfWsd: 54, rec2018: 52, rec2019: 50, rec2020: 48, rec2021: 45, rec2022: 42, total: 341 },
];

// Calculate totals for Koil data
const koilTotals = {
  noOfWsd: koilData.reduce((sum, item) => sum + item.noOfWsd, 0),
  rec2018: koilData.reduce((sum, item) => sum + item.rec2018, 0),
  rec2019: koilData.reduce((sum, item) => sum + item.rec2019, 0),
  rec2020: koilData.reduce((sum, item) => sum + item.rec2020, 0),
  rec2021: koilData.reduce((sum, item) => sum + item.rec2021, 0),
  rec2022: koilData.reduce((sum, item) => sum + item.rec2022, 0),
  total: koilData.reduce((sum, item) => sum + item.total, 0),
};

// Dummy data – will be replaced by backend API
const fpsStatusData: FpsStatus[] = [
  { id: 1, userName: 'mro1', districtName: 'HYDERABAD', noOfFpshops: 125, dataEntered: 120, inchargeDataEntered: 115, dataPending: 5, percentage: '96%' },
  { id: 2, userName: 'mro2', districtName: 'MEDAK', noOfFpshops: 89, dataEntered: 85, inchargeDataEntered: 80, dataPending: 4, percentage: '95%' },
  { id: 3, userName: 'mro3', districtName: 'RANGAREDDY', noOfFpshops: 156, dataEntered: 150, inchargeDataEntered: 145, dataPending: 6, percentage: '96%' },
  { id: 4, userName: 'mro4', districtName: 'MAHBUBNAGAR', noOfFpshops: 98, dataEntered: 95, inchargeDataEntered: 90, dataPending: 3, percentage: '97%' },
  { id: 5, userName: 'mro5', districtName: 'NIZAMABAD', noOfFpshops: 76, dataEntered: 72, inchargeDataEntered: 68, dataPending: 4, percentage: '95%' },
  { id: 6, userName: 'mro6', districtName: 'KARIMNAGAR', noOfFpshops: 112, dataEntered: 108, inchargeDataEntered: 105, dataPending: 4, percentage: '96%' },
  { id: 7, userName: 'mro7', districtName: 'WARANGAL', noOfFpshops: 85, dataEntered: 82, inchargeDataEntered: 78, dataPending: 3, percentage: '96%' },
  { id: 8, userName: 'mro8', districtName: 'KHAMMAM', noOfFpshops: 93, dataEntered: 90, inchargeDataEntered: 85, dataPending: 3, percentage: '97%' },
  { id: 9, userName: 'mro9', districtName: 'ADILABAD', noOfFpshops: 67, dataEntered: 65, inchargeDataEntered: 62, dataPending: 2, percentage: '97%' },
  { id: 10, userName: 'mro10', districtName: 'MANKATHA', noOfFpshops: 54, dataEntered: 52, inchargeDataEntered: 50, dataPending: 2, percentage: '96%' },
];

// Calculate totals for FPS status data
const fpsStatusTotals = {
  noOfFpshops: fpsStatusData.reduce((sum, item) => sum + item.noOfFpshops, 0),
  dataEntered: fpsStatusData.reduce((sum, item) => sum + item.dataEntered, 0),
  inchargeDataEntered: fpsStatusData.reduce((sum, item) => sum + item.inchargeDataEntered, 0),
  dataPending: fpsStatusData.reduce((sum, item) => sum + item.dataPending, 0),
  percentage: Math.round((fpsStatusData.reduce((sum, item) => sum + item.dataEntered, 0) / fpsStatusData.reduce((sum, item) => sum + item.noOfFpshops, 0)) * 100) + '%',
};

// Dummy data – will be replaced by backend API
const insuranceData: InsuranceInfo[] = [
  { id: 1, districtName: 'HYDERABAD', noOfFpshops: 125, insuranceDataEntered: 120, deathDetailsEntered: 5, totalDataEntered: 125, dataPending: 0, percentage: '100%' },
  { id: 2, districtName: 'MEDAK', noOfFpshops: 89, insuranceDataEntered: 85, deathDetailsEntered: 2, totalDataEntered: 87, dataPending: 2, percentage: '98%' },
  { id: 3, districtName: 'RANGAREDDY', noOfFpshops: 156, insuranceDataEntered: 150, deathDetailsEntered: 3, totalDataEntered: 153, dataPending: 3, percentage: '98%' },
  { id: 4, districtName: 'MAHBUBNAGAR', noOfFpshops: 98, insuranceDataEntered: 95, deathDetailsEntered: 1, totalDataEntered: 96, dataPending: 2, percentage: '98%' },
  { id: 5, districtName: 'NIZAMABAD', noOfFpshops: 76, insuranceDataEntered: 72, deathDetailsEntered: 2, totalDataEntered: 74, dataPending: 2, percentage: '97%' },
  { id: 6, districtName: 'KARIMNAGAR', noOfFpshops: 112, insuranceDataEntered: 108, deathDetailsEntered: 4, totalDataEntered: 112, dataPending: 0, percentage: '100%' },
  { id: 7, districtName: 'WARANGAL', noOfFpshops: 85, insuranceDataEntered: 82, deathDetailsEntered: 3, totalDataEntered: 85, dataPending: 0, percentage: '100%' },
  { id: 8, districtName: 'KHAMMAM', noOfFpshops: 93, insuranceDataEntered: 90, deathDetailsEntered: 2, totalDataEntered: 92, dataPending: 1, percentage: '99%' },
  { id: 9, districtName: 'ADILABAD', noOfFpshops: 67, insuranceDataEntered: 65, deathDetailsEntered: 1, totalDataEntered: 66, dataPending: 1, percentage: '99%' },
  { id: 10, districtName: 'MANKATHA', noOfFpshops: 54, insuranceDataEntered: 52, deathDetailsEntered: 1, totalDataEntered: 53, dataPending: 1, percentage: '98%' },
];

// Calculate totals for insurance data
const insuranceTotals = {
  noOfFpshops: insuranceData.reduce((sum, item) => sum + item.noOfFpshops, 0),
  insuranceDataEntered: insuranceData.reduce((sum, item) => sum + item.insuranceDataEntered, 0),
  deathDetailsEntered: insuranceData.reduce((sum, item) => sum + item.deathDetailsEntered, 0),
  totalDataEntered: insuranceData.reduce((sum, item) => sum + item.totalDataEntered, 0),
  dataPending: insuranceData.reduce((sum, item) => sum + item.dataPending, 0),
  percentage: Math.round((insuranceData.reduce((sum, item) => sum + item.totalDataEntered, 0) / insuranceData.reduce((sum, item) => sum + item.noOfFpshops, 0)) * 100) + '%',
};

// Function to render the page content dynamically
function renderPageContent(): void {
  // This function would typically be used to dynamically inject content into the HTML
  // However, since the HTML is already static, this serves as a placeholder
  console.log("FP Shop Management System page loaded with TypeScript interfaces");
}

// Execute when DOM is loaded
document.addEventListener('DOMContentLoaded', renderPageContent);