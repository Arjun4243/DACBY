

import { createContext, useState, useCallback, useEffect } from "react";
import { jwtDecode } from "jwt-decode";





export const StoreContextCreated = createContext();

export const StoreContextProvider = ({ children }) => {

    let url;
    if (window.location.hostname === "localhost") {
        // Local development
        url = "http://localhost:3000";
    } else {
        // Production (Render)
        url = "https://dacby-10-00.onrender.com";
    }


    //GlobalNotification handler down
    const [globalNotificationShow, setGlobalNotificationShow] = useState({
        show: false,
        headline: "",
        image: "f",
        message: ""
    });
    //GlobalNotification handler up

    const [registerShow, setRegisterShow] = useState(false);
    const [switchLoginShow, setSwitchLoginShow] = useState("Register");




    //register form data handler down
    const [RegisterFormData, setRegisterFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const registerhandlerChanges = useCallback((e) => {
        e.preventDefault();

        const { name, value } = e.target

        setRegisterFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    }, [])
 
    const registerHandler = useCallback(async (e) => {
        e.preventDefault();

        const response = await fetch(`${url}/api/user/${switchLoginShow}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(RegisterFormData)
        });

        // Parse the JSON body into a JS object
        const data = await response.json();

        if (data.status === true) {
            setGlobalNotificationShow({
                show: true,
                headline: data.headline,
                image: data.image,
                message: data.message
            });

            localStorage.setItem("token", data.token);

            setTimeout(() => {
                setGlobalNotificationShow({
                    show: false,
                    headline: "",
                    image: "",
                    message: ""
                });
                window.location.reload();
            }, 3000);
        } else {
            setGlobalNotificationShow({
                show: true,
                headline: data.headline,
                image: data.image,
                message: data.message
            });

            setTimeout(() => {
                setGlobalNotificationShow({
                    show: false,
                    headline: "",
                    image: "",
                    message: ""
                });
                
            }, 3000)
        }



        console.log("register form data", RegisterFormData);
    }, [RegisterFormData, switchLoginShow])
    //register form data handler up







    //logout functionality down

    const logouthandler=useCallback(()=>{
        localStorage.removeItem("token");
        setGlobalNotificationShow({
            show: true,
            headline: "Logout",
            image: "/image/green right.gif",
            message: "Logout Successfully"
        });

        setTimeout(()=>{
            setGlobalNotificationShow({
                show: false,
                headline: "",
                image: "",
                message: ""
            });

            window.location.reload();
        }, 3000);

    }, [])


    //logout functionality up


    // get stories from backed down

    const [storiesdata, setStoriesdata] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/api/story/storyGet`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch stories");
      }

      const data = await response.json();
      setStoriesdata(data)
      console.log("stories fetched", data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  fetchData();
}, []); // dependency array


    //get stories from backedn up 








    
    //getSingleStory down

  const [singleStory, setSingleStory] = useState({
    id: "",
    title: "",
    url: "",
    points: "",
    author: "",
    postedAt: ""
  });

    const handleSingleStory =useCallback(async(id)=>{
        
        const response = await fetch(`${url}/api/story/${id}`,)
        const data = await response.json()

        setSingleStory({
            id: data._id,
            title: data.title,
            url: data.url,
            points: data.points,
            author: data.author,
            postedAt: data.postedAt
        })

        console.log("singleStory",data)

    })
    //getSingleStory up


    //bookmark functionality down
    
    const togglehandler=useCallback(async(storyid)=>{
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/api/story/${storyid}/bookmark`,
         {
          method: "POST",
          headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`
          }
 
         }          
        )
        const data=await response.json()

        if (data.story) {
            setStoriesdata(old => old.map(e => 
                e._id === storyid ? { ...e, bookmarkedBy: data.story.bookmarkedBy } : e
            ));
        }

        
    }, [url])

 
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        const token=localStorage.getItem("token")
        if(token){
            const decodedToken=jwtDecode(token)
            setCurrentUserId(decodedToken.userId)
        }

       console.log("currentUserId",currentUserId)
    }, [])

    


    //bookmark functionality up 




    const contextValue = {
        registerShow,
        setRegisterShow,

        switchLoginShow,
        setSwitchLoginShow,

        //register form data handler
        RegisterFormData,
        registerHandler,
        setRegisterFormData,
        registerhandlerChanges,


        //url
        url,

        //GlobalNotification handler
        globalNotificationShow,
        setGlobalNotificationShow,

        //logout handler
        logouthandler,
        

        //fatch all storeis
        storiesdata,

        //singlestory
        singleStory,
        handleSingleStory,

        //toggle
        togglehandler,

        //currentuser
        currentUserId



    }

    return (
        <StoreContextCreated.Provider value={contextValue}>
            {children}
        </StoreContextCreated.Provider>
    )
}   