import "./SingleStories.css"
import { FaEarthAfrica } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FcBookmark } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { useContext,useState } from "react";
import { StoreContextCreated } from "../../StoreContext";
import { useNavigate } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";





function SingleStories() {
    const { storiesdata,singleStory,handleSingleStory } = useContext(StoreContextCreated);

    const navigate = useNavigate();

      const [expanded, setExpanded] = useState(false);


  const handleToggleHeight = () => {
    setExpanded(!expanded);
  };
    return (
        <>

            <div className={`container-0 ${expanded ? "expanded" : ""}`} onClick={() => (handleToggleHeight())}>

                <div className="container-1">
                    <FaWindowClose 
                        size={28} 
                        id="close-button" 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            navigate(-1);
                        }} 
                    />
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
                <iframe
                src={singleStory.url}
                title="Story Website"
                height="500px"
                width="100%"
                ></iframe>
                
                <div className="iframe-fallback" style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    background: '#f8f9fa',
                    borderTop: '1px solid #ddd' 
                }}>
                    <p>Some websites prevent their content from being displayed here.</p>
                    <button 
                        onClick={(e) => { e.stopPropagation(); window.open(singleStory.url, "_blank", "noopener,noreferrer"); }}
                        style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
                    >
                        View Original Website
                    </button>
                </div>

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
