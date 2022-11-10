import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function HomePage() {
  const viewer = useRef(null);
  const router = useRouter();

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/lib",
          initialDoc: `/pdf/${router.query.pdf}.pdf`,
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className="flex grow">
      <Head>
        <title>{router.query.pdf} - Jeffery&apos;s Slides</title>
        <meta
          property="og:title"
          content={`${router.query.pdf} - Jeffery's Slides`}
        />
      </Head>
      <div className="webviewer grow" ref={viewer}></div>
    </div>
  );
}
