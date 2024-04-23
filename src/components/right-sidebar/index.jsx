import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { toggleRightSidebar } from '../../app/appSlice';
import { PanelLeftOpen, PanelRightOpen } from "lucide-react"
import { NavLink } from "react-router-dom";

const RightSidebar = () => {
    const dispatch = useDispatch();
    const isRightSidebarOpen = useSelector((state) => state.app.isRightSidebarOpen);

    const handleRightSidebarToggle = () => {
        dispatch(toggleRightSidebar());
    };
    return (
        <aside className={`h-full w-1/6 bg-black p-2 flex flex-col gap-2 transition-all fixed top-0 right-0 ${isRightSidebarOpen ? "" : "w-28"}`}>

            <div className={`top bg-zinc-900 rounded-lg p-4 ${isRightSidebarOpen ? "w-full" : "w-full py-4 px-0"}`}>
                <ul className="flex flex-col gap-5">
                    <li className="w-full menu-item">
                        <NavLink to={"/"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isRightSidebarOpen ? "" : "justify-center"}`}>
                            <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.9167 27.9136V10.3487L16.5036 4.25261L6.08333 10.3948V27.9136H11.6389V21.0368C11.6389 19.3084 13.038 17.9072 14.7639 17.9072H18.2361C19.962 17.9072 21.3611 19.3084 21.3611 21.0368V27.9136H26.9167ZM27.9583 30C28.5336 30 29 29.5329 29 28.9568V9.75018C29 9.37949 28.8036 9.03665 28.484 8.84957L17.0275 2.14259C16.7018 1.95191 16.2986 1.95251 15.9734 2.14417L4.51329 8.89932C4.19525 9.08679 4 9.42878 4 9.79835V28.9568C4 29.5329 4.46637 30 5.04167 30H12.6805C13.2558 30 13.7222 29.5329 13.7222 28.9568V21.0368C13.7222 20.4606 14.1886 19.9936 14.7639 19.9936H18.2361C18.8114 19.9936 19.2778 20.4606 19.2778 21.0368V28.9568C19.2778 29.5329 19.7442 30 20.3195 30H27.9583Z" fill="rgb(113, 113, 113)" />
                            </svg>
                            <span className={`font-semibold hover:text-white ${isRightSidebarOpen ? "" : "hidden"}`}>Home</span>
                        </NavLink>
                    </li>
                    {/* <li className="w-full menu-item">
                        <NavLink to={"#"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isRightSidebarOpen ? "" : "justify-center"}`}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7747 22.3561L29.5924 28.4934C30.1511 29.0828 30.1332 30.0268 29.5524 30.5933C28.9808 31.1511 28.078 31.1329 27.5282 30.5526L21.7061 24.4083C19.7272 25.93 17.4956 26.7673 15.0114 26.9203C13.3514 27.0226 11.7438 26.792 10.1886 26.2288C8.63335 25.6655 7.2766 24.8625 6.11833 23.8199C4.96006 22.7772 4.01249 21.5057 3.27561 20.0055C2.53874 18.5053 2.12096 16.9125 2.02229 15.2271C1.92361 13.5418 2.15262 11.9092 2.70933 10.3292C3.26604 8.74932 4.05852 7.37069 5.08678 6.19334C6.11504 5.01599 7.36839 4.05225 8.84685 3.30212C10.3253 2.55198 11.8945 2.1258 13.5543 2.02356C15.2142 1.92132 16.8218 2.15183 18.3771 2.7151C19.9324 3.27837 21.2892 4.08134 22.4474 5.12402C23.6055 6.16669 24.5531 7.43815 25.2901 8.93838C26.027 10.4386 26.4448 12.0314 26.5434 13.7168C26.606 14.7861 26.5356 15.8403 26.3321 16.8793C26.1287 17.9184 25.8096 18.8946 25.3747 19.8079C24.9399 20.7212 24.4066 21.5706 23.7747 22.3561ZM14.84 23.9912C16.1107 23.9129 17.3094 23.5854 18.436 23.0085C19.5626 22.4317 20.519 21.6933 21.305 20.7934C22.091 19.8934 22.6986 18.8412 23.1279 17.6365C23.5572 16.4319 23.7341 15.1845 23.6586 13.8944C23.5831 12.6042 23.262 11.3875 22.6953 10.2442C22.1286 9.10096 21.4026 8.13081 20.5173 7.33378C19.632 6.53674 18.5964 5.92105 17.4106 5.48669C16.2247 5.05232 14.9965 4.87428 13.7258 4.95255C12.4551 5.03081 11.2565 5.35835 10.1298 5.93514C9.00317 6.51194 8.04682 7.25035 7.26078 8.15038C6.47473 9.0504 5.86709 10.1027 5.43783 11.3072C5.00858 12.5117 4.83171 13.7591 4.90721 15.0494C4.98272 16.3396 5.3038 17.5563 5.87045 18.6995C6.4371 19.8427 7.16312 20.8128 8.04853 21.6099C8.93394 22.407 9.96951 23.0227 11.1552 23.457C12.341 23.8913 13.5692 24.0694 14.84 23.9912Z" fill="rgb(113, 113, 113)" />
                            </svg>
                            <span className={`font-semibold hover:text-white ${isRightSidebarOpen ? "" : "hidden"}`}>Search</span>
                        </NavLink>
                    </li> */}
                    <li className="w-full menu-item">
                        <NavLink to={"/library"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isRightSidebarOpen ? "" : "justify-center"}`}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="3" height="26" rx="1.5" fill="rgb(113, 113, 113)" />
                                <rect x="11" y="3" width="3" height="26" rx="1.5" fill="rgb(113, 113, 113)" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5 6.67524V26.5191H26.5V9.76681L21.5 6.67524ZM20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z" fill="rgb(113, 113, 113)" />
                            </svg>
                            <span className={`font-semibold hover:text-white ${isRightSidebarOpen ? "" : "hidden"}`}>Your Library</span>

                        </NavLink>
                    </li>
                    <li className="w-full menu-item">
                        <NavLink to={"/your-playlist"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isRightSidebarOpen ? "" : "justify-center"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-music"><path d="M21 15V6" /><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M12 12H3" /><path d="M16 6H3" /><path d="M12 18H3" /></svg>
                            <span className={`font-semibold hover:text-white ${isRightSidebarOpen ? "" : "hidden"}`}>Your Playlist</span>
                        </NavLink>
                    </li>
                    <li className="w-full menu-item">
                        <NavLink to={"/liked-songs"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isRightSidebarOpen ? "" : "justify-center"}`}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="2" fill="url(#paint0_linear_416_1905)" />
                                <path d="M16.0006 10.158C17.6448 8.56071 20.1858 8.61373 21.7699 10.3307C23.3532 12.0484 23.4078 14.784 21.9351 16.5684L15.9992 23L10.0647 16.5684C8.59191 14.784 8.64721 12.0439 10.2299 10.3307C11.8154 8.616 14.3514 8.55844 16.0006 10.158Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_416_1905" x1="1" y1="1" x2="32" y2="30.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3822EA" />
                                        <stop offset="1" stopColor="#C7E9D7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={`font-semibold hover:text-white ${isRightSidebarOpen ? "" : "hidden"}`}>Liked Songs</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`bottom bg-zinc-900 rounded-lg p-2 pt-3 overflow-auto ${isRightSidebarOpen ? "w-full" : "w-full py-4 px-0"} h-screen flex items-start justify-start flex-col`}>
                <button onClick={handleRightSidebarToggle} className={`w-full flex justify-start ${isRightSidebarOpen ? "" : "justify-center"}`}>
                    {isRightSidebarOpen ? <PanelLeftOpen color="gray" size={26} /> : <PanelRightOpen color="gray" size={26} />}
                </button>
            </div>
        </aside>
    )
}

RightSidebar.propTypes = {
    rightSidebar: PropTypes.bool,
    setRightSidebar: PropTypes.func,
}

export default RightSidebar