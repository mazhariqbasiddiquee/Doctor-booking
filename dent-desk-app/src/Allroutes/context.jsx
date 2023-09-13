import React, { createContext,useState,useEffect } from "react";
import Doctors from "../components/doctors";
import { da } from "date-fns/locale";
import data from "../components/db.json"

export   const  Authcontext=createContext()


function AuthContextComponent({children}) {




  
  const [details, setData] = useState([]); 
     useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://doctor-server1.onrender.com/users'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result,"**")
       setData(result)

        // Process the data as needed
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors as needed
      }
    };

    fetchData();
  }, []);
  const context = {
    details,
    setData,
  };


 
  console.log(context)
  return ( <Authcontext.Provider value={context}>

      {children}


  </Authcontext.Provider>)





}

export default AuthContextComponent;

