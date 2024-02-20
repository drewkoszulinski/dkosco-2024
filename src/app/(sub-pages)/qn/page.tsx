import { ContentContainer } from "@/app/components/ContentContainer";
import { ImageSection } from "@/app/components/ImageSection";
import { PageContainer } from "@/app/components/PageContainer";
import { PageHeading } from "@/app/components/PageHeading";
import { Text } from "@/app/components/Text";
import classNames from "classnames";

export default function QuickNodePage() {
  return (
    <PageContainer>
      <PageHeading
        title="QuickNode"
        subtitle="Driving product evolution and developer experience across the organization"
      />
      <ContentContainer>
        <ImageSection
          src="/icy.jpg"
          alt="A screenshot of Icy.tools, the QuickNode data financial analytics product showcasing many of the UI components I worked on."
        />
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
            <Text color="highlight">User Interface Design</Text>
            <Text color="highlight">UI System Design</Text>
            <Text color="highlight">UI System Engineering</Text>
          </div>
        </div>
        <Text color="secondary">
          During my time at QuickNode as a UI Engineer, I led two crucial
          projects that significantly improved both user experience and
          developer efficiency. Firstly, I successfully migrated an existing web
          application to a new UI system, leveraging my expertise in React and
          Typescript to ensure a smooth transition. Additionally, I identified
          areas of friction and pain points within the existing UI system and
          took the initiative to address them by streamlining usability and
          improving documentation. Through close collaboration with developers,
          gathering feedback, and implementing iterative improvements, I
          effectively resolved these issues and optimized the design system for
          increased productivity and consistency across projects. My role as a
          UI System Engineer at QuickNode allowed me to showcase my proficiency
          in technical implementation and collaborative problem-solving,
          ultimately contributing to the team&apos;s overall success.
        </Text>
      </ContentContainer>
    </PageContainer>
  );
}
