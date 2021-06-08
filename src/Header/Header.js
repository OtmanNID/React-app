import React from "react";
import classes from "./Header.module.css"

const Header = () => {
    console.log(classes)
    return(
        <div className={classes.maDiv}> Mon Header </div>  
    ) 
};

export default Header;