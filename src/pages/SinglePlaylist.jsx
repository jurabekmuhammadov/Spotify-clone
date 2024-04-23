import useTracks from "../hooks/useTracks";
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary, addToLikedSongs, addToPlaylist, removeFromLibrary, removeFromLikedSongs, removeFromPlaylist } from "../app/appSlice";

const SinglePlaylist = () => {
  const playlistInfo = JSON.parse(localStorage.getItem("single-playlist"));
  const tracks = useTracks(playlistInfo.id);
  const dispatch = useDispatch();
  const library = useSelector(state => state.app.library);
  const likedSongs = useSelector(state => state.app.likedSongs);
  const playlist = useSelector(state => state.app.playlist);

  const isPlaylistInLibrary = library.some(item => item.id === playlistInfo.id);

  const addToLibraryHandler = (playlist) => {
    dispatch(addToLibrary(playlist));
  };

  const removeFromLibraryHandler = (playlistId) => {
    dispatch(removeFromLibrary(playlistId));
  };

  const addToLikedSongsHandler = (track) => {
    dispatch(addToLikedSongs(track));
  };

  const removeFromLikedSongsHandler = (trackId) => {
    dispatch(removeFromLikedSongs(trackId));
  };

  const addToPlaylistHandler = (track) => {
    dispatch(addToPlaylist(track));
  };

  const removeFromPlaylistHandler = (trackId) => {
    dispatch(removeFromPlaylist(trackId));
  };

  return (
    <div>
      {isPlaylistInLibrary ? (
        <button onClick={() => removeFromLibraryHandler(playlistInfo.id)} className="text-white p-3 bg-slate-600 mx-2">Remove</button>
      ) : (
        <button onClick={() => addToLibraryHandler(playlistInfo)} className="text-white p-3 bg-slate-600 mx-2">Add to Library</button>
      )}
      {tracks.map((item, i) => {
        const isTrackInLikedSongs = likedSongs.some(song => song.id === item.track.id);
        const isTrackInPlaylist = playlist.some(song => song.id === item.track.id);
        return (
          <div key={i} className="text-white">
            <span>{item.track.name}</span>
            {isTrackInLikedSongs ? (
              <button onClick={() => removeFromLikedSongsHandler(item.track.id)} className="text-white p-3 bg-slate-600 mx-2">Unlike</button>
            ) : (
              <button onClick={() => addToLikedSongsHandler(item.track)} className="text-white p-3 bg-slate-600 mx-2">Like</button>
            )}
            {isTrackInPlaylist ? (
              <button onClick={() => removeFromPlaylistHandler(item.track.id)} className="text-white p-3 bg-slate-600 mx-2">Remove from playlist</button>
            ) : (
              <button onClick={() => addToPlaylistHandler(item.track)} className="text-white p-3 bg-slate-600 mx-2">Add to playlist</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SinglePlaylist;
