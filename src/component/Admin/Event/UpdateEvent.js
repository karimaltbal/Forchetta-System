import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import SideBar from "../layout/Sidebar/Sidebar";

import { UPDATE_EVENT_RESET } from "../../../redux/constants/eventConstant";
import { clearError, updateEvent, getEventDetails } from "../../../redux/actions/eventActions";



const UpdateEvent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const alert = useAlert();

    const eventId = id;

    const lang = localStorage.getItem("lng");
    const { error, eventData } = useSelector((state) => state.eventDetails);
    const { loading, error: updateError, isUpdated} = useSelector((state) => state.event);

    const [title_en, setTitleEn] = useState("");
    const [title_ar, setTitleAr] = useState("");
    const [description_en, setDescriptionEn] = useState("");
    const [description_ar, setDescriptionAr] = useState("");
    const [date, setDate] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);



    useEffect(() => {
/*
        if (eventData?._id !== eventId) {
            dispatch(getEventDetails(eventId, lang));
        }else{
            setTitleEn(eventData.en_title);
            setTitleAr(eventData.ar_title);
            setDescriptionEn(eventData.en_description);
            setDescriptionAr(eventData.ar_description);
            setDate(eventData.date);
            setOldImages(eventData.images);
        }
*/
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearError());
        }

        if (isUpdated) {
            alert.success("Event Updated Successfully");
            navigate("/admin/event");
            dispatch({ type: UPDATE_EVENT_RESET });
        }

        
    }, [dispatch, alert, navigate, isUpdated, updateError, error]);



    const updateEventSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("en_title", title_en);
        myForm.set("ar_title", title_ar);
        myForm.set("en_description", description_en);
        myForm.set("ar_description", description_ar);
        myForm.set("date", date);
        myForm.set("image", images);

        dispatch(updateEvent(eventId, myForm, lang));
    };





    const createEventImagesChange = (e) => {
        setImages(e.target.files[0]);
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    
    return (
        <Fragment>
            <div className="dashboard">
                <SideBar />
                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={updateEventSubmitHandler}
                    >
                        <h1>Update Event</h1>


                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Event English Title"
                                required
                                value={title_en}
                                onChange={(e) => setTitleEn(e.target.value)}
                            />
                        </div>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Event Arabic Title"
                                required
                                value={title_ar}
                                onChange={(e) => setTitleAr(e.target.value)}
                            />
                        </div>

                        <div>
                            <DescriptionIcon />

                            <textarea
                                placeholder="Event English Description"
                                value={description_en}
                                onChange={(e) => setDescriptionEn(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>

                        <div>
                            <DescriptionIcon />

                            <textarea
                                placeholder="Event Arabic Description"
                                value={description_ar}
                                onChange={(e) => setDescriptionAr(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>

                        <div>
                            <AttachMoneyIcon />
                            <input
                                type="Date"
                                placeholder="Date"
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div id="registerImage">
                            <img src={imagesPreview} alt="Avatar Preview" />
                            <input
                                type="file"
                                name="avatarr"
                                accept="image/*"
                                onChange={createEventImagesChange}
                            />
                        </div>

                        <Button id="createProductBtn" type="submit" disabled={loading ? true : false}>
                            Update
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default UpdateEvent;
