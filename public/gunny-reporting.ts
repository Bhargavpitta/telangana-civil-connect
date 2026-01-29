// Interface for Gunny Reporting data
interface GunnyReport {
  districtCode: string;
  userName: string;
  districtName: string;
  noOfGodown: number;
  dataIssuesEntered: number;
  dataReceiptsEntered: number;
  dataPending: number;
}

namespace GunnyReporting {
  // Define the GunnyReport interface
  const gunnyReports: GunnyReport[] = [
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
  const totals = {
    noOfGodown: gunnyReports.reduce((sum, report) => sum + report.noOfGodown, 0),
    dataIssuesEntered: gunnyReports.reduce((sum, report) => sum + report.dataIssuesEntered, 0),
    dataReceiptsEntered: gunnyReports.reduce((sum, report) => sum + report.dataReceiptsEntered, 0),
    dataPending: gunnyReports.reduce((sum, report) => sum + report.dataPending, 0),
  };

  // Function to render the table rows
  function renderTableRows(): void {
    const tableBody = document.getElementById('gunny-table-body');
    
    if (!tableBody) {
      console.error('Table body not found');
      return;
    }

    // Clear existing content
    tableBody.innerHTML = '';

    // Add data rows
    gunnyReports.forEach(report => {
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
    });

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
  function handleLoginSubmit(event: Event): void {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const loginData = {
      username: formData.get('username') as string,
      password: formData.get('password') as string
    };
    
    console.log('Login attempt with:', loginData);
  }

  // Handle form reset
  function handleFormReset(): void {
    console.log('Form cleared');
  }

  // Initialize the page
  function initializePage(): void {
    // Render the table when DOM is loaded
    renderTableRows();
    
    // Set up form event listeners
    const loginForm = document.querySelector('.login-form') as HTMLFormElement;
    
    if (loginForm) {
      loginForm.addEventListener('submit', handleLoginSubmit);
      loginForm.addEventListener('reset', handleFormReset);
    }
    
    console.log('Gunny Reporting System initialized');
    console.log('// Dummy data – will be replaced with backend API response');
  }

  // Execute when DOM is loaded
  document.addEventListener('DOMContentLoaded', initializePage);
}