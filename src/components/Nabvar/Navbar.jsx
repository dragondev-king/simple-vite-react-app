import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to='/welcome'>Welcome page</Link>
            <Link to='/profile'>Profile page</Link>
        </div>
    )
}

export default Navbar
