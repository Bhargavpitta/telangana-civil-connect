// Gunny Reporting System - JavaScript Logic
// Dummy data – will be replaced with backend API response

// Define the GunnyReport data
const gunnyReports = [
  { districtCode: 'dm1', userName: 'dm1', districtName: 'HYDERABAD', noOfGodown: 12, dataIssuesEntered: 10, dataReceiptsEntered: 8, dataPending: 2 },
  { districtCode: 'dm2', userName: 'dm2', districtName: 'MEDAK', noOfGodown: 8, dataIssuesEntered: 7, dataReceiptsEntered: 6, dataPending: 1 },
  { districtCode: 'dm3', userName: 'dm3', districtName: 'RANGAREDDY', noOfGodown: 15, dataIssuesEntered: 14, dataReceiptsEntered: 12, dataPending: 2 },
  { districtCode: 'dm4', userName: 'dm4', districtName: 'MAHBUBNAGAR', noOfGodown: 9, dataIssuesEntered: 8, dataReceiptsEntered: 7, dataPending: 1 },
  { districtCode: 'dm5', userName: 'dm5', districtName: 'NIZAMABAD', noOfGodown: 7, dataIssuesEntered: 6, dataReceiptsEntered: 5, dataPending: 1 },
  { districtCode: 'dm6', userName: 'dm6', districtName: 'KARIMNAGAR', noOfGodown: 11, dataIssuesEntered: 10, dataReceiptsEntered: 9, dataPending: 1 },
  { districtCode: 'dm7', userName: 'dm7', districtName: 'WARANGAL', noOfGodown: 8, dataIssuesEntered: 7, dataReceiptsEntered: 6, dataPending: 1 },
  { districtCode: 'dm8', userName: 'dm8', districtName: 'KHAMMAM', noOfGodown: 10, dataIssuesEntered: 9, dataReceiptsEntered: 8, dataPending: 1 },
  { districtCode: 'dm9', userName: 'dm9', districtName: 'ADILABAD', noOfGodown: 6, dataIssuesEntered: 5, dataReceiptsEntered: 4, dataPending: 1 },
  { districtCode: 'dm10', userName: 'dm10', districtName: 'MANKATHA', noOfGodown: 5, dataIssuesEntered: 4, dataReceiptsEntered: 3, dataPending: 1 },
  { districtCode: 'dm11', userName: 'dm11', districtName: 'NALGONDA', noOfGodown: 9, dataIssuesEntered: 8, dataReceiptsEntered: 7, dataPending: 1 },
  { districtCode: 'dm12', userName: 'dm12', districtName: 'NALA', noOfGodown: 7, dataIssuesEntered: 6, dataReceiptsEntered: 5, dataPending: 1 },
];

// Calculate totals
let totalNoOfGodown = 0;
let totalDataIssuesEntered = 0;
let totalDataReceiptsEntered = 0;
let totalDataPending = 0;

for (let i = 0; i < gunnyReports.length; i++) {
  totalNoOfGodown += gunnyReports[i].noOfGodown;
  totalDataIssuesEntered += gunnyReports[i].dataIssuesEntered;
  totalDataReceiptsEntered += gunnyReports[i].dataReceiptsEntered;
  totalDataPending += gunnyReports[i].dataPending;
}

const totals = {
  noOfGodown: totalNoOfGodown,
  dataIssuesEntered: totalDataIssuesEntered,
  dataReceiptsEntered: totalDataReceiptsEntered,
  dataPending: totalDataPending,
};

// Function to render the table rows
function renderTableRows() {
  const tableBody = document.getElementById('gunny-table-body');
  
  if (!tableBody) {
    console.error('Table body not found');
    return;
  }

  // Clear existing content
  tableBody.innerHTML = '';

  // Add data rows
  for (let i = 0; i < gunnyReports.length; i++) {
    const report = gunnyReports[i];
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${report.districtCode}</td>
      <td>${report.userName}</td>
      <td class="uppercase">${report.districtName}</td>
      <td class="center">${report.noOfGodown}</td>
      <td class="center">${report.dataIssuesEntered}</td>
      <td class="center">${report.dataReceiptsEntered}</td>
      <td class="center red-background">${report.dataPending}</td>
    `;
    
    tableBody.appendChild(row);
  }

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.className = 'total-row';
  
  totalRow.innerHTML = `
    <td colspan="3"><strong>Total</strong></td>
    <td class="center"><strong>${totals.noOfGodown}</strong></td>
    <td class="center"><strong>${totals.dataIssuesEntered}</strong></td>
    <td class="center"><strong>${totals.dataReceiptsEntered}</strong></td>
    <td class="center red-background"><strong>${totals.dataPending}</strong></td>
  `;
  
  tableBody.appendChild(totalRow);
}

// Handle form submission
function handleLoginSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;
  
  const loginData = {
    username: username,
    password: password
  };
  
  console.log('Login attempt with:', loginData);
}

// Handle form reset
function handleFormReset() {
  console.log('Form cleared');
}

// Initialize the page
function initializePage() {
  // Render the table when DOM is loaded
  renderTableRows();
  
  // Set up form event listeners
  const loginForm = document.querySelector('.login-form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginSubmit);
    loginForm.addEventListener('reset', handleFormReset);
  }
  
  console.log('Gunny Reporting System initialized');
}

// Execute when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);