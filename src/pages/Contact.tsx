import { FaLinkedin } from "react-icons/fa6";

export function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 size-full">
      <h1>Contact</h1>

      <div
        className={
          "flex flex-col gap-9 max-w-4xl p-5 border-2 border-light-sand rounded-2xl bg-charcoal-sand shadow-2xl"
        }
      >
        <b className="text-2xl">
          Besoin de quelqu'un pour un projet ? N'hésitez pas à me contacter !
        </b>

        <div className="flex justify-center gap-16">
          <a
            href="https://www.linkedin.com/in/nathan-petron-8585931b7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded bg-light-sand text-charcoal-sand"
          >
            <FaLinkedin />

            Linkedin
          </a>

          <a
            href="mailto:petron@et.esiea.fr"
            className="flex items-center gap-1 px-3 py-1 rounded bg-light-sand text-charcoal-sand"
          >
            petron@et.esiea.fr
          </a>
        </div>
      </div>
    </div>
  );
}
