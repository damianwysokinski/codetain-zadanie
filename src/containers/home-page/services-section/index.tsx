import SectionTitle from '../../../components/common/SectionTitle'
import SectionWrapper from '../../../components/common/SectionWrapper'
import ServiceItem from '../../../components/ServiceItem'

const ServicesSection: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Services" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceItem
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit blanditiis officiis voluptatibus modi sint, at
            veritatis deserunt numquam laboriosam expedita voluptates."
        />
        <ServiceItem
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit blanditiis officiis voluptatibus modi sint, at
            veritatis deserunt numquam laboriosam expedita voluptates."
        />
        <ServiceItem
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit blanditiis officiis voluptatibus modi sint, at
            veritatis deserunt numquam laboriosam expedita voluptates."
        />
      </div>
    </SectionWrapper>
  )
}

export default ServicesSection
