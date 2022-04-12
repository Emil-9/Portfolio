import "./section-page-layout.css";
const SectionPage = (prop) => {
  return (
    <section id={prop.id} className="mainContainer" style={{ backgroundColor: prop.pageColor }}>
      <div className="sectionContainer">{prop.child}</div>
    </section>
  );
};
export default SectionPage;
