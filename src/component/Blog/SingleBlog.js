import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useAlert } from "react-alert";

import { getBlogDetails } from "../../redux/actions/blogActions";


import "./singleblog.css";
const SingleBlog = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { id } = useParams();

    const lang = localStorage.getItem("lng");
    const { error, blogData } = useSelector((state) => state.blogDetails);

    useEffect(() => {
        if (error) { return alert.error(error);}

        dispatch(getBlogDetails(id, lang));

    }, [alert, dispatch, error, id, lang]);

  return (
    <div className='singleBlog'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='blogImg'>
                        <img src={blogData?.image} alt="" />
                    </div>
                    <div className='infoblog'>
                        <h3 style={{ marginBottom: "20px"}} >{lang === "ar"? blogData?.ar_title: blogData?.en_title}</h3>
                        <p>{lang === "ar"? blogData?.ar_description: blogData?.en_description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog