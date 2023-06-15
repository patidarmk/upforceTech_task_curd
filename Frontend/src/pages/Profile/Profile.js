import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import Spiner from "../../components/Spiner/Spiner";
import { singleUsergetfunc } from "../../services/Apis";
import { BASE_URL } from "../../services/helper";
import moment from "moment";
import "./profile.css";

const Profile = () => {
  const [userprofile, setUserProfile] = useState({});
  const [showspin, setShowSpin] = useState(true);

  const { id } = useParams();

  const userProfileGet = async () => {
    const response = await singleUsergetfunc(id);

    if (response.status === 200) {
      setUserProfile(response.data);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    userProfileGet();
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [id]);
  return (
    <>
      {showspin ? (
        <Spiner /> 
      ) : (
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
			<a href="/">Close</a>
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
					  <a href="/">Close</a>
                        <div className="m-b-25">
                          <img
                            src={`${BASE_URL}/uploads/${userprofile.profile}`}
                            className="img-radius user-profile-image"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <h6 className="f-w-600">
                          {userprofile.fname+" "+userprofile.lname}
                        </h6>
                        <p>{userprofile.status}</p>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                          Information
                        </h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Email</p>
                            <h6 className="text-muted f-w-400">
                              {userprofile.email}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Phone</p>
                            <h6 className="text-muted f-w-400">
                              {userprofile.mobile}
                            </h6>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Gender</p>
                            <h6 className="text-muted f-w-400">
                              {userprofile.gender}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Location</p>
                            <h6 className="text-muted f-w-400">
                              {userprofile.location}
                            </h6>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Date Created</p>
                            <h6 className="text-muted f-w-400">
                              {moment(userprofile.datecreated).format(
                                "DD-MM-YYYY"
                              )}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Date Updated</p>
                            <h6 className="text-muted f-w-400">
                              {userprofile.dateUpdated}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
