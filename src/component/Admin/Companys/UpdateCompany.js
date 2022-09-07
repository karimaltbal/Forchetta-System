import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import { Button } from "@material-ui/core";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";

import SideBar from "../layout/Sidebar/Sidebar";

import { clearError, updateCompany, getCompanyDetails } from "../../../redux/actions/companyAction";
import { UPDATE_COMPANY_RESET } from "../../../redux/constants/companyConstants";



const UpdateCompany = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const alert = useAlert();

    const companyId = id;

    const lang = localStorage.getItem("lng");
    const { error, companyData } = useSelector((state) => state.companyDetails);
    const { loading, error: updateError, isUpdated} = useSelector((state) => state.company);

    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);



    useEffect(() => {
/*
        if (companyData?._id !== companyId) {
            dispatch(getCompanyDetails(companyId, lang));
        }else{
            setTitle(companyData.title);
            setOldImages(companyData.images);
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
            alert.success("Company Updated Successfully");
            navigate("/admin/company");
            dispatch({ type: UPDATE_COMPANY_RESET });
        }

        
    }, [dispatch, alert, navigate, isUpdated, companyId, updateError, companyData, error, lang]);



    const updateEventSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("title", title);
        myForm.set("image", images);

        dispatch(updateCompany(companyId, myForm, lang));
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
                        <h1>Update Comapny</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Company Title"
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

                        <Button id="createProductBtn" type="submit" disabled={loading ? true : false}>
                            Update
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default UpdateCompany;
