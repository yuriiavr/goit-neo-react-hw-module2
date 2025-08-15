import css from './Description.module.css'

const Description = () => {
  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <span className={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </span>
    </>
  );
};

export default Description;
