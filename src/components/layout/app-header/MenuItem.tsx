import { NavLink } from 'react-router'

interface MenuItemProps {
    to: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, label }) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `text-lg sm:text-sm text-gray-900 ${isActive ? 'font-bold' : ''}`
                }
            >
                {label}
            </NavLink>
        </li>
    )
}

export default MenuItem;
