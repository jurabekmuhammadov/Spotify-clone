import { ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import DropDown from "../ui/dropdown";
import useFeaturedPlaylists from "../../hooks/useFeaturedPlaylists";
import playIcon from "/play.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const goPlaylist = (playlist, id) => {
        localStorage.setItem("single-playlist", JSON.stringify(playlist))
        navigate(`/playlist/${id}`);
    }
    const featuredPlaylist = useFeaturedPlaylists();

    return (
        <header className="from-slate-600 text-white py-3">
            <div className="top flex justify-between">
                <div className="left">
                    <button>
                        <ChevronLeft color="white" />
                    </button>
                    <button>
                        <ChevronRight color="white" />
                    </button>
                </div>
                <div className="right flex items-center gap-4">
                    <button>Explore Premium</button>
                    <button>Install App</button>
                    <Link to={"/news"}>
                        <Bell />
                    </Link>
                    <DropDown />
                </div>
            </div>
            <div className="bottom">
                <h1>Good Afternoon</h1>
                <div className="cards grid grid-cols-3">
                    {featuredPlaylist.slice(0, 6).map((item) => (
                        <div onClick={() => goPlaylist(item, item.id)} key={item.id} className="flex items-center cursor-pointer">
                            <img src={item.images[0].url} alt="" className="w-20 h-20" />
                            <span>{item.name}</span>
                            <button>
                                <img width="50px" height="50px" src={playIcon} alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header