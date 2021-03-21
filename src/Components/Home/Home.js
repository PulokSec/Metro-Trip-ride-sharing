import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData';
import Ride from '../Ride/Ride';
import image from '../../images/bg1.svg'
const Home = () => {
  const [ride,setRide] = useState([]);
  useEffect(()=>{
    setRide(FakeData);
  },[])
  return (
      <>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <h1 className="display-5">Welcome to</h1>
                    <h1 className="display-2">Metro <span className="text-primary">Trip</span></h1>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid ml-5" style={{width: '65%'}} src={image} alt="Banner" />
                </div>
            </div>
        </div>

     <div className="container">
     <div className="row g-3">
     {
                ride.map(vehicle => <Ride key={vehicle.key} ride={vehicle}></Ride>)
            }
     </div>
   </div>
 </>
  );
};

export default Home;