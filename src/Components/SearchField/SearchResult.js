import React from 'react';
import Map from '../Map/GoogleMap';
import { useParams } from 'react-router';
import locationData from '../FakeData/FakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelDownAlt, faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons';
import bg from '../../images/Bg.png'

const SearchResult = () => {
  const { location } = useParams();
  const placeInfo = locationData.find(item => item.key === location);
  const place = placeInfo.location;
  const { pickTo, pickFrom } = placeInfo;
  return (
    <>
      <div style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-3 mt-3">
              <div className="card p-3 ">

                <img className="mb-3 ml-5" style={{width:"50%",marginLeft:"40px"}}src={placeInfo.img} alt="" />
                
                <ul className="list-unstyled bg-primary p-3 rounded text-light">
                  <li className="mb-2">{pickFrom}</li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faLevelDownAlt} />
                    <FontAwesomeIcon icon={faLevelDownAlt} />
                  </li>
                  <li>{pickTo}</li>
                </ul>
                <ul className="list-unstyled mb-0">
                  <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    <span>
                      <img style={{width:"20%",marginLeft:"40px"}} src={placeInfo.img} alt={placeInfo.title} />
                    </span>
                    <span>
                      {placeInfo.person} <FontAwesomeIcon icon={faUsers} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} /> {placeInfo.person}
                    </span>
                  </li>
                  <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    <span>
                      <img style={{width:"20%",marginLeft:"40px"}} src={placeInfo.img} alt={placeInfo.name} />
                    </span>
                    <span>
                      {placeInfo.person} <FontAwesomeIcon icon={faUsers} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} /> {placeInfo.person}
                    </span>
                  </li>
                  <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    <span>
                      <img style={{width:"20%",marginLeft:"40px"}} src={placeInfo.img} alt={placeInfo.name} />
                    </span>
                    <span>
                      {placeInfo.person} <FontAwesomeIcon icon={faUsers} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} /> {placeInfo.person}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 mt-3">
              <Map location={place} zoomLevel={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
