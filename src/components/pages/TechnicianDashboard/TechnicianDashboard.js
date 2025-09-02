import { useState } from "react";
import Header from  "../Header"
import { toast } from "react-toastify";
import { BiUpload } from "react-icons/bi";

import "./index.css"
import axios from "axios";

const TechnicianDashboard= () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    scanType: "",
    region: "",
    notes: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  // const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scanDetails = {...formData,selectedFile} 
    console.log("scanDetails:",scanDetails)

    const response  = await axios.post("http://localhost:3035/api/upload",scanDetails)
    console.log("Response:",response.data)

    // setTimeout(() => {
    //   toast({
    //     title: "Upload Successful",
    //     description: "Dental scan has been uploaded and saved",
    //   });

      // Reset form
      // setFormData({
      //   patientName: "",
      //   patientId: "",
      //   scanType: "",
      //   region: "",
      //   notes: "",
      // });
      // setSelectedFile(null);
      // setIsUploading(false);
  //   }, 2000);
  };

  return (
    <>
      <Header userRole="Technician"/>
        <div className="technician_main_container">
        <div>
            <h1 className="text-3xl font-bold mb-2">Upload Dental Scan</h1>
            <p className="text-muted-foreground">Upload and process dental imaging for patient records</p>
          <div className="patient_scan_technician_form_container">
            <div className="upload_image_title_container">
              <BiUpload className="upload_image" />
              <h4 className="flex items-center gap-2">
                Patient Scan Upload
              </h4>
              </div>
              <p>Fill in patient details and upload the dental scan image</p>
            <div>
              <form onSubmit={handleSubmit} className="technician_form_container">
                <div className="inside_technician_inputs">
                  <div className="inside_technician_input_forms">
                    <label htmlFor="patientName">Patient Name *</label>
                    <input
                      id="patientName"
                      className="technician_input_forms"
                      placeholder="Enter patient full name"
                      value={formData.patientName}
                      onChange={(e) => setFormData({...formData,patientName:e.target.value})}
                      required
                    />
                  </div>
                  <div className="inside_technician_input_forms">
                    <label htmlFor="patientId">Patient ID *</label>
                    <input
                      id="patientId"
                      className="technician_input_forms"
                      placeholder="Enter patient ID"
                      value={formData.patientId}
                      onChange={(e) => setFormData({...formData,patientId:e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="inside_technician_inputs">
                  <div className="inside_technician_input_forms">
                    <label htmlFor="scanType">Scan Type*</label>
                      <select className="select_technician_input_forms" onChange={(e) => setFormData({...formData,scanType:e.target.value})} required>
                        <option value="panoramic">Panoramic X-ray</option>
                        <option value="bitewing">Bitewing X-ray</option>
                        <option value="periapical">Periapical X-ray</option>
                        <option value="ct">CT Scan</option>
                        <option value="3d">3D Imaging</option>
                      </select>
                    </div>
                  <div className="inside_technician_input_forms">
                    <label htmlFor="region">Region*</label>
                      <select className="select_technician_input_forms" onChange={(e) => setFormData({...formData,region:e.target.value})} required>
                        <option value="upper-jaw">Upper Jaw</option>
                        <option value="lower-jaw">Lower Jaw</option>
                        <option value="full-mouth">Full Mouth</option>
                        <option value="anterior">Anterior</option>
                        <option value="posterior">Posterior</option>
                        <option value="left-side">Left Side</option>
                        <option value="right-side">Right Side</option>
                      </select>
                  </div>
                  </div>
                <div className="inside_technician_input_forms">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    placeholder="Additional notes or observations"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData,notes:e.target.value})}
                    rows={3}
                  />  
                </div> 
                <div className="inside_technician_input_forms">
                  <label>Scan Image*</label>
                  <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>
                </div>
                <button type="submit" className="upload-btn">Upload Scan</button>
              </form>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
}
export default TechnicianDashboard