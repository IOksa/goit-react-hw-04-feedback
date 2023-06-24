import css from './Section.module.css';

const Section = ({ title, children }) => <section title={title} className={css.container}>{children}</section>;  
export default Section;

