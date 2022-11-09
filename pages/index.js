import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

export default function Home({ slides }) {
  return (
    <div className="container flex flex-col my-3 gap-y-2 mx-auto">
      {slides.map((slides, index) => (
        <Item key={index} {...slides} />
      ))}
    </div>
  );
}

export function Item({ title, date, context, link, tags = [] }) {
  return (
    <Link href={`/${link}`}>
      <div className="p-4 flex flex-row hover:bg-gray-100 cursor-pointer sm:rounded-md transition-all ease-linear">
        <div className="grow">
          <div className="font-medium text-lg mb-2">{title}</div>
          <div className="flex flex-row flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grow-0 ml-2">
          <div className="font-medium text-end text-sm mb-2">{context}</div>
          <div className="font-normal text-end text-xs">{date}</div>
        </div>
      </div>
    </Link>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath);
  const objectData = {
    slides: JSON.parse(jsonData),
  };

  return {
    props: objectData,
  };
}
