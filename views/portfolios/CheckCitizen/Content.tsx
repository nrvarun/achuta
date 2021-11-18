/* eslint-disable @next/next/no-img-element */
import Text from "@components/Text";
import Image from "next/image";

const Content = () => {
  return (
    <div className="pt-1 md:pt-3 pb-10 md:pb-16 xl:pb-24">
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60">
        <Image
          src="/assets/casestudy/check/1.png"
          alt=""
          objectFit="cover"
          className="h-auto w-full"
          width={882}
          height={746}
          layout="responsive"
        />
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <Text
            content="PROBLEM"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            No real incentive
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="The police to population ratio in the city of Bengaluru is one the lowest in the world. With traffic congestion and understaffed police many violation go undetected. To help citizens be more responsible, the Bangalore Traffic Police (BTP) released an application called Public Eye that would let users take pictures of violations and immediately upload it onto the BTP portal. Although the initiative helped marginally increase detection of violations, it did not bring down the number of traffic offences."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="The simple reason was that Public Eye had very poor user experience. Users complained that a lot of violations submitted is being overlooked by the police as it was being processed manually and no prompt action is initiated against violators. Hence there was really no real incentive for users to be good samaritans."
          />
        </div>
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <Text
            content="IDEATION"
            classes="text-gray-500 mb-2 md:mb-4 xl:mb-6 sf-bold"
          />
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            “Let’s be good citizens!”
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Although this application was a consumer software, deep down I am still a kid who loves games! So, I wanted to redesign the application by applying game design to a consumer software. Right now booking violation on Public Eye is very cumbersome, only to then have the violation disregarded by the police. The question I asked myself is what if we can make this software feel less like work and more like play?"
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="I decided that the core goal was that there must be something that triggers intrinsic motivation that inherently motivates the users to use the app. The experience of the application should not be gamification by just adding points, levels and badges. When we do things to earn rewards and achieve external goals it largely reduces the effects of intrinsic motivation. The only way to make gamfication work is to design the underlying experience to already be a game."
          />
        </div>
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            Understanding the users
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="To understand users and incorporate a theory for game design, I ran generative user studies with friends and family. With qualitative data collected from this diverse group of individuals I created a wall of post-it’s with notes and ideas that could be implemented. By organising and synthesising the data, I created an affinity map to form distinguishable groups."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-0 mb-8">
        <div
          className="mx-auto text-center"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <Image
            src="/assets/casestudy/check/2.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1068}
            height={678}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper">
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="As we can see, the motivations expressed by the users were immanent/inherent in nature. My task now was to redesign the experience to help realize the goals set off by these intrinsic motivations."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-2 xl:text-2xl"
            content="It turns out there is no one way to design games. So using the findings of the user study as a premise of our understanding of psychology, storytelling and interaction design, we defined 4 factors to work with in our product construct:"
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
                  Goals
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
                  challenges
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
                  emotions
                </p>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex">
                <Text
                  classes="xl:text-2xl mr-2"
                  style={{ lineHeight: 1.5 }}
                  content="4."
                />
                <p
                  className={`text-md md:text-xl text-black sf-regular xl:text-2xl`}
                  style={{ lineHeight: 1.5 }}
                >
                  flows
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            A good goal
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Ask any gamer, and they’ll tell you how important goals are. So much so that it decides whether gamers chooses to play that game or not. As Jesse Schell tells in his book The Art of Game Design, a good goal must be concrete, achievable and rewarding. "
          />
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            Machine Learning
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="From our research, one clear concrete goal for everyone was to make roads safer. Good goals must also be achievable, so we built a machine learning model to automatically detect violations (and hence solve the problem of violations being overlooked). In the interest of time our professors asked us to implement the “no helmet violation” as a first cut of the minimum viable product."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="My team and I developed an efficient implementation of a neural network to automatically detect violations. We used YOLOv2 algorithm (You Only Look Once) which is a unique convolutional neural network (CNN) for doing object detection is real time. The algorithm applies a single neural network to the full image, and then divides the image into regions and predicts bounding boxes and probabilities for each region. Predicted probabilities are assigned to the bounded box in the form of weights. This achieves high accuracy while also being able to run in real-time."
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-0 mb-8">
        <div
          className="mx-auto text-center"
          style={{ maxWidth: "100%", maxHeight: "auto" }}
        >
          <Image
            src="/assets/casestudy/check/3.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1084}
            height={304}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-2 md:mt-4 xl:mt-8">
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="With a robust machine learning model in place, we made much it easier for users to get clear and immediate feedback by detecting violations in real time thus rewarding the user with assured violation detection."
          />
        </div>
      </div>

      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-xl md:text-2xl xl:text-3.5xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            Safety and privacy
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="Another key ask was about privacy and safety of the users using app. There were two usecases we had to design for"
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
                  Some users for obvious reasons, did not want to reveal their
                  identity when a violation is submitted.
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
                  If the user spots a violation while in motion in a vehicle,
                  they cannot use the application as a driver which is both a
                  distraction and a violation in its itself.
                </p>
              </div>
            </li>
          </ol>
          <p
            className={`text-md md:text-xl text-black sf-medium xl:text-2xl mb-2 md:mb-4 xl:mb-8`}
            style={{ lineHeight: 1.5 }}
          >
            For the first usecase we came up with the idea of having users enter
            a<span className="sf-bold">unique pseudonym</span>
            as an identifier. Their real identity is encrypted and will never be
            visible on any submitted violation.
          </p>
          <div className="text-center mb-2 md:mb-4 xl:mb-8 md:-ml-12 lg:-ml-24">
            <div className="mx-auto text-center max-w-lg hd:max-w-xl">
              <Image
                src="/assets/casestudy/check/4.png"
                alt=""
                objectFit="cover"
                className="h-auto w-full"
                width={416}
                height={552}
                layout="intrinsic"
              />
            </div>
          </div>
          <p
            className={`text-md md:text-xl text-black sf-medium xl:text-2xl mb-2 md:mb-4 xl:mb-8`}
            style={{ lineHeight: 1.5 }}
          >
            To solve the second usecase, we introduced a feature that diables
            the ‘Book Violation’ CTA when any movement is detected by
            combination of the phone’s gyroscope and GPS based location. It will
            then trigger a{" "}
            <span className="sf-bold">
              quick challenge test to prove that the user is not the driver.
            </span>{" "}
            The questions in the test is uniquely designed to test the attention
            of the user. Successful completion of the test will prove that the
            user is not distracted from focusing on the road. But if there is no
            constant motion detected (ie. not in vehicle), the user is directed
            straight to the camera without the test.
          </p>
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-24 xl:px-0 mb-6 md:mb-8">
        <div className="mx-auto text-center h-auto">
          <Image
            src="/assets/casestudy/check/5.png"
            alt=""
            objectFit="cover"
            className="h-auto w-full"
            width={1224}
            height={448}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-6 md:mb-8">
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            Challenges motivate users
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="Reaching goals is typically accompanied by challenges. At Check we built in a leaderboard to track top contributors to a better society. Motivating users to move up the leaderboard with pleasant surprises like badges and vouchers indulges them in playful competition and results in users contributing positively to build a safe environment "
          />
          <div className="text-center">
            <div className="mx-auto text-center max-w-md hd:max-w-xl">
              <img
                src="/assets/casestudy/check/6.png"
                alt=""
                className="h-auto w-full"
                // width={265}
                // height={552}
                // layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            Strong emotions
          </h3>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="The best games create strong emotions. When designing for games we aim to tap into nuanced explicit and implicit emotions. The following framework of the Emotion Wheel from Junto Institute explains more clearly the subtleties we have to work with. For this application our users care deeply about for the society at large which gives them a feeling joy. Our design has to be for ‘Optimism’ and ‘Hopefulness’ because our users are looking to improve their society. Our designs must also be for ‘Pride’; when a user does a service for the society which rightly gives a sense of accomplishment. "
          />
          <div className="text-center mb-2 md:mb-4 xl:mb-8">
            <div className="mx-auto text-center max-w-lg hd:max-w-xl">
              <img
                src="/assets/casestudy/check/7.png"
                alt=""
                className="h-auto w-full"
                // width={265}
                // height={552}
                // layout="intrinsic"
              />
            </div>
          </div>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="In our application, we designed a rewards section that displays the badges and vouchers won by the user for being good citizens of the society. We carefully craft messages to convey a sense of pride and accomplishment."
          />
          <div className="text-center">
            <div className="mx-auto text-center max-w-xs hd:max-w-lg">
              <img
                src="/assets/casestudy/check/8.png"
                alt=""
                className="h-auto w-full"
                // width={265}
                // height={552}
                // layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:px-16 lg:px-32 xl:px-36 xlg:px-24 2xl:px-60 mb-2 md:mb-4">
        <div className="md:mx-12 xl:mx-16 2xl:mx-24 porfolio-content-wrapper mt-10 md:mt-16 xl:mt-24">
          <h3 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-3 md:mb-6 text-lightdarkgrey">
            A holistic experience
          </h3>
          <p
            className={`text-md md:text-xl text-black sf-medium xl:text-2xl mb-4 md:mb-8 xl:mb-12`}
            style={{ lineHeight: 1.5 }}
          >
            The three previous factors are vital components to our game design
            approach, but the one that stitches all of it together to form a{" "}
            <span className="sf-bold">holistic experience, is the flow.</span>{" "}
            Designing a flow must bring intensely and focused concentration to
            the task. It must be so absorbing that we don’t get distracted about
            the next or the previous steps. The flow must be so rewarding that
            the task becomes intrinsically motivating.
          </p>
          <p
            className={`text-md md:text-xl text-black sf-medium xl:text-2xl mb-2 md:mb-4 xl:mb-8`}
            style={{ lineHeight: 1.5 }}
          >
            A vital condition to maintain good flow is ‘knowing what to do next
            and know how to do it’. So to help users familiarize themselves with
            how the app works we will show them a quick{" "}
            <span className="sf-bold">onboarding screen</span> explaining the
            flow in four easy steps.
          </p>
          <div className="text-center mb-2 md:mb-4 xl:mb-8">
            <div className="mx-auto text-center max-w-xs hd:max-w-lg">
              <img
                src="/assets/casestudy/check/9.png"
                alt=""
                className="h-auto w-full"
                // width={265}
                // height={552}
                // layout="intrinsic"
              />
            </div>
          </div>
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:text-2xl"
            content="The application was mindfully designed to be extremely lightweight with just three sections: a profile page; rewards; and settings. This makes navigation through the application incredibly easy with minimum effort."
          />
          <div className="text-center">
            <video
              style={{
                boxShadow: "0px 2px 8px rgb(90 90 90 / 20%)",
                borderRadius: 8,
              }}
              className="w-full h-auto mx-auto max-w-xs hd:max-w-lg"
              controls
              src="/assets/casestudy/check/video.mp4"
              poster="/assets/casestudy/check/video-poster.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
