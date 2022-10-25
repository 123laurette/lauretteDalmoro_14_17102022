import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker className="datePicker"selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default Datepicker;