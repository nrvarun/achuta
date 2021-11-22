import React from "react";

type OutcomesType = {
  title: string;
  list: Array<string>;
  color?: string;
  backgroundColor?: string;
};

const Outcomes = ({ title, list, color, backgroundColor }: OutcomesType) => {
  return (
    <section className="p-12 md:p-16 xl:p-24" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <div className="mx-auto">
          <h3
            className="text-2xl md:text-3xl xl:text-6xl sf-bold text-black mb-4 md:mb-8 xl:mb-12"
            style={{ color }}
          >
            {title}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-8 2xl:gap-20">
            {list.map((item, index) => (
              <li key={index}>
                <div className="flex">
                  <div className="mr-4 mt-3">
                    <div style={{ width: 32, height: 32 }}>
                      <p
                        className="w-full h-full flex text-center block rounded text-sm md:text-md xl:text-lg sf-medium text-white mr-4"
                        style={{ backgroundColor: color }}
                      >
                        <span className="m-auto">0{index + 1}</span>
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-xl md:text-2xl xl:text-2.5xl sf-semibold text-black xl:leading-relaxed ${
                      index !== list.length && "pr-0"
                    }`}
                    style={{ color, maxWidth: 333 }}
                  >
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
