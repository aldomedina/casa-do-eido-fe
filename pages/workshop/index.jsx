import RetiroCard from "../../components/RetiroCard";
import mock_retiros from "../../content/mock_retiros";
import sanity from "../../lib/sanity";
import groq from "groq";
export async function getStaticProps() {
  const query = groq`
    *[_type == 'workshop'] {
      mainImage, post_title, subtitle, start_date, end_date, duration, slug, url
    }
  `;

  const data = await sanity.fetch(query);

  return {
    props: {
      workshops: data,
    },
  };
}

const Retiros = ({ workshops }) => {
  console.log(workshops);
  return (
    <section>
      <div className="container grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 auto-rows-fr py-5 md:px-20 lg:px-36 md:py-10">
        {workshops?.length ? (
          workshops
            .sort(function (a, b) {
              return b.start_date - a.start_date;
            })
            .map((item, i) => <RetiroCard key={item.title + i} item={item} />)
        ) : (
          <div className="h-screen w-full flex justify-center items-center">
            <h1 className="text-xl">proximamente </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Retiros;
