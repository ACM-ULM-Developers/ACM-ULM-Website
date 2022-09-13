import { el } from "date-fns/locale";
import React from "react";
import { useEffect, useState } from "react";


function TopButton(){
    const [TopButton, setTopButton] = useState(false);

    useEffect (() => {
        window.addEventListener("scroll", () =>  {
            if (window.scrollY > 100) {                   {/* only if the user scrolls more than 100 px */}
                setTopButton(true)
            } else {
                setTopButton(false)
            }
    })
    },[])

    const scrollUp = () => {
        window.scrollTo ({
            top: 10,                     // takes the user to the 10 px from the top position
            behavior: "smooth"
        })
    }

    return <div className="goTop">
    { TopButton && (
        <button style={{
            //position: "fixed",
            float: "right",
            //bottom: "25px",
            height: "50px ",
            width: "50px",
            fontSize: "50px"
        }}
        onClick = {scrollUp}>
            ^                              {/* '^' up arrow symbol to direct the user*/}
        </button>
    ) }    
    </div>
}



export default TopButton;