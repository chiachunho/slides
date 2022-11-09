import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

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
      <div className="webviewer grow" ref={viewer}></div>
    </div>
  );
}
