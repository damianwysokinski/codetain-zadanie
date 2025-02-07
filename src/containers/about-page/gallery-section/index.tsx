import SectionWrapper from '../../../components/common/SectionWrapper'

const GallerySection: React.FC = () => {
  return (
    <SectionWrapper>
      <h2 className="text-base text-gray-500 uppercase mb-8">Gallery</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <picture>
            <source srcSet="/gallery-1.webp" type="image/webp" />
            <source srcSet="/gallery-1.png" type="image/png" />
            <img
              src="/gallery-1.png"
              alt="A breathtaking view of terraced hills overlooking a coastal landscape, with the sun shining brightly in a clear blue sky."
              className="w-full rounded-xl"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source srcSet="/gallery-3.webp" type="image/webp" />
            <source srcSet="/gallery-3.png" type="image/png" />
            <img
              src="/gallery-3.png"
              alt="A man in a white shirt and black shorts stands on a sunlit street lined with palm trees and parked cars under a blue sky."
              className="w-full rounded-xl"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source srcSet="/gallery-2.webp" type="image/webp" />
            <source srcSet="/gallery-2.png" type="image/png" />
            <img
              src="/gallery-2.png"
              alt="Night view of a modern illuminated pedestrian bridge leading to buildings with lit facades."
              className="w-full rounded-xl"
            />
          </picture>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default GallerySection
