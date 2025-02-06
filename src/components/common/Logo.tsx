import { NavLink } from 'react-router'
import logo from '../../assets/images/logo.svg'

const Logo: React.FC = () => {
    return (
        <NavLink to="/">
            <img
                src={logo}
                width={171}
                height={25}
                alt="Damian Wysokiński logo"
            />
        </NavLink>
    );
};

export default Logo;
