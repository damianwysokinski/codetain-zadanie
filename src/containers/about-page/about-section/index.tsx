import SectionWrapper from '../../../components/common/SectionWrapper'

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper>
      <h2 className="text-base text-gray-500 uppercase mb-8">About me</h2>

      <p className="mb-6 text-base text-gray-900">
        Hello! I'm Damian, a passionate frontend developer from Poland with a
        knack for turning design concepts into seamless, interactive web
        experiences. My expertise lies in creating responsive and user-friendly
        interfaces that not only look great but also perform flawlessly across
        devices.
      </p>
      <p className="text-base text-gray-900">
        Let's connect and explore how we can create exceptional digital
        solutions together!
      </p>
    </SectionWrapper>
  )
}

export default AboutSection
