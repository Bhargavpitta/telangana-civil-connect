// Wrap everything in an IIFE to avoid global scope conflicts
(() => {
  // Interface for Vigilance Committee data
  interface CommitteeData {
    sno: number;
    userId: string;
    districtName: string;
    district: number | null;
    mandalLevel: number | null;
    gpLevel: number | null;
    fpShopLevel: number | null;
  }

// Define the Vigilance Committee Report data
const vigilanceReportData: CommitteeData[] = [
  { sno: 1, userId: 'dm1', districtName: 'HYDERABAD', district: 5, mandalLevel: 10, gpLevel: 8, fpShopLevel: 12 },
  { sno: 2, userId: 'dm2', districtName: 'MEDAK', district: 3, mandalLevel: 7, gpLevel: 5, fpShopLevel: 9 },
  { sno: 3, userId: 'dm3', districtName: 'RANGAREDDY', district: 6, mandalLevel: 12, gpLevel: 10, fpShopLevel: 15 },
  { sno: 4, userId: 'dm4', districtName: 'MAHBUBNAGAR', district: 4, mandalLevel: 8, gpLevel: 6, fpShopLevel: 11 },
  { sno: 5, userId: 'dm5', districtName: 'NIZAMABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 7 },
  { sno: 6, userId: 'dm6', districtName: 'KARIMNAGAR', district: 5, mandalLevel: 9, gpLevel: 7, fpShopLevel: 13 },
  { sno: 7, userId: 'dm7', districtName: 'WARANGAL', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 10 },
  { sno: 8, userId: 'dm8', districtName: 'KHAMMAM', district: 4, mandalLevel: 8, gpLevel: 6, fpShopLevel: 12 },
  { sno: 9, userId: 'dm9', districtName: 'ADILABAD', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 6 },
  { sno: 10, userId: 'dm10', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 11, userId: 'dm11', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 12, userId: 'dm12', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 13, userId: 'dm13', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 14, userId: 'dm14', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 15, userId: 'dm15', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 16, userId: 'dm16', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 17, userId: 'dm17', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 18, userId: 'dm18', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 19, userId: 'dm19', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 20, userId: 'dm20', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 21, userId: 'dm21', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 22, userId: 'dm22', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 23, userId: 'dm23', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 24, userId: 'dm24', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 25, userId: 'dm25', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 26, userId: 'dm26', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 27, userId: 'dm27', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 28, userId: 'dm28', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 29, userId: 'dm29', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 30, userId: 'dm30', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 31, userId: 'dm31', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 32, userId: 'dm32', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 33, userId: 'dm33', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
];

// Calculate totals for report data
let reportTotalDistrict = 0;
let reportTotalMandal = 0;
let reportTotalGP = 0;
let reportTotalFP = 0;

for (let i = 0; i < vigilanceReportData.length; i++) {
  const district = vigilanceReportData[i].district;
  const mandalLevel = vigilanceReportData[i].mandalLevel;
  const gpLevel = vigilanceReportData[i].gpLevel;
  const fpShopLevel = vigilanceReportData[i].fpShopLevel;
  
  if (district !== null) reportTotalDistrict += district;
  if (mandalLevel !== null) reportTotalMandal += mandalLevel;
  if (gpLevel !== null) reportTotalGP += gpLevel;
  if (fpShopLevel !== null) reportTotalFP += fpShopLevel;
}

const reportTotals = {
  district: reportTotalDistrict,
  mandalLevel: reportTotalMandal,
  gpLevel: reportTotalGP,
  fpShopLevel: reportTotalFP
};

// Define the Vigilance Committee Meeting data (continuing from 34)
const vigilanceMeetingData: CommitteeData[] = [
  { sno: 34, userId: 'dm34', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 35, userId: 'dm35', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 36, userId: 'dm36', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 37, userId: 'dm37', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 38, userId: 'dm38', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 39, userId: 'dm39', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 40, userId: 'dm40', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 41, userId: 'dm41', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 42, userId: 'dm42', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 43, userId: 'dm43', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 44, userId: 'dm44', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 45, userId: 'dm45', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 46, userId: 'dm46', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 47, userId: 'dm47', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 48, userId: 'dm48', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 49, userId: 'dm49', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 50, userId: 'dm50', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 51, userId: 'dm51', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 52, userId: 'dm52', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 53, userId: 'dm53', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 54, userId: 'dm54', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 55, userId: 'dm55', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 56, userId: 'dm56', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 57, userId: 'dm57', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 58, userId: 'dm58', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 59, userId: 'dm59', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 60, userId: 'dm60', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 61, userId: 'dm61', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
  { sno: 62, userId: 'dm62', districtName: 'NALA', district: 2, mandalLevel: 4, gpLevel: 3, fpShopLevel: 7 },
  { sno: 63, userId: 'dm63', districtName: 'KHAMMAM', district: 4, mandalLevel: 7, gpLevel: 6, fpShopLevel: 10 },
  { sno: 64, userId: 'dm64', districtName: 'ADILABAD', district: 2, mandalLevel: 5, gpLevel: 4, fpShopLevel: 8 },
  { sno: 65, userId: 'dm65', districtName: 'MANKATHA', district: 1, mandalLevel: 3, gpLevel: 2, fpShopLevel: 5 },
  { sno: 66, userId: 'dm66', districtName: 'NALGONDA', district: 3, mandalLevel: 6, gpLevel: 5, fpShopLevel: 9 },
];

// Calculate totals for meeting data
let meetingTotalDistrict = 0;
let meetingTotalMandal = 0;
let meetingTotalGP = 0;
let meetingTotalFP = 0;

for (let i = 0; i < vigilanceMeetingData.length; i++) {
  const district = vigilanceMeetingData[i].district;
  const mandalLevel = vigilanceMeetingData[i].mandalLevel;
  const gpLevel = vigilanceMeetingData[i].gpLevel;
  const fpShopLevel = vigilanceMeetingData[i].fpShopLevel;
  
  if (district !== null) meetingTotalDistrict += district;
  if (mandalLevel !== null) meetingTotalMandal += mandalLevel;
  if (gpLevel !== null) meetingTotalGP += gpLevel;
  if (fpShopLevel !== null) meetingTotalFP += fpShopLevel;
}

const meetingTotals = {
  district: meetingTotalDistrict,
  mandalLevel: meetingTotalMandal,
  gpLevel: meetingTotalGP,
  fpShopLevel: meetingTotalFP
};

// Function to render the report table rows
function renderReportTable(): void {
  const tableBody = document.getElementById('report-table-body');
  
  if (!tableBody) {
    console.error('Report table body not found');
    return;
  }

  // Clear existing content
  tableBody.innerHTML = '';

  // Add data rows
  for (let i = 0; i < vigilanceReportData.length; i++) {
    const data = vigilanceReportData[i];
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${data.sno}</td>
      <td>${data.userId}</td>
      <td class="uppercase">${data.districtName}</td>
      <td class="center">${data.district !== null ? data.district : ''}</td>
      <td class="center">${data.mandalLevel !== null ? data.mandalLevel : ''}</td>
      <td class="center">${data.gpLevel !== null ? data.gpLevel : ''}</td>
      <td class="center">${data.fpShopLevel !== null ? data.fpShopLevel : ''}</td>
    `;
    
    tableBody.appendChild(row);
  }

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.className = 'total-row';
  
  totalRow.innerHTML = `
    <td colspan="3"><strong>Grand Total</strong></td>
    <td class="center"><strong>${reportTotals.district}</strong></td>
    <td class="center"><strong>${reportTotals.mandalLevel}</strong></td>
    <td class="center"><strong>${reportTotals.gpLevel}</strong></td>
    <td class="center"><strong>${reportTotals.fpShopLevel}</strong></td>
  `;
  
  tableBody.appendChild(totalRow);
}

// Function to render the meeting table rows
function renderMeetingTable(): void {
  const tableBody = document.getElementById('meeting-table-body');
  
  if (!tableBody) {
    console.error('Meeting table body not found');
    return;
  }

  // Clear existing content
  tableBody.innerHTML = '';

  // Add data rows
  for (let i = 0; i < vigilanceMeetingData.length; i++) {
    const data = vigilanceMeetingData[i];
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${data.sno}</td>
      <td>${data.userId}</td>
      <td class="uppercase">${data.districtName}</td>
      <td class="center">${data.district !== null ? data.district : ''}</td>
      <td class="center">${data.mandalLevel !== null ? data.mandalLevel : ''}</td>
      <td class="center">${data.gpLevel !== null ? data.gpLevel : ''}</td>
      <td class="center">${data.fpShopLevel !== null ? data.fpShopLevel : ''}</td>
    `;
    
    tableBody.appendChild(row);
  }

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.className = 'total-row';
  
  totalRow.innerHTML = `
    <td colspan="3"><strong>Grand Total</strong></td>
    <td class="center"><strong>${meetingTotals.district}</strong></td>
    <td class="center"><strong>${meetingTotals.mandalLevel}</strong></td>
    <td class="center"><strong>${meetingTotals.gpLevel}</strong></td>
    <td class="center"><strong>${meetingTotals.fpShopLevel}</strong></td>
  `;
  
  tableBody.appendChild(totalRow);
}

// Handle form submission
function handleLoginSubmit(event: Event): void {
  event.preventDefault();
  
  const form = event.target as HTMLFormElement;
  const username = form.username.value;
  const password = form.password.value;
  
  const loginData = {
    username: username,
    password: password
  };
  
  console.log('Login attempt with:', loginData);
}

// Handle form reset
function handleFormReset(): void {
  console.log('Form cleared');
}

// Initialize the page
function initializePage(): void {
  // Render the tables when DOM is loaded
  renderReportTable();
  renderMeetingTable();
  
  // Set up form event listeners
  const loginForm = document.querySelector('.login-form') as HTMLFormElement;
  
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginSubmit);
    loginForm.addEventListener('reset', handleFormReset);
  }
  
  console.log('Vigilance Committee Management System initialized');
}

  // Execute when DOM is loaded
  document.addEventListener('DOMContentLoaded', initializePage);
})();