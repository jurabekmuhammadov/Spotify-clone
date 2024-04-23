import { removeFromPlaylist } from "../app/appSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
const YourPlaylist = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const playlist = JSON.parse(localStorage.getItem("playlist"));

    const removeFromPlaylistHandler = (trackId) => {
        dispatch(removeFromPlaylist(trackId));
        navigate("/your-playlist");
    };
    return (
        <div className="flex flex-col gap-3">
            {
                playlist.length > 0  ? (playlist.map((item) =>
                <div key={item.id} className="bg-red-500 p-2 text-white w-40">
                    {item.name}
                    <button className="bg-green-500 p-2" onClick={() => removeFromPlaylistHandler(item.id)}>Remove</button>
                </div>)) : (<h1 className="text-white">You don`t have any songs added to playlists yet</h1>)
            }
        </div>
    )
}

export default YourPlaylist