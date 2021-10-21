import Text from "@components/Text";
import Image from "next/image";

const Content = () => {
  return (
    <div className="py-10 md:py-16 xl:py-24">
      <div className="container mx-auto px-16 md:px-40 xl:px-60">
        <Image
          src="/assets/casestudy/angel-1/1.png"
          alt=""
          objectFit="cover"
          className="h-auto w-full"
          width={940}
          height={536}
          layout="responsive"
        />
        <div className="mx-12 md:mx-24 mt-10 md:mt-16 xl:mt-24">
          <Text
            content="PROBLEM"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-gold">
            Not too easy, not too hard
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Before we could begin researching ways to attract users to a new and bigger platform which complements the already existing mobile app, a critical problem needed to be addressed. Typically a web platform serves to proficient users who have good a working knowledge of stock trading. But though research we also found users who transistion from a novice skill level to advanced skill level are likely to use the web platforms as an extension to support their portfolios built primarily on a mobile app."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Before we could begin researching ways to attract users to a new and bigger platform which complements the already existing mobile app, a critical problem needed to be addressed. Typically a web platform serves to proficient users who have good a working knowledge of stock trading. But though research we also found users who transistion from a novice skill level to advanced skill level are likely to use the web platforms as an extension to support their portfolios built primarily on a mobile app."
          />
        </div>
        <div className="mx-12 md:mx-24 mt-10 md:mt-16 xl:mt-24">
          <Text
            content="IDEATION"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-gold">
            Form complements function
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="To push forward our ideation we set the driving statement as form complementing function. Building a whole host of tools and features helps users make better and more advanced trades, but what we found through research is that because a stock trading application is so technical and complex, users tend to miss out small but costly details. With this in mind, we kept the technical functionality at the core and building a form around it."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="In order to achieve this we ran through a couple hundred post it notes creating user stories to understand workflows. After synthesising the user stories, we identified four broad sections to define the layout;"
          />
          <ol className="pl-4">
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="1."
                />
                <Text
                  classes="xl:text-2xl"
                  style={{ lineHeight: 1.5 }}
                  content="A universal search query to show specified information"
                />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="2."
                />
                <Text
                  classes="xl:text-2xl"
                  style={{ lineHeight: 1.5 }}
                  content="Primary navigation"
                />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="3."
                />
                <Text
                  classes="xl:text-2xl"
                  style={{ lineHeight: 1.5 }}
                  content="Main content area (Stock details, portfolio, orders and postions, etc)"
                />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="4."
                />
                <Text
                  classes="xl:text-2xl"
                  style={{ lineHeight: 1.5 }}
                  content="Static watchlist area to track trends at anytime"
                />
              </div>
            </li>
          </ol>
        </div>
        <div className="mx-12 md:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-gold">
            Crafting the interface
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Before I started visual exploration, I laid down some conditions that defined an effective user flow:"
          />

          <ol className="mb-4 md:mb-8 xl:mb-12 pl-4">
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="1."
                />
                <Text
                  classes="xl:text-2xl"
                  style={{ lineHeight: 1.5 }}
                  content="The flow must bring an intense and focused concentration to the task."
                />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="2."
                />
                <Text
                  classes="xl:text-2xl"
                  style={{ lineHeight: 1.5 }}
                  content="It should so absorbing that the user is never distracted with the next step or the previous step."
                />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="3."
                />
                <Text
                  classes="xl:text-2xl"
                  style={{ lineHeight: 1.5 }}
                  content="It must intuitive that the user always know what to do next."
                />
              </div>
            </li>
          </ol>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-6 xl:mb-8 xl:text-2xl"
            content="Considering these conditions as guidelines and user stories as reference, I began to explore different viewing patterns and built heirarchies of information through high level sketches."
          />
          <Image
            src="/assets/casestudy/angel-1/2.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={830}
            height={564}
            layout="responsive"
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mt-4 md:mt-6 xl:mt-8 xl:text-2xl"
            content="From the ideas and directions decided from the sketches, I started to flesh them out into higher fidelity wireframes. Considering multiple factors related to business and technical functions, I took the following design decisions:"
          />
        </div>
        <div className="mx-12 md:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-gold">
            Sticky Watchlist
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="The watchlist contained vital pieces of information for users in their investing or trading decision making process. So we talked to users to really understand what they are, how it’s useful and why they find it useful. The following insights helped inform my design rationale::"
          />

          <ol className="mb-4 md:mb-8 xl:mb-12 pl-4">
            <li className="mb-2">
              <div className="flex">
                <img
                  src="/icons/arrow-right.svg"
                  alt=""
                  className="w-4 h-4 md:w-6 md:h-6 mr-4 mt-2"
                />

                <p
                  className={`text-md md:text-xl text-black sf-medium xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  Users{" "}
                  <span className="sf-bold">create baskets of securities</span>{" "}
                  which are carefully picked based on unique themes, strategies
                  and objectives. To get the best outcomes, advanced traders
                  monitor these baskets regularly and use those insights for
                  their buy and sell decisions. Allowing users to always have a
                  view of these regularily tracked securities in a watchlist
                  seemed like a must have.
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
                  className={`text-md md:text-xl text-black sf-medium xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">Seeing what is relevant</span> is
                  key for traders while building a watchlist, removing as much
                  noise as possible.
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
                  className={`text-md md:text-xl text-black sf-medium xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">
                    Making it easier to identify opputunities.
                  </span>
                  With a watchlist, traders are able to easily identify trading
                  opportunities, especially for short term traders.
                </p>
              </div>
            </li>
          </ol>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-6 xl:mb-8 xl:text-2xl"
            content="Considering these conditions as guidelines and user stories as reference, I began to explore different viewing patterns and built heirarchies of information through high level sketches."
          />
          <Image
            src="/assets/casestudy/angel-1/3.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={702}
            height={354}
            layout="responsive"
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="my-4 md:my-6 xl:my-8 xl:text-2xl"
            content="The watchlist was built to support a lot of customizations. Many users requested to see the trends of market indexes at all times which let them gauge the overall conditions of the market. So we let users customize their watchlist view by allowing them to have any two indexes placed on top. Another feature that users wanted was the ability to quickly edit, create and navigate between watchlists."
          />
        </div>
        <div className="mt-10 md:mt-16 xl:mt-24">
          <Image
            src="/assets/casestudy/angel-1/4.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={888}
            height={380}
            layout="responsive"
          />
        </div>
        <div className="mx-12 md:mx-24 mt-10 md:mt-16 xl:mt-24">
          <div className="mx-2">
            <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-gold">
              Core content area and navigator
            </h3>
            <Text
              style={{ lineHeight: 1.5 }}
              classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
              content="One of the conditions to a good flow was to bring intense and focused attention to the task. The core content frame is where all the action takes place. Whether it is viewing the fundamentals of a stock, viewing option chains or managing portfolios, it is in this area users divert most of their attention when consuming data throughout the application. Placing the main navigation on the top or hidden in a hamburger menu could feel like a disconnect with the core content frame. Hence, I decided to show it upfront and form a close association with the core content frame."
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-16">
        <Image
          src="/assets/casestudy/angel-1/5.png"
          alt=""
          objectFit="cover"
          className="h-auto w-full"
          width={1156}
          height={389}
          layout="responsive"
        />
      </div>
      <div className="container mx-auto px-16 md:px-40 xl:px-60">
        <div className="mx-12 md:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-gold">
            Universal search bar
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Positioning the search bar was critical because in a stock trading app, there are a lot of complex types of securities one can access especially when a user searches for futures and options. Having a large search box on top of the page with filters helped create a clear distinction between each search result."
          />

          <Image
            src="/assets/casestudy/angel-1/6.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={730}
            height={752}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
