import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

import SideBar from "../layout/Sidebar/Sidebar";

import { UPDATE_MENU_RESET } from "../../../redux/constants/menuConstants";
import { clearError, updateMenu, getMenuDetails } from "../../../redux/actions/menuActions";



const UpdateMenu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const alert = useAlert();

    const menuId = id;

    const lang = localStorage.getItem("lng");
    const { error, menuData } = useSelector((state) => state.menuDetails);

    const { loading, error: updateError, isUpdated} = useSelector((state) => state.menu);

    const [title_en, setTitleEn] = useState("");
    const [title_ar, setTitleAr] = useState("");
    const [description_en, setDescriptionEn] = useState("");
    const [description_ar, setDescriptionAr] = useState("");
    const [category, setCategory] = useState([]);

    useEffect(() => {
        /*if(menuData && menuData.id !== menuId){
            dispatch(getMenuDetails(menuId, lang));
        }else{
            setTitleEn(menuData?.en_title || "");
            setTitleAr(menuData?.ar_title || "");
            setDescriptionEn(menuData?.en_description || "");
            setDescriptionAr(menuData?.ar_description || "");
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
            alert.success("Menu Updated Successfully");
            navigate("/admin/menu");
            dispatch({ type: UPDATE_MENU_RESET });
        }
        

    }, [dispatch, alert, navigate, isUpdated, updateError, error, lang]);



    const updateEventSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("en_title", title_en);
        myForm.set("ar_title", title_ar);
        myForm.set("en_description", description_en);
        myForm.set("ar_description", description_ar);
        myForm.set("category_id", category);

        dispatch(updateMenu(menuId, myForm, lang));
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
                        <h1>Update Menu</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Menu English Title"
                                required
                                value={title_en}
                                onChange={(e) => setTitleEn(e.target.value)}
                            />
                        </div>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type="text"
                                placeholder="Menu Arabic Title"
                                required
                                value={title_ar}
                                onChange={(e) => setTitleAr(e.target.value)}
                            />
                        </div>

                        <div>
                            <DescriptionIcon />

                            <textarea
                                placeholder="Menu English Description"
                                value={description_en}
                                onChange={(e) => setDescriptionEn(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>

                        <div>
                            <DescriptionIcon />

                            <textarea
                                placeholder="Menu Arabic Description"
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


                        <Button id="createProductBtn" type="submit" disabled={loading ? true : false}>
                            Update
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default UpdateMenu;
