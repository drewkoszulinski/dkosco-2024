import classNames from "classnames";
import { Text } from "../../components/Text";
import { HomepageCard } from "../../components/HomepageCard";
import { HeroAnimation } from "../../components/HeroAnimation/HeroAnimation";
import { WorkListItem } from "../../components/WorkListItem";
import { BioSection } from "../../components/BioSection";

export const DevPage = () => {
  return (
    <>
      <div
        className={classNames("flex flex-col gap-y-48", {
          // ["absolute opacity-0 pointer-events-none"]: isSwitchOn === true,
        })}
      >
        <div
          className={classNames(
            "w-full max-w-[75rem] mx-auto relative mb-32 md:mb-0"
          )}
        >
          <div className={classNames("lg:ml-[28.5rem] !z-40")}>
            <HeroAnimation />
            <div className={classNames("flex flex-col w-full")}>
              <Text size="xl" as="h1">
                Drew Koszulinski
              </Text>
              <Text size="lg" as="h2" color="highlight" isMono>
                10 years of experience designing and building airtight user
                interfaces
              </Text>
            </div>
            <div className={classNames("flex flex-col gap-y-6 mt-12")}>
              <HomepageCard
                iconName="design"
                cardTitle="Design"
                cardBody="The rendering of intent based on the goals of the business and the needs of the users."
              />
              <HomepageCard
                iconName="atom"
                cardTitle="UI Systems"
                cardBody="Unique and scalable UI patterns to pave the way for fast iteration and effective feature development."
              />
              <HomepageCard
                iconName="code"
                cardTitle="Frontend Development"
                cardBody="Realization of design specifications according to business goals using HTML, CSS, and JS."
              />
            </div>
          </div>
        </div>

        <div className={classNames("w-full max-w-[50rem] mx-auto z-20")}>
          <Text size="xl" as="h3">
            Work
          </Text>
          <div className={classNames("flex flex-col w-full")}>
            <WorkListItem
              title="Get Aligned"
              subtitle="Pretty Much Everything But The Backend"
              href="/get-aligned"
              buttonLabel="Case Study"
            />
            <WorkListItem
              title="Flatiron School"
              subtitle="Design Lead + React UI Systems Development"
              href="/flatiron"
              buttonLabel="Case Study"
            />
            <WorkListItem
              title="QuickNode"
              subtitle="React UI Systems Engineering"
              href="/qn"
              buttonLabel="Read More"
            />
            <WorkListItem
              title="Broadnet Teleservices"
              subtitle="Design + Angular UI Development"
              href="/broadnet"
              buttonLabel="Read More"
            />
            <WorkListItem
              title="Russell Reynolds"
              subtitle="Design Lead"
              href="/rr"
              buttonLabel="Read More"
            />
            <WorkListItem
              title="Rayka"
              subtitle="Head of Design"
              href="/rayka"
              buttonLabel="Read More"
            />
          </div>
        </div>
      </div>
      <BioSection variant={"design-dev"} />
    </>
  );
};
