import "./Stories.css"
import { FaEarthAfrica } from "react-icons/fa6";
import { FaBeer } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import { FaBook } from "react-icons/fa";







function Stories() {
    return (
        <>
            <div className="container-0">

                <div className="container-1">
                    <div className="container-2">
                        <h3>I Moved My Digital </h3>
                        <p><FaEarthAfrica className="earth-icon" />gooogle.com</p>
                    </div>
                    <div className="bookmark-icon">
                        <FaRegBookmark size={28} /><FcBookmark size={40} />
                    </div>

                </div>
                <hr />

                <div className="container-3">
                    <div className="new-deails">
                        <div className="like-container">

                            <AiFillLike size={25} /><b>point</b>

                            <IoIosTime size={25} /><b>time</b></div>


                    </div>

                    <div className="author">
                        <FaBook size={20}/>
                        <b>author</b>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Stories