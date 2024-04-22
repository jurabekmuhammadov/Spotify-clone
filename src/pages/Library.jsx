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
        library.map((item) => (
          <div key={item.id} className="cursor-pointer">
            <span onClick={() => goPlaylist(item, item.id)}>{item.description}</span>
            <button onClick={() => removeFromLibrary(item.id)} className="text-white">Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Library