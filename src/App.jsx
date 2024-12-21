import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userDetails, setUserDetails] = useState();

  const fetchUserDetails = async (url) => {
    const fetchData = await fetch(url);
    const fetchDataConvertToJson = await fetchData.json();
    setUserDetails(fetchDataConvertToJson);
  }

  useEffect(() => {
    const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";
    fetchUserDetails(url);
  }, []);

  if (!userDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-700">
        Loading...
      </div>
    );
  }

  const user = userDetails.results[0];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">User Profile</h1>
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-6">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-32 h-32 rounded-full shadow-lg"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name.first} {user.name.last}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.cell}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <p><span className="font-bold">First Name:</span> {user.name.first}</p>
              <p><span className="font-bold">Last Name:</span> {user.name.last}</p>
              <p><span className="font-bold">Gender:</span> {user.gender}</p>
              <p><span className="font-bold">City:</span> {user.location.city}</p>
              <p><span className="font-bold">Country:</span> {user.location.country}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <p><span className="font-bold">Email:</span> {user.email}</p>
              <p><span className="font-bold">Phone Number:</span> {user.cell}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
