import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import { certificates } from "../data/certficationData";

export default function Certificates() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"
            />
            <div className="fixed inset-0 grid place-items-center z-[100] p-3">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute top-4 right-4 lg:hidden rounded-full bg-white p-2 shadow-md"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>

              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="rounded-2xl pr-5 pl-5 pt-5 w-full max-w-[500px] sm:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    src={active.link}
                    alt={active.title}
                    className="w-full h-full sm:rounded-t-lg object-contain"
                  />
                </motion.div>

                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-800 dark:text-neutral-100"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                   {
                      active.url &&  <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.url}
                      target="_blank"
                      className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 text-white shadow hover:scale-105 transition-transform"
                    >
                      Link
                    </motion.a>
                   }
                  </div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pt-4 text-neutral-600 text-sm md:text-base h-40 md:h-fit pb-10 overflow-auto dark:text-neutral-300 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Heading + Cards */}
      <div className="max-w-2xl mt-[10%] mb-[10%] mx-auto w-full px-4">
        <h2 className="mb-2 text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent text-center">
          Certifications
        </h2>
        <p className="text-gray-300 text-lg text-center mb-12">
          A showcase of the certifications I’ve earned along my learning journey.
        </p>

        <ul className="flex flex-col gap-6">
          {certificates.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={index}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer bg-gray-900 border-solid border-[1px] border-teal-500 hover:border-blue-400 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-4 items-center flex-col md:flex-row">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    src={card.link}
                    alt={card.title}
                    className="h-14 w-20 rounded-lg object-cover"
                  />
                </motion.div>
                <div className="text-center md:text-left">
                  <motion.h3
                    layoutId={`title-${card.title}`}
                    className="font-medium text-gray-200 dark:text-neutral-200"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`issuer-${card.title}`}
                    className="text-sm text-gray-400 dark:text-neutral-400"
                  >
                    Issued by {card.issuer}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}`}
                className="mt-4 md:mt-0 px-4 py-2 text-sm rounded-full font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 text-white shadow hover:scale-105 transition-transform"
              >
                View
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-black dark:text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
