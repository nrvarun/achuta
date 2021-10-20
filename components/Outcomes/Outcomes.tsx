import React from "react";

type OutcomesType = {
  title: string;
  list: Array<string>;
  color?: string;
  backgroundColor?: string;
};

const Outcomes = ({ title, list, color, backgroundColor }: OutcomesType) => {
  return (
    <section className="p-14: md:p-18 xl:p-28" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <h3
          className="text-2xl md:text-3xl xl:text-6xl sf-bold text-black mb-4 md:mb-8 xl:mb-12"
          style={{ color }}
        >
          {title}
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {list.map((item, index) => (
            <li key={index}>
              <div className="flex">
                <div>
                  <p
                    className="py-1 px-2 mt-3 block rounded text-sm md:text-md xl:text-lg sf-medium text-white mr-4"
                    style={{ backgroundColor: color }}
                  >
                    0{index + 1}
                  </p>
                </div>
                <p
                  className={`text-xl md:text-2xl xl:text-3xl sf-medium text-black xl:leading-relaxed ${
                    index !== list.length && "pr-4"
                  }`}
                  style={{ color }}
                >
                  {item}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Outcomes;
