import Head from "next/head";
import axios from "axios";

export default function Home({ data }) {
  console.log(data);
  return <>hello</>;
}

export const getStaticProps = async () => {
  const res = await axios.get(
    (process.env.NODE_ENV !== "Production"
      ? "http://localhost:3000"
      : "https://rate-my-plot-20krv1kdy-aj235711.vercel.app/") + "/api/hello"
  );
  console.log(res);
  return {
    props: {
      data: res.data,
    },
  };
};
