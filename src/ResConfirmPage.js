import React from "react";
import { useLocation } from "react-router-dom";
import ResConfirm from "./components/ResConfirm";
import './ResConfirmPage.css';


const ResConfirmPage = () => {
    const location = useLocation();
    const { formData } = location.state || {};
    return (
        <>
            {formData && <ResConfirm formData={formData} />}
        </>
    );
};
export default ResConfirmPage;