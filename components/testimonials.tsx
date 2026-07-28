import { Reveal } from "./reveal";
import { Quote } from "lucide-react";

const groups = ["Students", "NGOs", "Associations", "Training Participants", "Employers"];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-paper-soft/40 dark:bg-white/[0.02]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="section-title max-w-2xl">What training partners are saying.</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 card-surface rounded-2xl p-10 text-center max-w-2xl">
            <Quote className="text-gold mx-auto" size={26} />
            <p className="mt-4 text-slate dark:text-paper/70">
              This section is ready for real feedback. Once quotes are
              collected from {groups.join(", ").toLowerCase()}, they&rsquo;ll
              slot in here as a slider.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
