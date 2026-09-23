import mlKolkata from '../../assets/mlKolkata.jpeg';
import prizes from '../../assets/prizes.jpg';
import recieve from '../../assets/recieve.jpg';
import hexafalls0 from '../../assets/hexafalls0.jpeg';
import hexafalls1 from '../../assets/hexafalls1.jpeg';
import hexafalls2 from '../../assets/hexafalls2.jpeg';
import stepout0 from '../../assets/stepout0.jpeg';
import stepout1 from '../../assets/stepout1.jpeg';
import stepout2 from '../../assets/stepout2.jpeg';
import metamorph1 from '../../assets/metamorph1.jpg';
import metamorph2 from '../../assets/metamorph2.jpeg';
import metamorph3 from '../../assets/metamorph3.jpeg';
import metamorph4 from '../../assets/metamorph4.jpeg';

const Experiences = [
    {
        title: "Backend Intern at StepOut",
        description: `I have actively worked as in Intern at StepOut, also travelled Bangalore work on-site work at July. Day to day role includes handling client requirements, delivering and maintaining optimized APIs, security checks, and configuring a maintainable backend system. `,
        images: [stepout1, stepout0, stepout2],
        type: "Internship",
        linkedIn: "https://www.linkedin.com/feed/update/urn:li:activity:7485287201220632577/"
    },
    {
        title: "Hexafalls 2026 Winner",
        description: (
            <>
                Built <a
                    href="https://github.com/Poushali-02/Angizo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-link"
                >
                    Angizo
                </a>{" "}
                an AI powered accessibility tool for visually impaired engineers at Hexafalls 2026 organized by JIS University, Agarpara. Bagged the first prize and the winner badge. Absolutely amazing experience and a great learning on team work. 
            </>
        ),
        images: [hexafalls1, hexafalls0, hexafalls2],
        type: ["Activity", "Achievement"],
        linkedIn: "https://www.linkedin.com/feed/update/urn:li:activity:7490832657828864000/"
    },
    {
        title: "Metamorph 2026 Runner Ups",
        description: (
            <>
                Built <a
                    href="https://github.com/rehodra/vestigium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-link"
                >
                    Vestigium
                </a>{" "}
                
            Vestigium is an enterprise-grade AI code provenance, threat intelligence, and autonomous remediation platform at Metamorph 2026 organized by Guru Nanak Institute of Technology, Sodpur. Bagged the first runner up prize. 
            </>
        ),
        images: [metamorph1, metamorph2, metamorph3, metamorph4],
        type: ["Activity", "Achievement"],
        linkedIn: "https://www.linkedin.com/feed/update/urn:li:activity:7490832657828864000/"
    },
    {
        title: "Experience at Global GenAI Hackathon",
        description: `Participated and won second prize in Weights and biases track at the Global GenAI Hackathon organized by ML Kolkata. Finished our project on the last minute. Took deadline pressure and learned a lot from it. Collaborated with our teammates and presented a working prototype.`,
        images: [mlKolkata, prizes, recieve],
        type: "Activity",
        linkedIn: "https://www.linkedin.com/posts/poushali020106_yesterday-was-a-total-blast-i-remember-activity-7411090129915670528-spfM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXR5BEB4nlj47fYLG9_wmzFdIVuR2IXZl4"
    }
]
export default Experiences;