import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Training } from "@/components/training";
import { AudiencesMethodology } from "@/components/audiences-methodology";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Certificates } from "@/components/certificates";
import { Achievements } from "@/components/achievements";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Training />
        <AudiencesMethodology />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Achievements />
        <Gallery />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
