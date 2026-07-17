import Lanyard from "@/components/3dCard/Lanyard";

import frontCard from "@/assets/front-card.png";
import backCard from "@/assets/back-card.png";
import lanyardBand from "@/assets/lanyard.png";

export default function LanyardUse() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Lanyard
        position={[0, 0, 24]}
        gravity={[0, -40, 0]}
        fov={20}
        transparent
        frontImage={frontCard}
        backImage={backCard}
        imageFit="cover"
        lanyardImage={lanyardBand}
        lanyardWidth={1}
      />
    </section>
  );
}