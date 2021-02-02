    import { Link } from 'react-router-dom';
    
    const Navbar = () => {
        return ( 

        <nav className="Navbar">
            <h1>Blog</h1>
            <div className="Links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>

            </div>
        </nav>


         );
    }
     
    export default Navbar;