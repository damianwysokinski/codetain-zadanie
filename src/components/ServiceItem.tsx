type ServiceItemProps = {
  title: string
  description: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => (
  <div>
    <h3 className="mb-4 font-bold text-xl">{title}</h3>
    <p>{description}</p>
  </div>
)

export default ServiceItem
