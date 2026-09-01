import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase'; 

export default function Portfolio() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch jobs from Firestore when the page loads
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "portfolioJobs"));
      const jobsArray = [];
      querySnapshot.forEach((doc) => {
        jobsArray.push({ id: doc.id, ...doc.data() });
      });
      setImages(jobsArray);
    } catch (error) {
      console.error("Error fetching jobs: ", error);
    }
  };

  const handleAdminLogin = () => {
    const pin = prompt("Enter Admin PIN (Hint: 1234):");
    if (pin === "1234") {
      setIsAdmin(true);
      alert("Admin mode unlocked! You can now add and delete images.");
    } else {
      alert("Incorrect PIN.");
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const title = prompt("Enter a title for this job:");
    if (!title) return;

    setIsUploading(true);

    try {
      // 1. Upload image to ImgBB (No credit card required)
      const formData = new FormData();
      formData.append('image', file);
      
      // Your active ImgBB API Key
      const imgbbApiKey = "ffdf009648c4a4a748412a7e4274b344"; 
      
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error("ImgBB upload failed");
      }

      const downloadURL = data.data.display_url;

      // 2. Save the title and ImgBB URL to Firestore
      await addDoc(collection(db, "portfolioJobs"), {
        title: title,
        image: downloadURL,
        createdAt: new Date()
      });

      // 3. Refresh the page data
      fetchJobs();
    } catch (error) {
      console.error("Error uploading image: ", error);
      alert("Error uploading image. Check console.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (job) => {
    if (!window.confirm(`Are you sure you want to delete "${job.title}"?`)) return;

    try {
      // 1. Delete the document record from Firestore
      await deleteDoc(doc(db, "portfolioJobs", job.id));

      // 2. Update the UI to remove it from the screen
      setImages(images.filter(img => img.id !== job.id));
    } catch (error) {
      console.error("Error deleting job: ", error);
      alert("Failed to delete. Check console.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <div className="bg-gray-900 text-white py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Recent Jobs
          </h1>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Take a look at some of the custom projects and repairs we've completed.
          </p>
        </div>
      </div>

      {isAdmin && (
        <div className="bg-red-50 border-b border-red-200 p-6 flex flex-col items-center">
          <p className="text-red-800 font-bold mb-4">Admin Mode Active</p>
          <label className="cursor-pointer bg-red-700 text-white px-6 py-3 rounded-md font-bold hover:bg-red-800 transition-colors shadow-md">
            {isUploading ? "Uploading..." : "+ Upload New Image"}
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageUpload} 
              disabled={isUploading}
            />
          </label>
        </div>
      )}

      <div className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {images.length === 0 ? (
            <p className="text-center text-gray-500">No jobs uploaded yet. Log in to add some!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {images.map((job) => (
                <div key={job.id} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white flex flex-col">
                  <div 
                    className="w-full h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${job.image})` }}
                  ></div>
                  <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {job.title}
                    </h3>
                    
                    {isAdmin && (
                      <button 
                        onClick={() => handleDelete(job)}
                        className="text-red-600 hover:text-red-800 font-bold text-sm bg-red-50 px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-100 py-4 text-center">
        {!isAdmin ? (
          <button onClick={handleAdminLogin} className="text-xs text-gray-400 hover:text-gray-600">
            Admin Login
          </button>
        ) : (
          <button onClick={() => setIsAdmin(false)} className="text-xs text-gray-400 hover:text-gray-600">
            Log Out Admin
          </button>
        )}
      </div>

    </div>
  );
}