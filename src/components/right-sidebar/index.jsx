import PropTypes from "prop-types";
const RightSidebar = ({rightSidebar, setRightSidebar}) => {
    return (
        <div className={`bg-zinc-900 h-screen w-full p-2 ${rightSidebar ? "w-full" : "hidden"}`}>
            <button onClick={() => setRightSidebar((curr) => !curr)} className="text-white">Close</button>
        </div>
    )
}

RightSidebar.propTypes = {
    rightSidebar: PropTypes.bool,
    setRightSidebar: PropTypes.func,
}

export default RightSidebar