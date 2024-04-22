import { removeFromLikedSongs } from "../app/appSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

const LikedSongs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
  
  const removeFromLikedSongsHandler = (trackId) => {
    dispatch(removeFromLikedSongs(trackId));
    navigate("/liked-songs");
  };
  return (
    <div className="flex flex-col gap-3">
      {
        likedSongs.map((item) =>
          <div key={item.id} className="bg-red-500 p-2 text-white w-40">
            {item.name}
            <button className="bg-green-500 p-2" onClick={() => removeFromLikedSongsHandler(item.id)}>Unlike</button>
          </div>)
      }
    </div>
  )
}

export default LikedSongs