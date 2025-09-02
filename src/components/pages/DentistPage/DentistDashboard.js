import { useState, useEffect } from "react";
import Header from "../Header";
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import Popup from 'reactjs-popup'

// Mock data for demonstration
const mockScans = [
  {
    id: "1",
    patientName: "John Smith",
    patientId: "P001",
    scanType: "Panoramic X-ray",
    region: "Full Mouth",
    uploadDate: "2024-08-30",
    imageUrl: 'https://res.cloudinary.com/dksgsqhdk/image/upload/v1756801120/Common-causes-of-swelling-in-oral-cavity_juemgs.jpg',
    notes: "Routine checkup - no abnormalities detected"
  },
  {
    id: "2",
    patientName: "Sarah Johnson",
    patientId: "P002",
    scanType: "Bitewing X-ray",
    region: "Posterior",
    uploadDate: "2024-08-29",
    imageUrl: 'https://res.cloudinary.com/dksgsqhdk/image/upload/v1756801120/Common-causes-of-swelling-in-oral-cavity_juemgs.jpg',
    notes: "Follow-up for cavity treatment"
  },
  {
    id: "3",
    patientName: "Michael Brown",
    patientId: "P003",
    scanType: "CT Scan",
    region: "Lower Jaw",
    uploadDate: "2024-08-28",
    imageUrl: 'https://res.cloudinary.com/dksgsqhdk/image/upload/v1756801120/Common-causes-of-swelling-in-oral-cavity_juemgs.jpg',
    notes: "Pre-surgical planning for implant"
  },
];

const DentistDashboard = () => {
  const [scans, setScans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScan, setSelectedScan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch scans
    setTimeout(() => {
      setScans(mockScans);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredScans = scans.filter(scan =>
    scan.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scan.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scan.scanType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const handleDownloadReport = (scan) => {
  //   toast({
  //     title: "Report Downloaded",
  //     description: `PDF report for ${scan.patientName} has been downloaded`,
  //   });
  //   // In a real app, this would generate and download a PDF
  //   console.log("Downloading report for:", scan);
  // };

  const getScanTypeColor = (scanType) => {
    const colors = {
      "Panoramic X-ray": "bg-blue-100 text-blue-800",
      "Bitewing X-ray": "bg-green-100 text-green-800",
      "CT Scan": "bg-purple-100 text-purple-800",
      "Periapical X-ray": "bg-orange-100 text-orange-800",
      "3D Imaging": "bg-pink-100 text-pink-800",
    };
    return colors[scanType] || "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        {/* <Header userRole="Dentist" onLogout={onLogout} /> */}
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading patient scans...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="Dentist"/>
        <div className="patient_scan_view_title_description_container">
          <h1 className="text-3xl font-bold mb-2">Patient Scan Viewer</h1>
          <p className="text-muted-foreground">
            Review and manage dental imaging records
          </p>
        </div>
        {/* Search and Filters */}
      <div className="dentist_main_container">  
      <div className="dentist_inside_container">
          <div className="dentist_search_report_container">
            <CiSearch/>
            <input placeholder="Search by patient name, ID, or scan type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="dentist_search_input"
            />
          </div>
          
        {/* Scans Grid */}
        <div className="dentist_scans_grid_container">
          {filteredScans.map((scan) => (
            <div className="individual_scan_item_container"> 
              <div className="pb-3">
                <div className="patient_name_id_scantype_container">
                  {/* <div className="patient_name_with_id_container"> */}
                    <div>
                    <div className="patient_profile_with_name">
                      <LuUser className="lu_user_profile"/>
                      <p>{scan.patientName}</p>
                    </div>
                    <p className="patient_id">ID:{scan.patientId}</p>
                    </div>
                    
                  {/* </div> */}
                  <p className="scan_type">
                    {scan.scanType}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative group">
                  <img
                    src={scan.imageUrl}
                    alt={`${scan.scanType} for ${scan.patientName}`}
                    className="scan_dental_image"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <div>
                      <div >
                      <Popup
                      modal
                        trigger={<button
                        type="button" className="view_all_button"
                          onClick={() => setSelectedScan(scan)}
                        >
                          {/* <Eye className="h-4 w-4 mr-2" /> */}
                          View Full
                        </button>}
                      >
                        <div className="dentist_scan_report_popup_container">
                        <div>
                          <h2 className="flex items-center gap-2">
                            {scan.scanType} - {scan.patientName}
                          </h2>
                        </div>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p><strong>Patient ID:</strong> {scan.patientId}</p>
                              <p><strong>Region:</strong> {scan.region}</p>
                            </div>
                            <div>
                              <p><strong>Upload Date:</strong> {scan.uploadDate}</p>
                              <p><strong>Scan Type:</strong> {scan.scanType}</p>
                            </div>
                          </div>
                          {scan.notes && (
                            <div>
                              <p className="font-medium mb-1"><strong>Notes: </strong>{scan.notes}</p>
                              <p className="text-sm text-muted-foreground"></p>
                            </div>
                          )}
                        </div>
                        <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span><strong>Region: </strong>{scan.region}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span><strong>Date: </strong>{new Date(scan.uploadDate).toLocaleDateString()}</span>
                  </div>
                </div>
                </div>
              </Popup>
              </div>    
            </div>
            </div>
          </div>
          <div className="view_and_report_scan_buttons_container">
              <button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => setSelectedScan(scan)}
              >
                View
              </button>
          <div className="download_report_container">
          <MdOutlineFileDownload className="download_report_image"/>
          <button
            variant="accent"
            size="sm"
            className="report_button"
            // onClick={() => handleDownloadReport(scan)}
          >
            Report
          </button>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
  {filteredScans.length === 0 && (
    <div className="shadow-soft">
      <div className="py-12 text-center">
        <h3 className="text-lg font-medium mb-2">No scans found</h3>
        <p className="text-muted-foreground">
          {searchTerm ? "Try adjusting your search criteria" : "No dental scans have been uploaded yet"}
        </p>
      </div>
    </div>
  )}
  </div>
  </div>
</div>
  );
}

export default DentistDashboard