import React from 'react';
import '../styles/section6a.css';

interface DashboardData {
  sno: number;
  userName: string;
  districtName: string;
  dataSubmitStatus: string;
}

const Section6A: React.FC = () => {
  const dashboardData: DashboardData[] = [
    { sno: 1, userName: 'dcso1', districtName: 'Adilabad', dataSubmitStatus: '' },
    { sno: 2, userName: 'dcso2', districtName: 'Bhadrri Kothagudem', dataSubmitStatus: '' },
    { sno: 3, userName: 'dcso3', districtName: 'Hyderabad', dataSubmitStatus: '' },
    { sno: 4, userName: 'dcso4', districtName: 'Jagityal', dataSubmitStatus: '' },
    { sno: 5, userName: 'dcso5', districtName: 'Janagaon', dataSubmitStatus: '' },
    { sno: 6, userName: 'dcso6', districtName: 'Jayashankar Bhupalpalli', dataSubmitStatus: '' },
    { sno: 7, userName: 'dcso7', districtName: 'Jogulamba Gadwal', dataSubmitStatus: '' },
    { sno: 8, userName: 'dcso8', districtName: 'Kamareddy', dataSubmitStatus: '' },
    { sno: 9, userName: 'dcso9', districtName: 'Karimnagar', dataSubmitStatus: '' },
    { sno: 10, userName: 'dcso10', districtName: 'Khammam', dataSubmitStatus: '' },
    { sno: 11, userName: 'dcso11', districtName: 'Kumarambheem Asifabad', dataSubmitStatus: '' },
    { sno: 12, userName: 'dcso12', districtName: 'Mahabubabad', dataSubmitStatus: '' },
    { sno: 13, userName: 'dcso13', districtName: 'Mahbubnagar', dataSubmitStatus: '' },
    { sno: 14, userName: 'dcso14', districtName: 'Manchiriyala', dataSubmitStatus: '' },
    { sno: 15, userName: 'dcso15', districtName: 'Medak', dataSubmitStatus: '' },
    { sno: 16, userName: 'dcso16', districtName: 'Medchal', dataSubmitStatus: '' },
    { sno: 17, userName: 'dcso17', districtName: 'Mulugu', dataSubmitStatus: '' },
    { sno: 18, userName: 'dcso18', districtName: 'Nagarkarnool', dataSubmitStatus: '' },
    { sno: 19, userName: 'dcso19', districtName: 'Nalgonda', dataSubmitStatus: '' },
    { sno: 20, userName: 'dcso20', districtName: 'Narayanpet', dataSubmitStatus: '' },
    { sno: 21, userName: 'dcso21', districtName: 'Nirmal', dataSubmitStatus: '' },
    { sno: 22, userName: 'dcso22', districtName: 'Nizamabad', dataSubmitStatus: '' },
    { sno: 23, userName: 'dcso23', districtName: 'Peddapalli', dataSubmitStatus: '' },
    { sno: 24, userName: 'dcso24', districtName: 'Rajanna Siricilla', dataSubmitStatus: '' },
    { sno: 25, userName: 'dcso25', districtName: 'Ranga Reddy', dataSubmitStatus: '' },
    { sno: 26, userName: 'dcso26', districtName: 'Sangareddy', dataSubmitStatus: '' },
    { sno: 27, userName: 'dcso27', districtName: 'Siddipet', dataSubmitStatus: '' },
    { sno: 28, userName: 'dcso28', districtName: 'Suryapet', dataSubmitStatus: '' },
    { sno: 29, userName: 'dcso29', districtName: 'Vikarabad', dataSubmitStatus: '' },
    { sno: 30, userName: 'dcso30', districtName: 'Wanaparthy', dataSubmitStatus: '' },
    { sno: 31, userName: 'dcso31', districtName: 'Warangal', dataSubmitStatus: '' },
    { sno: 32, userName: 'dcso32', districtName: 'Warangal Rural', dataSubmitStatus: '' },
    { sno: 33, userName: 'dcso33', districtName: 'Yadadri Bhuvanagiri', dataSubmitStatus: '' },
  ];

  return (
    <div className="section6a-container">
      <header className="main-header">
        <div className="header-top">
          <img src="/src/assets/civilLogo.png" className="logo left-logo" />
          
          <h1 className="dept-title">
            Consumer Affairs, Food and Civil Supplies Department
          </h1>
          
          <img src="/src/assets/risingTelangana.jpeg" className="logo right-logo" />
        </div>

        <div className="blue-bar">
          <span className="blue-title">Telangana State Civil Supplies Department</span>
        </div>
      </header>

      {/* Section Title Strip */}
      <div className="section-title-strip">
        <h2>Section 6A Management System</h2>
      </div>

      {/* Main Title */}
      <div className="main-title">
        <h3>SECTION 6-A of the EC Act, 1955</h3>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Dashboard Table */}
        <div className="dashboard-section">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th colSpan={4} className="dashboard-header">DASH BOARD</th>
              </tr>
              <tr>
                <th>S.No</th>
                <th className="username-header">User Name</th>
                <th className="district-header">District Name</th>
                <th>Data Submit Status</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.map((item) => (
                <tr key={item.sno}>
                  <td>{item.sno}</td>
                  <td className="username-data">{item.userName}</td>
                  <td className="district-data">{item.districtName}</td>
                  <td>{item.dataSubmitStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Login Panel */}
        <div className="login-panel">
          <div className="login-header">
            <h3>Login</h3>
          </div>
          <div className="login-body">
            <div className="form-group">
              <label htmlFor="username">UserName:</label>
              <input type="text" id="username" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="form-control" />
            </div>
            <div className="reset-password">
              <a href="#">Reset Password</a>
            </div>
            <div className="button-group">
              <button className="btn btn-login">Login</button>
              <button className="btn btn-clear">Clear</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="section6a-footer">
        <div className="footer-content">
          <span>Copyright @ 2019. Telangana State Civil Supplies Department</span>
          <span>Designed and Developed by In-house</span>
        </div>
      </footer>
    </div>
  );
};

export default Section6A;