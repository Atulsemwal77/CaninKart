// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { TfiArrowTopRight } from "react-icons/tfi";
// import img12 from "../assets/Indiabanner.png";
// import { Link } from "react-router-dom";

// const locations = [
//   { id: 1, name: "Amritsar" },
//   { id: 2, name: "Ludhiana" },
//   { id: 3, name: "Jalandhar" },
//   { id: 4, name: "Delhi" },
//   { id: 5, name: "Mumbai" },
//   { id: 6, name: "Chennai" },
//   { id: 7, name: "Bengaluru" },
//   { id: 8, name: "Kolkata" },
//   { id: 9, name: "Hyderabad" },
//   { id: 10, name: "Pune" },
//   { id: 11, name: "Ahmedabad" },
//   { id: 12, name: "Jaipur" },
//   { id: 13, name: "Surat" },
//   { id: 14, name: "Bhopal" },
//   { id: 15, name: "Chandigarh" },
//   { id: 16, name: "Nagpur" },
//   { id: 17, name: "Indore" },
//   { id: 18, name: "Patna" },
//   { id: 19, name: "Ranchi" },
//   { id: 20, name: "Guwahati" },
//   { id: 21, name: "Noida" },
//   { id: 22, name: "Gurgaon" },
//   { id: 23, name: "Varanasi" },
//   { id: 24, name: "Lucknow" },
// ];

// const Marketplace = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen text-white max-w-screen-2xl mx-auto mt-18">
//       {/* Header */}
//       <div className="w-full mx-auto">
//         <img
//           src={img12}
//           alt="India banner"
//           className="w-full  h-auto mx-auto"
//         />
//       </div>

//       {/* City Grid */}
//       <div className="max-w-7xl md:mx-auto mx-5 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {locations.map((city) => (
//           <Link
//             key={city.id}
//             to={`/marketplacedetails/${city.id}`}
//             state={city}
//             className="bg-[#F0F2F3] text-black rounded-lg p-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition no-underline"
//           >
//             <div className="flex flex-col items-start">
//               <div className="bg-[#FFFAEF] p-1 rounded">
//                 <FaMapMarkerAlt className="text-black text-2xl" />
//               </div>
//               <span className="text-sm font-medium mt-5">{city.name}</span>
//             </div>

//             <TfiArrowTopRight className="text-blue-400 text-3xl w-10 h-10" />
//           </Link>
//         ))}
//       </div>

//       {/* </Link> */}

//       {/* Pagination */}
//       <div className="flex justify-center space-x-2 pb-10">
//         {[1, 2, 3, 4].map((num) => (
//           <button
//             key={num}
//             className="w-8 h-8 text-sm font-medium rounded-full hover:bg-white hover:text-black transition-all duration-200"
//             style={{
//               backgroundColor: num === 1 ? "white" : "transparent",
//               color: num === 1 ? "black" : "white",
//             }}
//           >
//             {num}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marketplace;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const LocationHierarchy = () => {
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/countries/hierarchy")
//       .then((res) => {
//         setLocations(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div className="p-4 text-lg font-semibold">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
//         Country → State → District
//       </h2>

//       {locations.length === 0 ? (
//         <p className="text-gray-600 text-center">No data available.</p>
//       ) : (
//         locations.map((country) => (
//           <div
//             key={country._id}
//             className="border border-gray-300 p-4 rounded-lg shadow-md mb-6 bg-white"
//           >
//             <h3 className="text-xl font-semibold text-blue-700 mb-2">
//               🌍 {country.name}
//             </h3>

//             {country.states.length === 0 ? (
//               <p className="ml-4 text-sm text-gray-500">No states found.</p>
//             ) : (
//               <ul className="ml-4">
//                 {country.states.map((state) => (
//                   <li key={state._id} className="mb-2">
//                     <span className="font-medium text-green-700">🛣️ {state.name}</span>

//                     {state.districts.length === 0 ? (
//                       <p className="ml-6 text-sm text-gray-500">No districts.</p>
//                     ) : (
//                       <ul className="ml-6 list-disc text-gray-700">
//                         {state.districts.map((district) => (
//                           <li key={district._id}>🏘️ {district.name}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default LocationHierarchy;

// For Flage

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const LocationHierarchy = () => {
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch Country Hierarchy and add flags
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/countries/hierarchy");
//         const countriesWithFlags = await Promise.all(
//           res.data.map(async (country) => {
//             try {
//               const flagRes = await axios.get(
//                 `https://restcountries.com/v3.1/name/${country.name}?fullText=true`
//               );
//               const flagUrl = flagRes.data[0]?.flags?.png || ""; // Get flag URL
//               return { ...country, flag: flagUrl };
//             } catch (flagErr) {
//               console.error(`Flag not found for ${country.name}`, flagErr);
//               return { ...country, flag: "" };
//             }
//           })
//         );
//         setLocations(countriesWithFlags);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="p-4 text-lg font-semibold">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
//         Country → State → District
//       </h2>

//       {locations.length === 0 ? (
//         <p className="text-gray-600 text-center">No data available.</p>
//       ) : (
//         locations.map((country) => (
//           <div
//             key={country._id}
//             className="border border-gray-300 p-4 rounded-lg shadow-md mb-6 bg-white"
//           >
//             <div className="flex items-center gap-3 mb-2">
//               <h3 className="text-xl font-semibold text-blue-700">
//                 🌍 {country.name}
//               </h3>
//               {country.flag && (
//                 <img
//                   src={country.flag}
//                   alt={`${country.name} flag`}
//                   className="w-6 h-4 object-cover rounded-sm border"
//                 />
//               )}
//             </div>

//             {country.states.length === 0 ? (
//               <p className="ml-4 text-sm text-gray-500">No states found.</p>
//             ) : (
//               <ul className="ml-4">
//                 {country.states.map((state) => (
//                   <li key={state._id} className="mb-2">
//                     <span className="font-medium text-green-700">🛣️ {state.name}</span>

//                     {state.districts.length === 0 ? (
//                       <p className="ml-6 text-sm text-gray-500">No districts.</p>
//                     ) : (
//                       <ul className="ml-6 list-disc text-gray-700">
//                         {state.districts.map((district) => (
//                           <li key={district._id}>🏘️ {district.name}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default LocationHierarchy;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const LocationHierarchy = () => {
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from your backend and country flags from external API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/countries/hierarchy");

//         const countriesWithFlags = await Promise.all(
//           res.data.map(async (country) => {
//             try {
//               const flagRes = await axios.get(
//                 `https://restcountries.com/v3.1/name/${country.name}?fullText=true`
//               );
//               const flagUrl = flagRes.data[0]?.flags?.png || "";
//               return { ...country, flag: flagUrl };
//             } catch (flagErr) {
//               console.error(`Flag not found for ${country.name}`, flagErr);
//               return { ...country, flag: "" };
//             }
//           })
//         );

//         setLocations(countriesWithFlags);
//       } catch (err) {
//         console.error("Error fetching location data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="p-4 text-lg font-semibold">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-4 mt-20">
//       <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
//         Country → State → District
//       </h2>

//       {locations.length === 0 ? (
//         <p className="text-gray-600 text-center">No data available.</p>
//       ) : (
//         locations.map((country) => (
//           <div
//             key={country._id}
//             className="border border-gray-300 p-4 rounded-lg shadow-md mb-6 bg-white"
//           >
//             <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2 mb-2">
//               {country.flag && (
//                 <img
//                   src={country.flag}
//                   alt={`Flag of ${country.name}`}
//                   className="w-6 h-4 object-cover rounded-sm border"
//                 />
//               )}
//               {country.name}
//             </h3>

//             {country.states.length === 0 ? (
//               <p className="ml-4 text-sm text-gray-500">No states found.</p>
//             ) : (
//               <ul className="ml-4">
//                 {country.states.map((state) => (
//                   <li key={state._id} className="mb-2">
//                     <span className="font-medium text-green-700">🛣️ {state.name}</span>

//                     {state.districts.length === 0 ? (
//                       <p className="ml-6 text-sm text-gray-500">No districts.</p>
//                     ) : (
//                       <ul className="ml-6 list-disc text-gray-700">
//                         {state.districts.map((district) => (
//                           <li key={district._id}>🏘️ {district.name}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default LocationHierarchy;


import React, { useEffect, useState } from "react";
import axios from "axios";
import img12 from "../assets/Indiabanner.png";

const LocationHierarchy = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCountries, setExpandedCountries] = useState({});
  const [expandedStates, setExpandedStates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND}/countries/hierarchy`
        );
        const countriesWithFlags = await Promise.all(
          res.data.map(async (country) => {
            try {
              const flagRes = await axios.get(
                `https://restcountries.com/v3.1/name/${country.name}?fullText=true`
              );
              return { ...country, flag: flagRes.data[0]?.flags?.png || "" };
            } catch (flagErr) {
              console.error(`Flag not found for ${country.name}`, flagErr);
              return { ...country, flag: "" };
            }
          })
        );
        setLocations(countriesWithFlags);
      } catch (err) {
        console.error("Error fetching location data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const toggleCountry = (countryId) => {
    setExpandedCountries((prev) => ({
      ...prev,
      [countryId]: !prev[countryId],
    }));
  };

  const toggleState = (stateId) => {
    setExpandedStates((prev) => ({
      ...prev,
      [stateId]: !prev[stateId],
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="w-full mx-auto">
        <img
          src={img12}
          alt="India banner"
          className="w-full  h-auto mx-auto"
        />
      </div>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8 animate-fade-in">
            Location Hierarchy Explorer
          </h2>

          {locations.length === 0 ? (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <p className="text-gray-600 text-lg">No location data available.</p>
  </div>
) : (
  <div className="space-y-4 grid grid-cols-4 space-x-4">
    {locations.map((country) => (
      <div
        key={country._id}
        className=" overflow-hidden transition-all duration-300 "
      >
        <button
          onClick={() => toggleCountry(country._id)}
          className="w-full p-4 bg-gradient-to-r  transition-colors flex flex-col items-center"
          aria-expanded={expandedCountries[country._id]}
        >
          {country.flag && (
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className="w-24 h-24 object-contain rounded-full border border-gray-200"
              loading="lazy"
            />
          )}
          <h3 className="text-xl font-semibold text-blue-700 mt-2">
            {country.name}
          </h3>
          <span className="text-gray-500 mt-1">
            {expandedCountries[country._id] ? "−" : "+"}
          </span>
        </button>

        {expandedCountries[country._id] && (
          <div className="p-4 animate-slide-down">
            {country.states.length === 0 ? (
              <p className="text-gray-500 italic">No states found.</p>
            ) : (
              <ul className="space-y-3">
                {country.states.map((state) => (
                  <li key={state._id}>
                    <button
                      onClick={() => toggleState(state._id)}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                      aria-expanded={expandedStates[state._id]}
                    >
                      <span className="font-medium text-green-700 flex items-center gap-2">
                        🛣️ {state.name}
                      </span>
                      <span className="text-gray-500">
                        {expandedStates[state._id] ? "−" : "+"}
                      </span>
                    </button>

                    {expandedStates[state._id] && (
                      <ul className="ml-6 mt-2 space-y-1 animate-slide-down">
                        {state.districts.length === 0 ? (
                          <li className="text-gray-500 italic">
                            No districts found.
                          </li>
                        ) : (
                          state.districts.map((district) => (
                            <li
                              key={district._id}
                              className="text-gray-700 flex items-center gap-2"
                            >
                              🏘️ {district.name}
                            </li>
                          ))
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              
            )}
          </div>
          
        )}
      </div>
    ))}
  </div>
)}
        </div>
      </div>
      <p>
        
      </p>
    </>
  );
};

// Add these CSS animations to your stylesheet
const styles = `
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-down {
  from { height: 0; opacity: 0; }
  to { height: auto; opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}
`;

export default LocationHierarchy;
