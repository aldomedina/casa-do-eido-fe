import { useContext } from "react";
import sanity from "../../lib/sanity";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { LangContext } from "../_app";
import { urlFor } from "../../utils";
// import { serializers } from "@sanity/block-content-to-react/lib/targets/dom";
export async function getStaticProps() {
  const query = groq`
    *[_type == 'post'] | order(publishedAt desc) {
      mainImage, post_title, publishedAt, slug, body
    }
  `;

  const data = await sanity.fetch(query);

  return {
    props: {
      posts: data,
    },
  };
}

const serializer = {
  types: {
    image: props => (
      <img
        className="md:max-w-60v md:max-h-70v self-end"
        src={urlFor(props.node.asset)}
        alt={props.node.alt}
      />
    ),
  },
};
const Blog = ({ posts }) => {
  const ctx = useContext(LangContext);

  return (
    <section className="w-full p-0">
      {posts &&
        posts.length &&
        posts.map((el, i) => (
          <div
            key={el.slug + i}
            className={
              i % 2 ? "even:bg-beige mb-10 md:mb-20" : "mb-10 md:mb-20"
            }
          >
            <div className="container py-10 md:py-20">
              <div
                className="bg-center bg-cover flex-1 md:flex-none w-full h-50v mb-10"
                style={{ backgroundImage: `url(${urlFor(el.mainImage)})` }}
              />
              <div className="flex justify-between mb-10">
                <h1 className="title text-xxxl">{el.post_title[ctx.locale]}</h1>
                <span className="title font-extralight">
                  {new Date(el.publishedAt).toLocaleDateString(ctx.locale)}
                </span>
              </div>
              <div className="font-light prose max-w-full text-lg">
                <BlockContent
                  projectId={process.env.SANITY_ID}
                  dataset="production"
                  blocks={el.body[ctx.locale]}
                  serializers={serializer}
                />
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Blog;
