interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-base text-gray-500 uppercase mb-8">{title}</h2>
}

export default SectionTitle
