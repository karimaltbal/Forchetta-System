import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { useAlert } from "react-alert";

import SideBar from "../layout/Sidebar/Sidebar";
import "../Event/newEvent.css";

import { clearError, createBlog } from "../../../redux/actions/blogActions";
import { CREATE_BLOG_RESET } from "../../../redux/constants/blogConstants";

const NewBlog = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const alert = useAlert();

    const lang = localStorage.getItem("lng");
    const { loading, error, success } = useSelector((state) => state.createBlog);

    const [title_en, setTitleEn] = useState("");
    const [title_ar, setTitleAr] = useState("");
    const [description_en, setDescriptionEn] = useState("");
    const [description_ar, setDescriptionAr] = useState("");
    const [date, setDate] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (success) {
            alert.success("Blog Created Successfully");
            navigate("/admin/blog");
            dispatch({ type: CREATE_BLOG_RESET });
        }
    }, [dispatch, alert, error, success, navigate]);

    const createBlogSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("en_title", title_en);
        myForm.set("ar_title", title_ar);
        myForm.set("en_description", description_en);
        myForm.set("ar_description", description_ar);
        myForm.set("date", date);
        myForm.set("image", images);

        dispatch(createBlog(myForm, lang));
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
                        onSubmit={createBlogSubmitHandler}
                    >

                        <h1>Create Blog</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="English Blog title"
                                required
                                value={title_en}
                                onChange={(e) => setTitleEn(e.target.value)}
                            />
                        </div>
                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Arabic Blog title"
                                required
                                value={title_ar}
                                onChange={(e) => setTitleAr(e.target.value)}
                            />
                        </div>

                        <div>
                            <DescriptionIcon />
                            <textarea
                                placeholder="English Blog Description"
                                value={description_en}
                                onChange={(e) => setDescriptionEn(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>
                        <div>
                            <DescriptionIcon />
                            <textarea
                                placeholder="Arabic Blog Description"
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

                        <Button id="createProductBtn" type="submit" disabled={loading ? true : false} >
                            Create
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default NewBlog;
