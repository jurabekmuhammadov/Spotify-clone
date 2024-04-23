import { useNavigate } from "react-router-dom";
const Library = () => {
  const library = JSON.parse(localStorage.getItem("library"))
  const navigate = useNavigate()

  const removeFromLibrary = (playlistId) => {
    let library = JSON.parse(localStorage.getItem("library")) || [];
    library = library.filter(item => item.id !== playlistId);
    localStorage.setItem("library", JSON.stringify(library));
    navigate(`/`);
  }
  const goPlaylist = (playlist, id) => {
    localStorage.setItem("single-playlist", JSON.stringify(playlist))
    navigate(`/playlist/${id}`);
  }

  return (
    <div className="text-white">
      {
        library.length > 0 ? (library.map((item) =>
          <div key={item.id} className="bg-red-500 p-2 text-white w-40">
            {item.name}
            <button className="bg-green-500 p-2" onClick={() => removeFromLibrary(item.id)}>Remove</button>
          </div>)) : (<h1 className="text-white">You don`t have any playlists added to library yet</h1>)
      }
    </div>
  )
}

export default Library