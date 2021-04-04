import { useContext } from "react";
import ContractLayout from "../../components/ContractLayout";
import translate from "../../i18n/translate";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { LangContext } from "../_app";
import sanity from "../../lib/sanity";

export async function getStaticProps({ params }) {
  const query = groq`
    *[_type=='contracts' && id == 'dados'][0]
  `;
  const data = await sanity.fetch(query);
  return {
    props: {
      dados: data,
    },
  };
}

const Termos = ({ dados }) => {
  const ctx = useContext(LangContext);
  return (
    <ContractLayout titleId="protecao">
      {dados && dados.content && (
        <div className="font-light my-10 prose">
          <BlockContent blocks={dados.content[ctx.locale]} />
        </div>
      )}
    </ContractLayout>
  );
};

export default Termos;
