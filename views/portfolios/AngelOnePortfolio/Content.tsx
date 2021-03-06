/* eslint-disable @next/next/no-img-element */
import Text from "@components/Text";
import Image from "next/image";

const Content = () => {
  return (
    <div className="py-10 md:py-16 xl:py-24">
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-14 xlg:px-24">
        <Image
          src="/assets/casestudy/angel-2/1.png"
          alt=""
          objectFit="cover"
          className="h-auto w-full"
          width={960}
          height={570}
          layout="responsive"
        />
      </div>
      <div className="container mx-auto md:px-16 lg:px-28 xl:px-28 xlg:px-24 2xl:px-60">
        <div className="md:mx-12 lg:mx-20 lg:px-3 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <Text
            content="PROBLEM"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3 className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-meddarkblue">
            Easy trading - boon or bane?
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="A portfolio is the window into all the securities and assets owned by a user and single source of truth for users to track and manage asset classes. Key activities like risk assessments, asset allocation, diversification, and rebalancing happen primarily through a portfolio manager. Usually this was a task executed by professionally hired managers responsible for making decisions on a clients’ behalf. Democratizing this activity would now let all users have equal access to financial markets which is both a boon and a bane - because it becomes just as easy to make bad trading decisions."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Some users end up making bad decisions and execute impulsive trades with poor planning or rationale simply because they don’t find precise information at the right time to support their decisions. With the portfolio manager being an essential part in a trading workflow, it was important that our designs would abstract complexity and help them get through the funnel, well informed. Because the web platform caters to a unique user segment of both advanced traders and intermediate traders, the challenge was to be mindful to their different financial maturity levels."
          />
        </div>
        <div className="md:mx-12 lg:mx-20 lg:px-3 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <Text
            content="IDEATION"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3
            className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-meddarkblue"
            style={{
              lineHeight: 1.25,
            }}
          >
            Designing around mental models
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="To understand different types of trading behaviors we talked to users and gathered the following insights:"
          />
          <ol className="mb-4 md:mb-8 xl:mb-12 pl-0">
            <li className="mb-2">
              <div className="flex">
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 md:w-6 md:h-6 mr-4 mt-2"
                />

                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">Active traders</span> who invest and
                  analyze their portfolio performance and markets regularly and
                  try to beat the market.
                </p>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 md:w-6 md:h-6 mr-4 mt-2"
                />

                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">Passive traders</span> who invest by
                  mimicking the trends of an index with the hope of growing
                  wealth over the long run.
                </p>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 md:w-6 md:h-6 mr-4 mt-2"
                />

                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">
                    Advanced traders are generally active traders
                  </span>{" "}
                  who spend a lot of time building strategies on how to time the
                  markets and select the right securities. This is why they work
                  with a lot of advanced orders like cover orders, bracket
                  orders, limit orders etc. to build a solid portfolio.
                </p>
              </div>
            </li>
          </ol>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-6 xl:mb-8 xl:text-2xl"
            content="In a typical stock trading workflow, portfolio is defined into three broad sections; orders, positions and holdings. We built user stories as a way to explain how each portfolio section could function from the perspective of the end user. The users stories helped keep the focus on the user without getting lost in the technicality of things."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 mb-6 md:mb-8">
        <div className="md:mx-1">
          <Image
            src="/assets/casestudy/angel-2/2.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1068}
            height={495}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-28 xl:px-36 xlg:px-24 2xl:px-60">
        <div className="md:mx-12 lg:mx-20 lg:px-3 porfolio-content-wrapper">
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="These user stories helped us understand the execution process and design a logical task flow to prioritize trading actions and build a progressive user flow resembling their thought process:"
          />
          <div className="mb-4 md:mb-8">
            <Image
              src="/assets/casestudy/angel-2/3.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={792}
              height={340}
              layout="responsive"
            />
          </div>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="The three main sections we decided to show upfront is open orders, open positions and holdings. Both order history and closed positions were placed under tab headings ‘open orders’ and ‘positions’ respectively, because we learned this was not an essential part of a traders workflow to be shown upfront in separate tabs."
          />
        </div>
        <div className="md:mx-12 lg:mx-20 lg:px-3 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-meddarkblue">
            Details make the design
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="With the foundations of the user flow laid out, my next task was to design information in a way that encourages efficient and effective understanding of data insights. So I decided to take the following design directions:"
          />

          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-meddarkblue">
            Multi-tiered information
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="Designing for web did not mean that we could use the larger form factor to display all the information in one view. Through research ie. Context of Use, we learnt that there were specific data points users placed higher in the information hierarchy. So I set a standard in the design language which would define 2 tier hierarchy for each listed Security. Tier 1 would will help give 30,000 foot view, and if there is clear intent to learn more and take action, then a drop down with more data is presented."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-2 mb-12 md:mb-24">
        <div className="md:mx-4 xl:mx-2 xl:px-3">
          <div className="mb-4 md:mb-8">
            <Image
              src="/assets/casestudy/angel-2/4.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={1156}
              height={777}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-28 xl:px-36 xlg:px-24 2xl:px-60">
        <div className="md:mx-12 lg:mx-20 lg:px-3 porfolio-content-wrapper">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-meddarkblue">
            Quick actions on hover
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="For advanced traders time is of the essence. Comparing trends of gains and losses with just tier 1 details and the watchlist present on the left, is enough for the user to make a decision on next best actions. To reduce the visual overload of having multiple CTAs shown upfront with tier 1 detail, I built a hover state that allows them to quickly take action."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 xl:px-0 mb-12 md:mb-24">
        <div className="md:mx-12 lg:mx-4 lg:px-3">
          <div className="mb-4 md:mb-8">
            <Image
              src="/assets/casestudy/angel-2/5.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={1156}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-28 xl:px-36 xlg:px-24 2xl:px-60">
        <div className="md:mx-12 lg:mx-20 lg:px-3 porfolio-content-wrapper">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-meddarkblue">
            Thoughtfully designed nudges
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="One of the problems I mentioned earlier was users making bad trading decisions because of inadequate or inaccurate data. Here are some measures I took across the Portfolio Manager to help users make more informed decisions. "
          />
          <ol className="mb-4 md:mb-8 pl-0">
            <li className="mb-2">
              <div className="flex">
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 md:w-6 md:h-6 mr-4 mt-2"
                />

                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">
                    A banner shows up in Open Orders
                  </span>{" "}
                  suggesting to price the order closer to Market Price for
                  faster order execution.
                </p>
              </div>
              <div className="my-4 md:my-8">
                <div
                  className="text-center m-auto px-12 xlg:px-2 xlg:mx-24"
                  style={{ maxWidth: "100%", height: "auto" }}
                >
                  <Image
                    src="/assets/casestudy/angel-2/6.png"
                    alt=""
                    objectFit="cover"
                    className="h-auto w-full"
                    width={565}
                    height={324}
                    layout="responsive"
                  />
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 md:w-6 md:h-6 mr-4 mt-2"
                />

                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">When an order gets canceled, </span>{" "}
                  a detailed explanation on the root cause of the cancellation
                  is presented in a form that gets the users’ attention.
                </p>
              </div>
              <div className="my-4 md:my-8">
                <div
                  className="text-center m-auto px-12 xlg:px-2 xlg:mx-24"
                  style={{ maxWidth: "100%", height: "auto" }}
                >
                  <Image
                    src="/assets/casestudy/angel-2/7.png"
                    alt=""
                    objectFit="cover"
                    className="h-auto w-full"
                    width={565}
                    height={324}
                    layout="responsive"
                  />
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 md:w-6 md:h-6 mr-4 mt-2"
                />

                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  Keeping track of past orders and their performance is
                  important for users when they have to plan for future trades.
                  So, I organized the{" "}
                  <span className="sf-bold">order history page</span> by clearly
                  differentiating between ‘today’s orders’ and ‘past orders’. I
                  also designed a{" "}
                  <span className="sf-bold">
                    search function and date filters
                  </span>{" "}
                  to help users quickly find what they are looking for.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className="container mx-auto md:px-16 xl:px-4 mb-12 md:mb-24">
        <div className="md:mx-12 lg:mx-20 lg:px-3 xl:mx-4">
          <div className="mb-4 md:mb-8">
            <Image
              src="/assets/casestudy/angel-2/8.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={1156}
              height={325}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-28 xl:px-36 xlg:px-24 2xl:px-60">
        <div className="md:mx-12 lg:mx-20 lg:px-3 porfolio-content-wrapper">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-meddarkblue">
            Summary cards
          </h3>

          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-8 xl:text-2xl"
            content="Summary cards in very important in a complex environment like a financial trading system. More often than not, it acts as a starting point for users attention. If they see something off base in the summary card they then know that that section needs attention. Keeping this in mind I designed bold and attractive contextual digests of information, across different sections of the portfolio management."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 xl:px-0 mt-8">
        <div className="md:mx-12 lg:mx-16 lg:px-4 xlg:mx-4">
          <div className="mb-4 md:mb-2">
            <Image
              src="/assets/casestudy/angel-2/9.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={1156}
              height={756}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
