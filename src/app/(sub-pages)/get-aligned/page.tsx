import { ContentContainer } from "@/app/components/ContentContainer";
import { ImageSection } from "@/app/components/ImageSection";
import { PageContainer } from "@/app/components/PageContainer";
import { PageHeading } from "@/app/components/PageHeading";
import { Text } from "@/app/components/Text";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const videoEmbed = (
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe
      src="https://www.loom.com/embed/bec5df69d30e48b3880032c69b220655?sid=0cac1436-50dd-4a1e-86b9-bf8bc2bd8973"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></iframe>
    {/* <div style="position: relative; padding-bottom: 60.33519553072626%; height: 0;"><iframe src="https://www.loom.com/embed/bec5df69d30e48b3880032c69b220655?sid=0cac1436-50dd-4a1e-86b9-bf8bc2bd8973" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> */}
  </div>
);

const GetAlignedPage = () => {
  return (
    <PageContainer>
      <PageHeading
        title="Get Aligned"
        subtitle="Standing up a brand new enterprise-focused product with complex data
          entry & visualization needs"
      />
      <div
        className={classNames(
          "w-full bg-[#F8FCFC] h-[30rem] relative overflow-hidden"
        )}
      >
        <Image
          width={1800}
          height={1667}
          src="/ga-ui-system.jpg"
          alt="An array of components from the Get Aligned UI System"
          className="-rotate-12 mx-auto scale-[300%] md:scale-150 translate-y-32 md:-translate-y-8 2xl:translate-x-20"
        />
      </div>

      <ContentContainer>
        <div className={classNames("w-full")}>
          <Text size="lg" as="h3">
            The Idea
          </Text>
          <Text color="secondary">
            I initially began working with a small tech recruiting firm in a job
            and talent-seeking capacity. However, as they became acquainted with
            my skill set, our discussions expanded to include a product idea
            they were developing. This envisioned product aimed to streamline
            the process for recruiters, financial decision-makers, and HR
            personnel by facilitating the rapid collection and organization of
            crucial details for upcoming talent searches. The goal was to ensure
            swift and efficient alignment among stakeholders for approval or
            revisions on each Position Request. To enhance the user experience,
            we opted to integrate AI suggestions utilizing the OpenAI API.
          </Text>
        </div>
        <div
          className={classNames(
            "flex flex-col gap-y-4 w-full mx-auto max-w-56.25rem"
          )}
        >
          <Text size="lg" as="h3">
            My Responsibilities
          </Text>
          <div
            className={classNames("grid grid-cols-2 gap-x-6 gap-y-4 w-full")}
          >
            <Text color="highlight">User Experience Design</Text>
            <Text color="highlight">User Interface Design</Text>
            <Text color="highlight">UI System Design</Text>
            <Text color="highlight">UI System Engineering</Text>
            <Text color="highlight">Frontend Feature Engineering</Text>
            <Text color="highlight">API Integration</Text>
          </div>
        </div>
        <div className={classNames("w-full mx-auto max-w-56.25rem")}>
          <Text size="lg" as="h3">
            Challenges
          </Text>
          <Text color="secondary" useBottomMargin>
            Initially, we anticipated several potential challenges. It was
            evident that the success of the product hinged on delivering a
            high-quality user experience for AI-assisted data input,
            necessitating robust form and input components. While React offers
            extensive utility for managing such components, it&apos;s widely
            acknowledged that frontend work of this nature can swiftly become
            intricate and demanding.
          </Text>
          <Text color="secondary">
            The second challenge we anticipated was the implementation of a
            sophisticated organizational structure and user permissions system.
            As part of the MVP, the application needed to be enterprise-ready,
            accommodating users who could join and engage with multiple
            organizations within the platform. Additionally, each organization
            would require the capability to assign different permissions to its
            users, ranging from editing privileges to the authority to approve
            or reject Position Requests, particularly from the viewpoint of a
            financial decision-maker.
          </Text>
        </div>
        <ImageSection
          src="/ga-home.jpg"
          alt="The home page of the user’s dashboard, showing a list of all Position Requests, as well as a bar graph of how many Position Requests are represented by each possible Status."
          imageHeight={36.5}
        />
        <div className={classNames("w-full mx-auto max-w-56.25rem")}>
          <Text size="lg" as="h3">
            The Approach
          </Text>
          <Text color="secondary" useBottomMargin>
            Given a high level of complexity in the data input UI, I knew that a
            thoughtful UI system methodology would be crucial to success. A few
            core tenets of this include:
          </Text>
          <ul
            className={classNames(
              "flex flex-col my-6 gap-y-3 list-disc ml-8 list-outside marker:text-[var(--color-text-secondary)]"
            )}
          >
            <li>
              <Text color="secondary">
                Develop UI components thoroughly and completely, but nothing
                more than the UI asks. It’s easy to get lost in adding
                functionality to components, but having acted as the designer of
                this product I had internalized the exact needs of each
                component, allowing me to work quickly, effectively, and
                accurately. This leaves extra room for things like ensuring
                screen reader compatibility at a very minimal cost, and leaves
                the door wide open for UI iterations down the road.
              </Text>
            </li>
            <li>
              <Text color="secondary">
                Develop variables and components in sensible succession to one
                another. In the early stages, this is simply a process of
                focusing on components with the lowest complexity first, and
                incorporating them atomically within each other as new
                components and capabilities are added to the UI system. As the
                product advances to its post-launch life, this practice involves
                developing components only as the need comes up within the
                feature development process, instead of trying to predict the
                future and ending up with a component graveyard full of unused
                code.
              </Text>
            </li>
            <li>
              <Text color="secondary">
                Opt for global, semantic tokens over localized variables
                whenever feasible. This not only enhances UI consistency and
                improves the developer experience but also plays a pivotal role
                in laying the foundation for future iterations as the product
                launches to its beta testers and customers.
              </Text>
            </li>
          </ul>
          <Text color="secondary">
            As for our authentication, user role, and user organization service,
            I knew it would be worthwhile to find a low-cost solution for the
            API which would allow user and org management via the frontend
            application. After reviewing several options, the team landed on{" "}
            <Link
              href={"https://clerk.com/"}
              className={classNames(
                "text-[var(--color-text-highlight)] underline"
              )}
            >
              Clerk
            </Link>{" "}
            as a way to reduce the number of developers required to stand up and
            integrate the authentication API. Although the demands of our
            product meant that the implementation wouldn’t exactly be simple
            still, this allowed us to be flexible, secure, and highly capable
            from the get-go without having to see very far into the future of
            our application. Going forward, only a frontend developer is
            necessary to make changes to the user and org services.
          </Text>
        </div>
        <ImageSection
          src="/ga-video.jpg"
          alt="A video clip of one our custom list inputs, including a list of OpenAI-powered suggestions."
          imageHeight={36.5}
          videoEmbed={videoEmbed}
        />
        <div className={classNames("w-full")}>
          <Text size="lg" as="h3">
            The Execution
          </Text>
          <Text color="secondary">
            Over a span of approximately 7 months, we successfully crafted a
            comprehensive MVP product, of which I am particularly proud. The
            initial discovery and design phases occupied roughly twelve weeks,
            during which we maintained a steady pace, albeit slightly slowing
            down for the more intricate aspects of form input UX design. Once
            the UX and UI designs reached a satisfactory stage, I transitioned
            to developing the majority of UI components while the backend
            application development gained momentum. In the final eight to
            twelve weeks, my focus shifted to assembling the UI system
            components to construct features, alongside integrating our new
            backend API and user organization and roles system, constructed
            using Clerk.
          </Text>
        </div>
        <ImageSection
          src="/ga-strategy.jpg"
          alt="The third step of the Create Position Request flow. This is where a user can add context such as synonymous job titles, or target companies and industries or to recruit from."
          imageHeight={36.5}
        />
        <ImageSection
          src="/ga-home.jpg"
          alt="The home page of the user’s dashboard, showing a list of all Position Requests, as well as a bar graph of how many Position Requests are represented by each possible Status."
          imageHeight={36.5}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default GetAlignedPage;
