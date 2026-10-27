import { Space } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setUser(user)
            setIsAuth(true)
        }
    }, [])

    const handleChange = () => {
        setIsAuth(false)
        setUser({})
        localStorage.removeItem("user")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Todo-App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Space>
                                {!isAuth
                                    ? <>
                                        <Link to="/auth/register" className="btn btn-info">Register</Link>
                                        <Link to="/auth/login" className="btn btn-success">Login</Link>
                                    </>
                                    : <>
                                        <Link to="/dashboard" className="btn btn-info">Dashboard</Link>
                                        <Link className="btn btn-danger" onClick={handleChange}>Logout</Link>
                                    </>
                                }
                            </Space>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar