const HeroSection: React.FC = () => {
  return (
    <section className="relative px-4 md:px-16 flex items-center border-b border-gray-200 h-screen">
      <picture>
        <source
          srcSet="/hero-bg-mobile.webp"
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          srcSet="/hero-bg-mobile.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />

        <source srcSet="/hero-bg.webp" type="image/webp" />
        <source srcSet="/hero-bg.jpg" type="image/jpeg" />

        <img
          src="/hero-bg.jpg"
          alt="A clear blue sky above majestic mountains, creating a serene and picturesque landscape."
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </picture>
      <div className="max-w-5xl mx-auto z-0">
        <h1 className="text-5xl font-bold text-center leading-none md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 text-transparent bg-clip-text">
          Damian Wysokiński
        </h1>
      </div>
    </section>
  )
}

export default HeroSection
