import Head from "next/head";

import withScrollFixed from "../../common/withScrollFixed";
import FooterTwo from "../Footer/FooterTwo";
import HeaderFive from "../Header/HeaderFive";

let ScrollFixedHeader = withScrollFixed(HeaderFive);

export default function LayoutFive(props) {
  return (
    <>
      <Head>
        <title>{props.title || "Eliah | React"}</title>
      </Head>
      <ScrollFixedHeader container={props.container} />
      {props.children}
      <FooterTwo />
    </>
  );
}
