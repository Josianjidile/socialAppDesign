import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/4236831/pexels-photo-4236831.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/5054358/pexels-photo-5054358.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories