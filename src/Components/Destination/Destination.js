import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import locationData from '../FakeData/FakeData'
import Map from '../Map/GoogleMap'
import bg from '../../images/Bg.png'

const Destination = () => {
    const { title } = useParams();
    const placeInfo = locationData.find(item => item.key === title);
    const { location, img, pickFrom, pickTo } = placeInfo;
  return (
    <>
      <div style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat"}}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-4 mb-3 mt-3">
              <div className="card p-3">
                  <img  className="mb-3 ml-5" style={{width:"50%"}}src={placeInfo.img} src={img} alt={title} />
                  <br/>
                <form>
                  <div className="form-group mb-2">
                    <label for="origin">Pickup From</label>
                    <input type="text" className="form-control" id="origin" placeholder={pickFrom} />
                  </div>
                  <div className="form-group mb-2">
                    <label for="origin">Going To</label>
                    <input type="text" className="form-control" id="destination" placeholder={pickTo} />
                  </div>

                  <div className="form-group  mb-2">
                    <label htmlFor="startingDate">Date</label>
                    <input type="date" placeholder="03/03" id="startingDate" className="form-control" />
                  </div>
                  <Link to={'/search-result/' + placeInfo.key} className="btn-block d-block btn btn-primary">
                    Search
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-md-8 mt-3">
              <Map location={location} zoomLevel={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;