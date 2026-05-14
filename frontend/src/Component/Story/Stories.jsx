import "./Stories.css"
import { FaEarthAfrica } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { useContext } from "react";
import { StoreContextCreated } from "../../StoreContext";

function Stories() {
  const { storiesdata } = useContext(StoreContextCreated);

  return (
    <>
      {storiesdata && storiesdata.map((story) => (
        <div key={story._id} className="container-0">

          <div className="container-1">
            <div className="container-2">
              <h3>{story.title}</h3>
              <p>
                <FaEarthAfrica className="earth-icon" />
                {story.url}
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
                <b>{story.points} points</b>
                <IoIosTime size={25} />
                <b>{new Date(story.postedAt).toLocaleString()}</b>
              </div>
            </div>

            <div className="author">
              <FaBook size={20} />
              <b>{story.author}</b>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Stories;
