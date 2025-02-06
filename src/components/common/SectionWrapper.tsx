import { ReactNode } from 'react'

type SectionWrapperProps = {
    children: ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
    return (
        <section className="px-4 md:px-16 py-32 border-b border-gray-200">
            <div className="max-w-5xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
