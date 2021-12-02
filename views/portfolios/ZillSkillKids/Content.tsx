import Text from "@components/Text";
import Image from "next/image";

const Content = () => {
  return (
    <div className="pt-3 pb-10 md:pb-16 xl:pb-24">
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60">
        <Image
          src="/assets/casestudy/zillskill/1.png"
          alt=""
          objectFit="cover"
          className="h-auto w-full"
          width={882}
          height={746}
          layout="responsive"
        />
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-4 xl:mt-8">
          <Text
            content="PROBLEM"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3
            className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-darkblue"
            style={{ lineHeight: 1.25 }}
          >
            Kids want to learn. Differently.
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="In a typical school, all kids are expected to be good at the same thing at the same time. However in real world, to fulfill our inner passion to learn and explore new frontiers, we join groups in which we play unique roles backed by our individual strengths. We collaborate with others to leverage their strengths for mutual benefit instead of competing against each other. This has a multiplier effect in each of us and helps everyone grow and excel in what they are passionate about."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="We discovered that a lot of kids are keen to explore  things that can’t necessarily be taught in a classroom environment. This was especially true for Indian kids who feel castigated for doing something that is termed as unconventional. My challenge was to help incorporate this feedback in ZILLSKILL and build functionalities that:"
          />
          <ol className="mb-4 md:mb-8 xl:mb-12 pl-1">
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
                  content="Helps kids understand that their distinctive interests are what makes them so unique and make them become fearless about learning."
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
                  content="Help incorporate a user experience strategy to build a recommendation system to better curate courses and content."
                />
              </div>
            </li>
          </ol>
        </div>
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <Text
            content="IDEATION"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3 className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-darkblue">
            Choosing what is right
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Designing for kids poses it own challenges and opportunities. A common statement made when building for kids is - “We don’t know what kids like, want, expect or think and their thoughts are very transient”.  To help answer some of these questions, we spent time working with the child psychiatrist who helped us appreciate childrens’ perspective and behaviors. It was almost like becoming a child again, for our team! These were insights we gathered:"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-0 mb-6 md:mb-8">
        <div className="mx-4 xlg:mx-24">
          <Image
            src="/assets/casestudy/zillskill/2.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1032}
            height={250}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24">
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Once we collected all important data points, our next plan of action was to synthesize on the basis of feasibility and impact, and turn them into 3 core action items to design for."
          />
          <ol className="mb-4 md:mb-8 xl:mb-12 pl-1">
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="1."
                />
                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">
                    Kids need instant gratification:
                  </span>{" "}
                  While adult users can wait for things to happen, children need
                  instant actions and reactions and preferably, in a gamified
                  form from the first instance of the interaction with the
                  interface.
                </p>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="2."
                />
                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">
                    Storytelling helps kids understand:
                  </span>{" "}
                  Help kids stitch together the experience which will then
                  unfold the plot and assimilate to their individual behavior
                  patterns.
                </p>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="3."
                />
                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  <span className="sf-bold">
                    Kids act emotionally, not rationally:
                  </span>{" "}
                  Responsively build a UX that considers kids brutal honesty and
                  emotional responses.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3
            className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-darkblue"
            style={{ lineHeight: 1.25 }}
          >
            The recommendation system
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="As pointed out earlier, there were two requirements that design had to solve for: Help kids unlock their true potential and build a recommendation system. The engineering teams only had enough bandwidth to create a basic recommendation system. So, we decided that when a user creates a new ZILLSKILL profile, we will lead them through a carefully crafted assessment program that he called ZAP (ZILLSKILL Assessment Program) with questions tailored for each age group.  "
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-0 mb-6 md:mb-8">
        <div className="mx-8 xl:mx-0 xlg:mx-20">
          <Image
            src="/assets/casestudy/zillskill/3.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1056}
            height={380}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-darkblue">
            Finding feature spaces
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Now that we had a solution in hand for the recommendation system, my next design opportunity was to build an engaging experience to help deliver the assessment results."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="With the action items defined earlier acting as guard rails, I started brainstorming to come up with an idea universe where the number of ideas mattered and not the quality of the idea. Following this, I began to connect the ones that would be most impactful and practical. The idea universe helped me narrow down engaging experience items based on prioritization criteria."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-0 mb-6 md:mb-8">
        <div
          className="mx-0 text-center xlg:mx-20"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <Image
            src="/assets/casestudy/zillskill/4.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1068}
            height={685}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24">
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="After laying out a bunch of ideas, I began to iterate with some quick and dirty sketches, just a way to put down my thoughts in a more visual form."
          />
        </div>
        <div className="mx-auto text-center porfolio-content-wrapper">
          <Image
            src="/assets/casestudy/zillskill/5.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={812}
            height={407}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-5.5xl 2xl:text-6xl sf-bold mb-3 md:mb-6 text-darkblue">
            Building for emotions
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="A key realization after some exploration was the importance of the format of presentation and UI details to deliver the assessment results in a fun, friendly and non-intimidating way. So, we decided to take the following design directions:"
          />
        </div>
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-darkblue">
            An ephemeral format
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="Kids have much shorter attention span than adults, and hence, I designed a unique experience to show the results in short and sweet fleeting moments to retain kids’ interest. Test results are always intimidating. By allowing kids to indulge in engaging content in a unique format will help divert from feelings of intimidation to feelings of excitement."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-0 mb-6 md:mb-8 xlg:px-24">
        <div
          className="mx-auto text-center"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <Image
            src="/assets/casestudy/zillskill/6.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1020}
            height={540}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-2">
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-darkblue">
            Bold graphics with vibrant colors
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="From stars to black holes, exploring the solar system to imagining they are astronauts, kids develop a special curiosity for space exploration. So we designed fun and exciting illustrations of spaceships, planets and stars.  Kids also generally have a high tolerance for broader colour palettes so we used bright and vibrant colours bringing energy into the designs."
          />
          <div
            className="mx-auto text-center xlg:px-12"
            style={{ maxWidth: "90%", height: "auto" }}
          >
            <Image
              src="/assets/casestudy/zillskill/7.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={636}
              height={443}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-darkblue">
            Positive reinforcements
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="Strong emotions are the foundations of our memory. Using powerful vocabulary to describe the personality of the kids helps keep them motivated and instills a sense of      happiness and pride."
          />
          <div
            className="mx-auto text-center xlg:px-12"
            style={{ maxWidth: "90%", height: "auto" }}
          >
            <Image
              src="/assets/casestudy/zillskill/8.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={636}
              height={443}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-darkblue">
            Inspiring role model
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="As kids we learn a lot through modelling. Role models help shape how they behave in school, relationships, or when making difficult decisions. So we introduced and matched well-known and accomplished personalities to reinforce their skill."
          />
          <div className="mx-auto text-center max-w-xxs hd:max-w-lg px-20 md:px-0">
            <Image
              src="/assets/casestudy/zillskill/9.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={256}
              height={443}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:mx-12 porfolio-content-wrapper lg:mx-20 xl:mx-24 mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-darkblue">
            Sharing
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="In the world of social media, allowing kids to share their ZAP badges was both a clever user growth tactic and a way for the kids to trumpet their skills!"
          />
          <div className="mx-auto text-center max-w-xxs hd:max-w-lg px-20 md:px-0">
            <Image
              src="/assets/casestudy/zillskill/10.png"
              alt=""
              objectFit="cover"
              className="h-auto w-full"
              width={256}
              height={443}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
