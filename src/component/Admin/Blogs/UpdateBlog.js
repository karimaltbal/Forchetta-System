import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import SideBar from "../layout/Sidebar/Sidebar";

import { UPDATE_BLOG_RESET } from "../../../redux/constants/blogConstants";
import { clearError, updateBlog, getBlogDetails } from "../../../redux/actions/blogActions";



const UpdateBlog = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const alert = useAlert();

    const eventId = id;

    const lang = localStorage.getItem("lng");
    const { error, blogData } = useSelector((state) => state.blogDetails);
    const { loading, error: updateError, isUpdated} = useSelector((state) => state.blog);

    const [title_en, setTitleEn] = useState("");
    const [title_ar, setTitleAr] = useState("");
    const [description_en, setDescriptionEn] = useState("");
    const [description_ar, setDescriptionAr] = useState("");
    const [date, setDate] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);



    useEffect(() => {
/*
        if (blogData?._id !== eventId) {
            dispatch(getBlogDetails(eventId));
        }else{
            setTitleEn(blogData.en_title);
            setTitleAr(blogData.ar_title);
            setDescriptionEn(blogData.en_description);
            setDescriptionAr(blogData.ar_description);
            setDate(blogData.date);
            setOldImages(blogData.images);
        }*/

        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearError());
        }

        if (isUpdated) {
            alert.success("Blog Updated Successfully");
            navigate("/admin/blog");
            dispatch({ type: UPDATE_BLOG_RESET });
        }

        
    }, [dispatch, alert, navigate, isUpdated, eventId, updateError, blogData, error]);



    const updateEventSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("en_title", title_en);
        myForm.set("ar_title", title_ar);
        myForm.set("en_description", description_en);
        myForm.set("ar_description", description_ar);
        myForm.set("date", date);
        myForm.set("image", images);

        dispatch(updateBlog(eventId, myForm, lang));
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
                        <h1>Update Blog</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Blog English Title"
                                required
                                value={title_en}
                                onChange={(e) => setTitleEn(e.target.value)}
                            />
                        </div>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Blog Arabic Title"
                                required
                                value={title_ar}
                                onChange={(e) => setTitleAr(e.target.value)}
                            />
                        </div>

                        <div>
                            <DescriptionIcon />

                            <textarea
                                placeholder="Blog English Description"
                                value={description_en}
                                onChange={(e) => setDescriptionEn(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>

                        <div>
                            <DescriptionIcon />

                            <textarea
                                placeholder="Blog Arabic Description"
                                value={description_ar}
                                onChange={(e) => setDescriptionAr(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>

                        <div>
                            <AttachMoneyIcon />
                            <input
                                type="date"
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

export default UpdateBlog;
