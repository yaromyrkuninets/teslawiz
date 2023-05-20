import { useEffect, useState } from "react"
import {IoIosArrowDropupCircle} from "react-icons/io";

const ScrollToTopButton = () => {

    const [scrollToTopButton, setScrollToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1700) {
                setScrollToTopButton(true)
            } else {
                setScrollToTopButton(false)
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="ScrollToTopButton">
            {scrollToTopButton && (
                <button className="scrolltotopbutton" onClick={scrollUp}>
                    <IoIosArrowDropupCircle onClick={scrollUp} className="arrow scrolltotopbutton"/>
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton