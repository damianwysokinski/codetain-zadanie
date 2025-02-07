import SectionTitle from '../../../components/common/SectionTitle'
import SectionWrapper from '../../../components/common/SectionWrapper'

const TechnologiesSection: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="What I Use" />
      <p className="text-base text-gray-900">
        HTML5, CSS3, SASS, JavaScript, React.js, Vue.js, Pinia, JQuery, Next.js,
        Nuxt.js, Tailwind CSS, Shopify, BigCommerce, WordPress, Docker, GraphQL,
        Git, Figma, Trello, Asana, Jira
      </p>
    </SectionWrapper>
  )
}

export default TechnologiesSection
