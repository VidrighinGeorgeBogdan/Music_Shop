import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {data} from "../db/data";
import "./Nav.css";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import React, {useState} from "react";

const Nav = ({ handleInputChange, query }) => {

    return (
    <nav>
        <div className="nav-container">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={data}
                getOptionLabel={(option) => option.title}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} value={query} label="Search for Music..." />}
                onInputChange = {handleInputChange}
                clearOnEscape={true}
                disableClearable={true}

            />
        </div>
        <div className="profile-container">
            <Link to="/cart">
                <AiOutlineShoppingCart className="nav-icons"/>
            </Link>
        </div>
    </nav>
  );
};

export default Nav;
