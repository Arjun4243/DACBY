import "./Stories.css"
import { FaEarthAfrica } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { useContext } from "react";
import { StoreContextCreated } from "../../StoreContext";
import { Link } from "react-router-dom";

function Stories() {
  const { storiesdata,handleSingleStory } = useContext(StoreContextCreated);

  return (
    <>
      {storiesdata && storiesdata.map((e) => (
        <div key={e._id} className="container-0" onClick={() => handleSingleStory(e._id)}>
         
          <div className="container-1">
            <div className="container-2">
               <Link to={`/story/${e._id}`}><h3>{e.title}</h3></Link>
              <p>
                <FaEarthAfrica className="earth-icon" />
                {e.url}
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
                <b>{e.points} points</b>
                <IoIosTime size={25} />
                <b>{new Date(e.postedAt).toLocaleString()}</b>
              </div>
            </div>

            <div className="author">
              <FaBook size={20} />
              <b>{e.author}</b>
            </div>
          </div>
          
        </div>
      ))}
    </>
  );
}

export default Stories;
