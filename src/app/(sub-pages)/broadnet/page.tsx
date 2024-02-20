import { ContentContainer } from "@/app/components/ContentContainer";
import { ImageSection } from "@/app/components/ImageSection";
import { PageContainer } from "@/app/components/PageContainer";
import { PageHeading } from "@/app/components/PageHeading";
import { Text } from "@/app/components/Text";
import classNames from "classnames";

export default function BroadnetPage() {
  return (
    <PageContainer>
      <PageHeading
        title="Broadnet Teleservices"
        subtitle="Legacy web app rebuild from the ground-up"
      />
      <ContentContainer>
        <ImageSection
          src="/broadnet.png"
          alt="Several screens from the Broadnet Teleservices dashboard"
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
            <Text color="highlight">User Experience Design</Text>
            <Text color="highlight">User Interface Design</Text>
            <Text color="highlight">UI System Design</Text>
            <Text color="highlight">Frontend Engineering</Text>
          </div>
        </div>
        <Text color="secondary">
          My journey at Broadnet Teleservices began as a designer and concluded
          as a frontend developer, marking a period filled with unexpected
          challenges and growth. Upon my arrival, I encountered a small
          development team grappling with an extensive code overhaul to replace
          a decades-old PHP system. Taking the initiative, I laid the groundwork
          by establishing a foundational design system. Subsequently, I
          collaborated with the frontend team to translate this system into
          reality, while external designers continued the project&apos;s visual
          development. Leveraging Angular, Tailwind, and Storybook, we crafted
          the frontend for Broadnet&apos;s comprehensive product rewrite.
        </Text>
      </ContentContainer>
    </PageContainer>
  );
}
