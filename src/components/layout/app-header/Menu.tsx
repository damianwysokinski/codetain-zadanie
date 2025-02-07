import MenuItem from './MenuItem'

interface MenuProps {
  isMenuOpen: boolean
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen }) => {
  return (
    <ul
      className={`sm:space-x-8 flex items-center max-sm:space-y-8 max-sm:pt-20 max-sm:fixed max-sm:flex-col max-sm:bg-white max-sm:w-full max-sm:h-screen top-16 bottom-0 left-0 ${
        isMenuOpen ? 'flex' : 'max-sm:hidden'
      }`}
    >
      <MenuItem to="/" label="Home" />
      <MenuItem to="/about" label="About" />
      <MenuItem to="/movies" label="Movies" />
    </ul>
  )
}

export default Menu
