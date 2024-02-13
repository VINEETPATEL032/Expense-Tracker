import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className='text-2xl font-semibold flex items-center justify-center gap-4 text-blue-600'>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/show">Show</Link>
        </div>
    );
};

export default Nav;
