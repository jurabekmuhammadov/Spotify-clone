import { useState } from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import RightSidebar from "../components/right-sidebar";
import useTopMixes from "../hooks/useTopMixes";
import useMadeForYou from "../hooks/useMadeForYou";
import useRecentlyPlayed from "../hooks/useRecentlyPlayed";
import useJumpBackIn from "../hooks/useJumpBackIn";
import useUniquelyYours from "../hooks/useUniquelyYours";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [rightSidebar, setRightSidebar] = useState(true);
  const topMixes = useTopMixes();
  const madeForYou = useMadeForYou();
  const recentlyPlayed = useRecentlyPlayed();
  const jumpBackIn = useJumpBackIn();
  const uniquelyYours = useUniquelyYours();

  const goPlaylist = (playlist, id) => {
    localStorage.setItem("single-playlist", JSON.stringify(playlist))
    navigate(`/playlist/${id}`);
  }

  const goAllPlaylist = (allPlaylist) => {
    localStorage.setItem("all-playlists", JSON.stringify(allPlaylist));
    navigate(`/all-playlists`);
  }
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>

      <main className="w-4/5 px-3">
        <Header />
        <div className="top-mixes flex flex-row gap-4">
          {rightSidebar ? (topMixes.slice(0, 4).map((item) => (
            <div key={item.id} className="text-white p-2 bg-red-500"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          ))) : (topMixes.slice(0, 5).map((item) => (
            <div key={item.id} className="text-white p-2 bg-red-500"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          )))}
          <button className="bg-green-500" onClick={() => goAllPlaylist(topMixes)}>See all</button>
        </div>
        <div className="made-for-you flex flex-row gap-4">
          {rightSidebar ? (madeForYou.slice(0, 4).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          ))) : (madeForYou.slice(0, 5).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          )))}
          <button className="bg-green-500" onClick={() => goAllPlaylist(madeForYou)}>See all</button>
        </div>
        <div className="recently-played flex flex-row gap-4">
          {rightSidebar ? (recentlyPlayed.slice(0, 4).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          ))) : (recentlyPlayed.slice(0, 5).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          )))}
          <button className="bg-green-500" onClick={() => goAllPlaylist(recentlyPlayed)}>See all</button>
        </div>
        <div className="jump-back-in flex flex-row gap-4">
          {rightSidebar ? (jumpBackIn.slice(0, 4).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          ))) : (jumpBackIn.slice(0, 5).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          )))}
          <button className="bg-green-500" onClick={() => goAllPlaylist(jumpBackIn)}>See all</button>
        </div>
        <div className="uniquely-yours flex flex-row gap-4">
          {rightSidebar ? (uniquelyYours.slice(0, 4).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          ))) : (uniquelyYours.slice(0, 5).map((item) => (
            <div key={item.id} className="text-white"><button onClick={() => goPlaylist(item, item.id)}>{item.name}</button></div>
          )))}
          <button className="bg-green-500" onClick={() => goAllPlaylist(uniquelyYours)}>See all</button>
        </div>
      </main>

      <div className="w-1/5">
        <RightSidebar rightSidebar={rightSidebar} setRightSidebar={setRightSidebar} />
      </div>
    </div>
  )
}

export default Home