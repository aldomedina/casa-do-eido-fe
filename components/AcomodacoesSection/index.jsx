import AcomodacoesCard from "./AcomodacoesCard";

const AcomodacoesSection = ({ title, content, items, customSectionClass }) => {
  return (
    <section className={customSectionClass}>
      <div className="container">
        <div className="bg-beige md:ml-20 pb-10">
          <div className="w-10/12 md:w-2/5 p-5 md:p-10 mb-5">
            <h3 className="title mb-5">{title}</h3>
            <p className="text-md font-light">{content}</p>
          </div>
          {items &&
            items.map((el, i) => (
              <AcomodacoesCard key={el.name + i} item={el} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AcomodacoesSection;
