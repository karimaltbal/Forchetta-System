import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useAlert } from "react-alert";

import { getEventDetails } from "../../redux/actions/eventActions";


import "../Blog/singleblog.css";


const EventSingle = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { id } = useParams();

    const lang = localStorage.getItem("lng");
    const { error, eventData } = useSelector((state) => state.eventDetails);

    useEffect(() => {
        if (error) { return alert.error(error);}

        dispatch(getEventDetails(id));

    }, [alert, dispatch, error, id]);

    return (
        <div className='singleBlog'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='blogImg'>
                            <img src={eventData?.image} alt="" />
                        </div>
                        <div className='infoblog'>
                            <h3 style={{ marginBottom: "20px"}} >{lang === "ar"? eventData?.ar_title: eventData?.en_title}</h3>
                            <p>{lang === "ar"? eventData?.ar_description: eventData?.en_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSingle;