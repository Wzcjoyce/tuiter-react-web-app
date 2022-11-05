import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {EditProfile} from "../profile/profile-reducer";


const EditProfileItem = () => {

    const profile = useSelector(state => state.profile);
    const [firstName, ChangeFirstName] = useState(profile.firstName);
    const [lastName, ChangeLastName] = useState(profile.lastName);
    const [bio, ChangeBio] = useState(profile.bio);
    const [website, ChangeWebsite] = useState(profile.website);
    const [location, ChangeLocation] = useState(profile.location);
    const [dateOfBirth, ChangeBirthDay] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const saveEditHandler = () => {
        dispatch(EditProfile({
            "firstName": firstName,
            "lastName": lastName,
            "bio": bio,
            "location": location,
            "website": website,
            "dateOfBirth": dateOfBirth
        }))
    }


    return(
        <>
            <div>
                <div className="row">
                    <div className="col-1 position-relative padding-top">
                        <Link className = "bond-font-size-18 text-black" to="/tuiter/profile"><i className="bi bi-x-lg"></i></Link>
                    </div>

                    <div className="col-9">
                        <div className = "bond-font-size-22"><h4 className = "padding-top padding-to-left padding-to-right">Edit Profile</h4> </div>
                    </div>
                    <div className= "col-2">
                        <Link to="../profile" className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2" onClick={saveEditHandler}>
                            Save
                        </Link>
                    </div>
                </div>


                <div className="mb-5 position-relative">
                    <img className="w-100" src={profile.profilePicture} height = "400px"/>
                    <div className="profile-image position-absolute">
                        <div className="position-relative">
                            <img className=" wd-nudge-up banner-image rounded-circle"
                                 src={profile.bannerPicture}/>
                        </div>
                    </div>
                </div>

                <div className= "to-top-40"></div>
                <div className="border border-secondary p-2 mb-3">
                    <label htmlFor="email">First Name</label>
                    <input placeholder={profile.firstName}
                        id = "firstName"   className="p-0 form-control border-0" value = {firstName}
                           onChange={(event) => ChangeFirstName(event.target.value)} />
                </div>

                <div className= "to-top-25"></div>
                <div className=" border border-secondary p-2 mb-3">
                    <label>Last Name</label>
                    <input placeholder={profile.lastName}
                         id = "lastName"  className="p-0 form-control border-0" value = {lastName}
                           onChange={(event) => ChangeLastName(event.target.value)} />
                </div>

                <div className= "to-top-25"></div>
                <div className=" border border-secondary p-2 mb-3">
                    <label >Biology</label>
                    <textarea placeholder={profile.bio}
                        className="p-0 input-larger form-control border-0"
                        id="bio" value = {bio}
                              onChange={(event) => ChangeBio(event.target.value)}></textarea>
                </div>

                <div className= "to-top-25"></div>
                <div className=" border border-secondary p-2 mb-3">
                    <label>Location</label>
                    <input placeholder={profile.location}
                           id = "location" className="p-0 form-control border-0"
                            value = {location}
                              onChange={(event) => ChangeLocation(event.target.value)}/>
                </div>

                <div className= "to-top-25"></div>
                <div className=" border border-secondary p-2 mb-3">
                    <label>Website</label>
                    <input placeholder={profile.website}
                           id = "location" className="p-0 form-control border-0"
                           value = {website}
                           onChange={(event) => ChangeWebsite(event.target.value)}/>
                </div>

                <div className= "to-top-25"></div>
                <div className=" border border-secondary p-2 mb-3">
                    <label>Date of Birth (mm/dd/yyyy)</label>
                    <input placeholder={profile.dateOfBirth}
                           id = "dateOfBirth" className="p-0 form-control border-0"
                           value = {dateOfBirth}
                           onChange={(event) => ChangeBirthDay(event.target.value)}/>
                </div>



            </div>
        </>
    );
};
export default EditProfileItem;