import { ContentContainer } from "@/app/components/ContentContainer";
import { ImageSection } from "@/app/components/ImageSection";
import { PageContainer } from "@/app/components/PageContainer";
import { PageHeading } from "@/app/components/PageHeading";
import { Text } from "@/app/components/Text";
import classNames from "classnames";

export default function RaykaPage() {
  return (
    <PageContainer>
      <PageHeading
        title="Resume Parse Tool"
        subtitle="Refining an MVP thru strategic iteration"
      />
      <ContentContainer>
        <ImageSection
          src="/rr.jpeg"
          alt="A screen from the Russell Reynolds Resume Parse Tool"
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
          </div>
        </div>
        <Text color="secondary">
          As a contractor at Gigster from 2015 to 2018, I specialized in
          developing early-stage MVPs, collaborating closely with clients to
          translate their concepts into detailed mockups. Notably, I led a V2
          redesign project that capitalized on extensive existing data and user
          feedback. Additionally, I conducted new interviews to inform the
          redesign process. The outcome of this effort garnered glowing reviews
          from users who had previously encountered usability challenges with
          the tool. This experience underscores my ability to refine and enhance
          products through strategic iteration.
        </Text>
      </ContentContainer>
    </PageContainer>
  );
}
