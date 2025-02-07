const AppFooter: React.FC = () => {
  return (
    <footer className="p-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-gray-500">
          Damian Wysokiński {new Date().getFullYear()} © All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
