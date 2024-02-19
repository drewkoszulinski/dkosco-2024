import { ContentContainer } from "@/app/components/ContentContainer";
import { ImageSection } from "@/app/components/ImageSection";
import { PageContainer } from "@/app/components/PageContainer";
import { PageHeading } from "@/app/components/PageHeading";
import { Text } from "@/app/components/Text";
import classNames from "classnames";

export const RaykaPage = () => {
  return (
    <PageContainer>
      <PageHeading
        title="Rayka"
        subtitle="Head of Design, 0 to 1, go to market"
      />
      <ContentContainer>
        <ImageSection
          src="/rayka.png"
          alt="A handful of screens from the Rayka local discovery mobile app"
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
            <Text color="highlight">User Research</Text>
          </div>
        </div>
        <Text color="secondary">
          During my tenure as Head of Design at Rayka, I embraced a multifaceted
          role encompassing various responsibilities. From spearheading user
          research and interviews to validating features and defining product
          strategy, I navigated a highly competitive landscape, constantly
          refining my grasp of product-market dynamics. This experience
          compelled me to adopt a holistic perspective, emphasizing user
          engagement through genuine utility over superficial tactics. Notably,
          the Rayka mobile app earned a commendable 4.7-star rating in the iOS
          App Store, affirming the success of our user-centered approach.
        </Text>
      </ContentContainer>
    </PageContainer>
  );
};

export default RaykaPage;
