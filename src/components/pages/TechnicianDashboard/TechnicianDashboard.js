import { useState } from "react";
import Header from  "../Header"

import { BiUpload } from "react-icons/bi";

import "./index.css"
const TechnicianDashboard= () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    scanType: "",
    region: "",
    notes: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  // const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!selectedFile || !formData.patientName || !formData.patientId) {
    //   toast({
    //     title: "Missing Information",
    //     description: "Please fill in all required fields and select an image",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    setIsUploading(true);
    // Simulate upload process
  //   setTimeout(() => {
  //     toast({
  //       title: "Upload Successful",
  //       description: "Dental scan has been uploaded and saved",
  //     });

  //     // Reset form
  //     setFormData({
  //       patientName: "",
  //       patientId: "",
  //       scanType: "",
  //       region: "",
  //       notes: "",
  //     });
  //     setSelectedFile(null);
  //     setIsUploading(false);
  //   }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="Technician"/>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
          <div className="upload_image_title_container">
            <BiUpload className="upload_image" />
            <h1 className="text-3xl font-bold mb-2">Upload Dental Scan</h1>
          </div>
            <p className="text-muted-foreground">Upload and process dental imaging for patient records</p>
          </div>
          <div className="shadow-medium">
            <div>
              <p className="flex items-center gap-2">
                Patient Scan Upload
              </p>
              <p>
                Fill in patient details and upload the dental scan image
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="patientName">Patient Name *</label>
                    <input
                      id="patientName"
                      placeholder="Enter patient full name"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange('patientName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="patientId">Patient ID *</label>
                    <input
                      id="patientId"
                      placeholder="Enter patient ID"
                      value={formData.patientId}
                      onChange={(e) => handleInputChange('patientId', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="scanType">Scan Type</label>
                    <div value={formData.scanType} onValueChange={(value) => handleInputChange('scanType', value)}>
                      <div>
                        <input placeholder="Select scan type" />
                      </div>
                      <select>
                        <option value="panoramic">Panoramic X-ray</option>
                        <option value="bitewing">Bitewing X-ray</option>
                        <option value="periapical">Periapical X-ray</option>
                        <option value="ct">CT Scan</option>
                        <option value="3d">3D Imaging</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="region">Region</label>
                    <div value={formData.region} onValueChange={(value) => handleInputChange('region', value)}>
                      <div>
                        <input placeholder="Select region" />
                      </div>
                      <select>
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
                </div>
                <div className="space-y-2">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    placeholder="Additional notes or observations"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="image">Scan Image *</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <label htmlFor="image" className="cursor-pointer">
                      <div className="flex flex-col items-center gap-3">
                        {selectedFile ? (
                          <>
                            {/* <CheckCircle className="h-12 w-12 text-success" /> */}
                            <div>
                              <p className="font-medium text-success">{selectedFile.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* <FileImage className="h-12 w-12 text-muted-foreground" /> */}
                            <div>
                              <p className="font-medium">Click to upload image</p>
                              <p className="text-sm text-muted-foreground">
                                PNG, JPG, JPEG up to 10MB
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  variant="medical"
                  className="w-full"
                  size="lg"
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Upload Scan"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default TechnicianDashboard