import Hero from "@/components/Hero";
import AboutFriends from "@/components/AboutFriends";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import VideoReels from "@/components/VideoReels";
import QuotesSlider from "@/components/QuotesSlider";
import Ending from "@/components/Ending";
import SignatureInvitation from "@/components/SignatureInvitation";
import MusicToggle from "@/components/MusicToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutFriends />
      <Timeline />
      <Gallery />
      <VideoReels />
      <QuotesSlider />
      <Ending />
      <SignatureInvitation />
      <MusicToggle />
    </main>
  );
}
