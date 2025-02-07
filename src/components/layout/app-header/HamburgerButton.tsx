interface HamburgerButtonProps {
  onClick: () => void
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <button
      className="sm:hidden p-2 cursor-pointer"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
      <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
      <span className="block w-6 h-0.5 bg-gray-900"></span>
    </button>
  )
}

export default HamburgerButton
