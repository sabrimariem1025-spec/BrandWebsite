import { Reveal } from "./reveal";
import { timeline, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h2 className="section-title max-w-2xl">
            From student curiosity to international training ambition.
          </h2>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-slate dark:text-paper/70 leading-relaxed">
              <p>
              Mariem Sabri is a Tunisia-based Full-Stack Developer,
              Digital Skills Trainer, and technology educator with a
              strong background in software engineering, digital innovation,
              and learner-centered training.
              </p>
              <p>
              Combining technical expertise with a passion for education,
              she designs and delivers practical, inclusive,
              and engaging learning experiences for children, youth, women,
              and adults. Her approach focuses on transforming digital knowledge
              into real-world skills through hands-on activities, interactive learning,
              and project-based training.
              </p>
              <p>
                Beyond teaching technology, Mariem is committed to helping learners build confidence,
                creativity, autonomy, and the practical skills needed to thrive in an increasingly digital world.
                She believes that digital education and artificial intelligence should be accessible, practical,
                inclusive, and adapted to the needs of every learner.
              </p>
                <p>
                With experience in both software development and digital training, 
                Mariem aims to expand her expertise and impact in the fields of digital skills
                and artificial intelligence education.
                Her long-term ambition is to become an internationally recognized Digital Skills and AI Trainer,
                empowering diverse audiences to use technology creatively, confidently, and responsibly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative border-l border-ink/15 dark:border-paper/15 pl-6 space-y-8">
              {timeline.map((step, i) => (
                <li key={step.stage} className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gold" />
                  <span className="font-mono text-[11px] text-teal dark:text-teal-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg mt-1">{step.stage}</h3>
                  <p className="text-sm text-slate dark:text-paper/60 mt-1">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
