import RetiroCard from "../../components/RetiroCard";
import mock_retiros from "../../content/mock_retiros";

const Retiros = () => {
  return (
    <section>
      <div className="container grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 auto-rows-fr py-5 md:px-20 lg:px-36 md:py-10">
        {mock_retiros
          .sort(function (a, b) {
            return b.date - a.date;
          })
          .map((item, i) => (
            <RetiroCard key={item.title + i} item={item} />
          ))}
      </div>
    </section>
  );
};

export default Retiros;
