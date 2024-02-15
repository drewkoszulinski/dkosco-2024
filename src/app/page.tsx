import classNames from "classnames";
import Image from "next/image";
import { Text } from "./components/Text";
import { HomepageCard } from "./components/HomepageCard";
import { HeroAnimation } from "./components/HeroAnimation/HeroAnimation";
import { WorkListItem } from "./components/WorkListItem";
import { BioSection } from "./components/BioSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-[11.5rem] min-h-screen px-10 pt-10 pb-40">
      <div className={classNames("w-full max-w-[75rem] mx-auto flex")}>
        <HeroAnimation />
        <div className={classNames("flex flex-col gap-y-12 w-full pt-16")}>
          <div className={classNames("flex flex-col w-full")}>
            <Text size="xl" as="h1">
              Drew Koszulinski
            </Text>
            <Text size="lg" as="h2" color="highlight" isMono>
              Designing & Building Airtight User Experiences
            </Text>
          </div>
          <div className={classNames("flex flex-col gap-y-6")}>
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

      <div
        className={classNames(
          "flex flex-col gap-y-4 w-full max-w-[50rem] mx-auto"
        )}
      >
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
            title="Rayka"
            subtitle="Head of Design"
            href="/rayka"
            buttonLabel="Read More"
          />
        </div>
      </div>
      <BioSection />
    </main>
  );
}
