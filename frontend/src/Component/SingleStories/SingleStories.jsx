import "./SingleStories.css"
import { FaEarthAfrica } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { useContext } from "react";
import { StoreContextCreated } from "../../StoreContext";


function SingleStories() {
    const { storiesdata,singleStory,handleSingleStory } = useContext(StoreContextCreated);

    return (
        <>

            <div  className="container-0">

                <div className="container-1">
                    <div className="container-2">
                        <h3>{singleStory.title}</h3>
                        <p>
                            <FaEarthAfrica className="earth-icon" />
                            {singleStory.url}
                        </p>
                    </div>
                    <div className="bookmark-icon">
                        <FaRegBookmark size={28} />
                        <FcBookmark size={40} />
                    </div>
                </div>

                <hr />

                <div className="container-3">
                    <div className="new-details">
                        <div className="like-container">
                            <AiFillLike size={25} />
                            <b>{singleStory.points} points</b>
                            <IoIosTime size={25} />
                            <b>{new Date(singleStory.postedAt).toLocaleString()}</b>
                        </div>
                    </div>

                    <div className="author">
                        <FaBook size={20} />
                        <b>{singleStory.author}</b>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SingleStories;
