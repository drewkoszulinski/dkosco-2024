import { BioSection } from "@/app/components/BioSection";
import { PhotoSection } from "@/app/components/PhotoSection";

export default function PhotoPage() {
  return (
    <>
      <PhotoSection isHidden={false} />
      <BioSection variant="photo" />
    </>
  );
}
