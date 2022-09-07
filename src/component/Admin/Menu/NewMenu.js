import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

import { useAlert } from "react-alert";

import SideBar from "../layout/Sidebar/Sidebar";
import "../Event/newEvent.css";

import { clearError, createMenu } from "../../../redux/actions/menuActions";
import { CREATE_MENU_RESET } from "../../../redux/constants/menuConstants";

const NewMenu = () => {

    
    /**/
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, error, success } = useSelector((state) => state.createMenu);

    const [title_en, setTitleEn] = useState("");
    const [title_ar, setTitleAr] = useState("");
    const [description_en, setDescriptionEn] = useState("");
    const [description_ar, setDescriptionAr] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }

        if (success) {
            alert.success("Menu Created Successfully");
            navigate("/admin/menu");
            dispatch({ type: CREATE_MENU_RESET });
        }
        
    }, [dispatch, alert, error, success, navigate]);

    const createEventSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("en_title", title_en);
        myForm.set("ar_title", title_ar);
        myForm.set("en_description", description_en);
        myForm.set("ar_description", description_ar);
        myForm.set("category_id", category);

        dispatch(createMenu(myForm));
    };

    return (
        <Fragment>
            <div className="dashboard">
                <SideBar />

                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={createEventSubmitHandler}
                    >

                        <h1>Create Menu</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="English Menu title"
                                required
                                value={title_en}
                                onChange={(e) => setTitleEn(e.target.value)}
                            />
                        </div>
                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Arabic Menu title"
                                required
                                value={title_ar}
                                onChange={(e) => setTitleAr(e.target.value)}
                            />
                        </div>

                        <div>
                            <DescriptionIcon />
                            <textarea
                                placeholder="English Menu Description"
                                value={description_en}
                                onChange={(e) => setDescriptionEn(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>
                        <div>
                            <DescriptionIcon />
                            <textarea
                                placeholder="Arabic Menu Description"
                                value={description_ar}
                                onChange={(e) => setDescriptionAr(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>


                        <div>
                            <AccountTreeIcon />
                            <select onChange={(e) => setCategory(e.target.value)}>
                                <option value="5">Main Course</option>
                                <option value="6">Chicken</option>
                                <option value="7">Seafood</option>
                                <option value="4">Pasta</option>
                                <option value="8">Appetizers</option>
                                <option value="9">Vegetarian</option>
                                <option value="3">Salads</option>
                                <option value="10">Dessert</option>
                                <option value="11">Beverage</option>
                            </select>
                        </div>

                        <Button id="createProductBtn" type="submit" disabled={loading ? true : false}  >
                            Create
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default NewMenu;
