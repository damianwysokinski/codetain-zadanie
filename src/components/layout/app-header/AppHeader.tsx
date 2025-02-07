import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import HamburgerButton from './HamburgerButton'
import Logo from '../../common/Logo'
import Menu from './Menu'

const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="p-4 backdrop-blur-xl bg-white/60 fixed z-50 left-0 right-0 border-b border-gray-200">
      <nav className="flex items-center justify-between max-w-5xl mx-auto">
        <Logo />
        <HamburgerButton onClick={toggleMenu} />
        <Menu isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  )
}

export default AppHeader
