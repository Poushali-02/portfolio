import prizeImg from '../../assets/prize.jpeg';
import binary1Img from '../../assets/binary1.jpeg';
import binary2Img from '../../assets/binary2.jpeg';


const Experiences = [
    {
        title: "Community Member",
        description: (
            <>
            Actively engaged as an extended community member of <a
            href="https://www.devdotcom.in"
            target="_blank"
            rel="noopener noreferrer"
            className="exp-link"
            >
             devdotcom
            </a>{" "}
            for over a year, participating in events, 
            discussions, and knowledge‑sharing sessions focused on development, careers, 
            and emerging technologies. This involvement has helped build a professional network, 
            stay updated with industry practices, and contribute back to the community by
            supporting peers and juniors
            </>
        ),
        images: [],
        type: "Activity",
        linkedIn: ""
    },
    {
        title: "Contributed at Canner",
        description: (
            <>
            Contributed to the open‑source project <a
            href="https://github.com/CannerAI/CannerAI"
            target="_blank"
            rel="noopener noreferrer"
            className="exp-link"
            >
            CannerAI
            </a>{" "} , 
            working with an existing codebase, issues, and pull‑request workflow on GitHub. This experience 
            involved understanding project architecture, following contribution guidelines, 
            communicating through issues and reviews, and aligning changes with maintainers’ 
            feedback—building confidence in collaborative development and real‑world open‑source practices.
            </>
        ),
        images: [],
        type: "Open Source",
        linkedIn: "https://www.linkedin.com/posts/poushali020106_hacktoberfest-opensource-developercommunity-activity-7387739799538806784-Lngu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXR5BEB4nlj47fYLG9_wmzFdIVuR2IXZl4"
    },
    {
        title: "Came first in college",
        description: `In the first year of college, secured the top position in the department with 
        a SGPA above 9, demonstrating strong grasp of core computer science fundamentals and consistent
         academic discipline. This experience reflects the ability to quickly adapt to a new academic 
         environment, manage multiple subjects in parallel, and maintain high performance under exam pressure.`,
        images: [prizeImg],
        type: "Achievement",
        linkedIn:"https://www.linkedin.com/posts/poushali020106_this-september-started-with-joy-as-i-attended-activity-7371098679010562048-VJt7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXR5BEB4nlj47fYLG9_wmzFdIVuR2IXZl4"
    },
    {
        title: "Experience at Binary Hackathon",
        description: `Participated in the Binary Hackathon hosted at Kalyani Government Engineering College, 
        collaborating with a team to ideate, prototype, and present a solution within 
        the constrained hackathon timeframe. Gained hands‑on experience in problem‑solving 
        under time pressure, dividing responsibilities across development and 
        presentation, and learning how to turn vague problem statements into working technical prototypes.`,
        images: [binary1Img, binary2Img],
        type: "Activity",
        linkedIn: "https://www.linkedin.com/posts/poushali020106_hackathon-innovation-ai-activity-7312357007057915905-cV2k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXR5BEB4nlj47fYLG9_wmzFdIVuR2IXZl4"
    },
]
export default Experiences;