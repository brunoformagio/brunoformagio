"use client";
import React from "react";
import SubTitle from "../../layout/SubTitle";
import { SkillBox } from "./SkillBox";
import {
  ArrowPathIcon,
  ArrowUturnUpIcon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
  MinusCircleIcon,
  SquaresPlusIcon,
  ViewfinderCircleIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { useMainContext } from "../../context/mainContext";

const SkillsContainer = ({ children }: { children: any }) => {
  return (
    <div className=" relative h-auto max-w-full w-[80vw] my-[1.4vw]">
      <div className="relative gap-[2vw] h-auto lg:gap-[1vw] grid grid-cols-3 lg:grid-cols-4 ">
        {children}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const { dict, skillSection } = useMainContext();

  return (
    <div className="mt-[1vw] overflow-hidden w-full">
      {/* Tools or Technologies */}
      <SkillsContainer>
        {skillSection === "code" && (
          <>
            <SkillBox
              title="Javascript"
              icon={<img src="/logos/javascript.webp" alt={"Javascript"} />}
              experience={"15+ " + dict.skills["years"]}
            />
            <SkillBox
              title="Typescript"
              icon={<img src="/logos/typescript.webp" alt={"Typescript"} />}
              experience={"5+ " + dict.skills["years"]}
            />
            <SkillBox
              title="HTML"
              icon={<img src="/logos/html.webp" alt={"HTML5"} />}
              experience={"15+ " + dict.skills["years"]}
            />
            {/* <SkillBox title="CSS" icon={<img src="/logos/css.webp" alt={"CSS3"} />} experience={"15+ "+ dict.skills["years"]} /> */}
            <SkillBox
              title="NodeJS"
              icon={<img src="/logos/node.webp" alt={"NodeJS"} />}
              experience={"10+ " + dict.skills["years"]}
            />
            <SkillBox
              title="React.js"
              icon={<img src="/logos/react.webp" alt={"React"} />}
              experience={"10+ " + dict.skills["years"]}
            />
            <SkillBox
              title="Next.js"
              icon={<img src="/logos/nextjs.webp" alt={"Next"} />}
              experience={"5+ " + dict.skills["years"]}
            />
            <SkillBox
              title="TailwindCSS"
              icon={<img src="/logos/tailwind.webp" alt={"TailwindCSS"} />}
              experience={"2+ " + dict.skills["years"]}
            />
            <SkillBox
              title="Git"
              icon={<img src="/logos/git.webp" alt={"Git"} />}
              experience={"10+ " + dict.skills["years"]}
            />
          </>
        )}

        {skillSection === "api" && (
          <>
            <SkillBox
              title="RESTful"
              icon={<img src="/logos/restapi.webp" alt={"RESTful"} />}
              experience={"10+ " + dict.skills["years"]}
            />
            <SkillBox
              title="GraphQL"
              icon={<img src="/logos/graphql.webp" alt={"GraphQL"} />}
              experience={"5+ " + dict.skills["years"]}
            />
            <SkillBox
              title="Websockets"
              icon={<img src="/logos/websockets.webp" alt={"Websockets"} />}
              experience={"2+ " + dict.skills["years"]}
            />
            <SkillBox
              title="Web3 Wallet APIs"
              icon={<img src="/logos/metamask.webp" alt={"Metamask"} />}
              experience={"5+ " + dict.skills["years"]}
            />
            <SkillBox
              title="OpenAI"
              icon={<img src="/logos/openai.webp" alt={"OpenAI"} />}
              experience={"2+ " + dict.skills["years"]}
            />
          </>
        )}

        {skillSection === "principles" && (
          <>
            <SkillBox
              title="OOP + SOLID"
              icon={<SquaresPlusIcon className="w-[6vw] lg:w-[2vw]" />}
              experience={"Core Principles"}
            />
            <SkillBox
              title={dict.skills["Unit Tests"]}
              icon={<ArrowPathIcon className="w-[6vw] lg:w-[2vw]" />}
              experience={`90%+ ${dict.skills["coverage"]}`}
            />
            <SkillBox
              title="Git Workflow"
              icon={<ArrowUturnUpIcon className="w-[6vw] lg:w-[2vw]" />}
              experience={"Branching"}
            />
            <SkillBox
              title={dict.skills["Documentation"]}
              icon={<BookOpenIcon className="w-[6vw] lg:w-[2vw]" />}
              experience={dict.skills["Code & Design"]}
            />
            <SkillBox
              title={dict.skills["Responsive"]}
              icon={<DevicePhoneMobileIcon className="w-[6vw] lg:w-[2vw]" />}
              experience={"Design Mindset"}
            />
            <SkillBox
              title={dict.skills["Minimalism"]}
              icon={<MinusCircleIcon className="w-[6vw] lg:w-[2vw]" />}
              experience={dict.skills["Less is more"]}
            />
          </>
        )}

        {skillSection === "design" &&
            <>
            <SkillBox title="Figma" icon={<img src="/logos/figma.webp" alt={"Figma"} />} experience={"3+ "+ dict.skills["years"]} />
            <SkillBox title="Photoshop" icon={<img src="/logos/photoshop.webp" alt={"Photoshop"} />} experience={"15+ "+ dict.skills["years"]} />
            <SkillBox title="Illustrator" icon={<img src="/logos/illustrator.webp" alt={"Illustrator"} />} experience={"15+ "+ dict.skills["years"]} />
            <SkillBox title="After Effects" icon={<img src="/logos/after-effects.webp" alt={"After Effects"} />} experience={"10+ "+ dict.skills["years"]} />
            <SkillBox title="Miro" icon={<img src="/logos/miro.webp" alt={"Miri"} />} experience={"2+ "+ dict.skills["years"]} />
            <SkillBox title="Cinema 4D" icon={<img src="/logos/cinema4d.webp" alt={"Cinema 4D"} />} experience={"3+ "+ dict.skills["years"]} />
            </>}
      </SkillsContainer>
    </div>
  );
}
