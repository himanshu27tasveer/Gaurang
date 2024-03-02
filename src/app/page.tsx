import Image from "next/image";
import Description from "./Description";
import Experience from "./Experience";
import Education from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <Description />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
