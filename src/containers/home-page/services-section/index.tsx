import SectionWrapper from '../../../components/common/SectionWrapper'

const ServicesSection: React.FC = () => {
    return (
        <SectionWrapper>
            <h2 className="text-base text-gray-500 uppercase mb-8">
                Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h3 className="mb-4 font-bold text-xl">Lorem ipsum dolor sit amet</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit blanditiis officiis voluptatibus modi sint, at veritatis deserunt numquam laboriosam expedita voluptates.
                    </p>
                </div>
                <div>
                    <h3 className="mb-4 font-bold text-xl">Lorem ipsum dolor sit amet</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit blanditiis officiis voluptatibus modi sint, at veritatis deserunt numquam laboriosam expedita voluptates.
                    </p>
                </div>
                <div>
                    <h3 className="mb-4 font-bold text-xl">Lorem ipsum dolor sit amet</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit blanditiis officiis voluptatibus modi sint, at veritatis deserunt numquam laboriosam expedita voluptates.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ServicesSection