import { NavLink } from 'react-router'

const NotFound: React.FC = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-5xl font-bold leading-none md:text-6xl">
                        404 Not Found
                    </h1>
                    <NavLink to="/" className="mb-8 text-blue-600 block">
                        &lt; Go back to Homepage
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default NotFound