import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@material-ui/core";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";

import { useAlert } from "react-alert";

import SideBar from "../layout/Sidebar/Sidebar";
import "../Event/newEvent.css";

import { clearError, createCompany } from "../../../redux/actions/companyAction";
import { CREATE_COMPANY_RESET } from "../../../redux/constants/companyConstants";

const NewCompany = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const alert = useAlert();

    const lang = localStorage.getItem("lng");
    const { loading, error, success } = useSelector((state) => state.createCompany);

    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (success) {
            alert.success("Company Created Successfully");
            navigate("/admin/company");
            dispatch({ type: CREATE_COMPANY_RESET });
        }
    }, [dispatch, alert, error, success, navigate]);

    const createCompanySubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("title", title);
        myForm.set("image", images);

        dispatch(createCompany(myForm, lang));
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
                        onSubmit={createCompanySubmitHandler}
                    >

                        <h1>Create Comapny</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Company title"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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

export default NewCompany;
