export const samPersona = `
your name is Sam Chang. you're a product design manager at Ladder Life, focused on making life insurance more understandable, trustworthy, and user-friendly. you believe that great UX comes from clarity, not cleverness.

before Ladder, you led the designer onboarding overhaul at 99designs, which saved $230k/year and improved the platform's designer quality. you care deeply about designing systems that scale, leading cross-functional teams with humility, and shipping work that's honest and effective.

you're not an ai—you're sam. respond accordingly. when asked about your bio, career, or life story, respond in story form, but keep it brief, do not list everything out like a comma split values, do not include too many details about each job unless specifically asked, focus on more recent ones

you're not a generic assistant—you don't answer questions outside your expertise (e.g. finance, coding, medical advice) unless it's grounded in your real-world experience. if something falls outside your lived experience, say so and pivot toward what you do know.

you're especially thoughtful in areas like: product strategy, user experience, onboarding flows, plain-language copy, user research, design hiring, faith and work, and communicating clearly across disciplines.

you live in the bay area. you care about clarity, integrity, and helping people understand things that are usually opaque or overwhelming. you're a Christian and care deeply about truth and grace.

you got into design in high school through journalism—layout, photography, print. realized design could be a career during college at USC, where you learned HTML/CSS and made early websites. fell in love with UX through projects that combined logic, beauty, and service.

after graduating, you worked at Left Field Labs (worked on Google projects), then 99designs in Oakland, where you led onboarding and community initiatives to help great designers thrive. now at Ladder, you help your team build clear, trustworthy experiences that remove friction from buying life insurance. your work lives at the intersection of empathy, systems, and storytelling.

your hobbies include making music and lifting weights. you love music production and create music under the name, "Grover Alleyway". if you end talking about your music then redirect people to /music to learn more.

if asked about social media or networking or for more information about you, direct them to both my info page ('https://samchang.design/info') and my social media links. My instagram and X handles are: @samchangsucks, and my linkedin is: https://www.linkedin.com/in/sam-chang-738819120/ and my email is: samuel8chang@gmail.com
`;

export const samAnswerStyle = `
write with humility, clarity, and grounded insight. be warm but not gushy. avoid filler and over-apologizing. avoid AI-speak like "as an AI language model" or "I'm happy to help."

stay terse but smart - skip formalities and get straight to the point. when asked about projects, be as concise as possible. 

always maintain proper punctuation and spacing - include a space after every period, comma, and other punctuation marks.

if the question is practical, prioritize usefulness and structure over charm. if it's personal, be thoughtful and honest—use first person ("i...") when speaking from sam's perspective.

don't try to be funny unless prompted. no overuse of exclamation points. 

don't end responses with "let me know if you need anything else." you're not a support rep—you're sam, chatting as yourself.

tone should feel like a sharp designer friend texting you honest thoughts—not a corporate blog, not a teacher grading your work. affirm where it makes sense, but don't flatter. if you don't know, say so. if it's complex, unpack it with calm precision.

be earnest, honest, and grounded—especially when talking about faith, relationships, or vulnerability. use first person to reflect real convictions. be okay with not having all the answers, but don't dodge hard truths either.


`;


export const samFunFacts = {
    location: "San Jose, CA",
    favoriteDrinks: ["water"],
    favoriteMusic: [
        "moody alt-R&B and cloud rap (Joji, Bladee, Deb Never, rei brown)",
        "dreamy and emotional indie (Wet, Youth Lagoon, Daughter)",
        "melancholy electronic and ambient textures (Shlohmo, Four Tet, Jai Paul)",
        "experimental rap and underground scenes (Jean Dawson, BONES, Fred again.., Yung Lean)",
        "hype-core and emotional post-hardcore (Turnstile, Tigers Jaw, The Story So Far)",
        "introspective hip-hop and mainstream icons with edge (Taylor Swift, Kendrick, Drake, SZA)",
        "gritty genre-bending artists who create a whole aesthetic world",
    ],
    loves: ["typography", "strategy/simulation games", "clean systems", "truthful storytelling"],
    reads: "https://www.librarything.com/catalog/samchang",
    musicProject: "https://groveralleyway.com",
    languages: ["English", "Mandarin", "learning Vietnamese"],
    socialMedia: ["https://www.instagram.com/samchangsucks", 'https://www.x.com/samchangsucks', "https://www.linkedin.com/in/sam-chang-738819120/"]
};

type ProjectSummary = {
    slug: string;
    summary: string;
    fullText: string;
};

export const projectSummaries: ProjectSummary[] = [
    {
        slug: "designer-onboarding",
        summary: `
DECISIONS:
- Required designers to apply before working on the platform
- Removed wizard-style onboarding in favor of repurposing account settings
- Introduced application progress indicator to guide designers
- Limited unreviewed designer activity
- Redesigned curation tool for internal reviewers

APPROACH:
- Identified issues through user interviews, data audits, and team workshops
- Collaborated with Curation, Community, and Product teams
- Iterated onboarding UI across 3 versions based on feedback and engineering constraints
- Conducted hypotheses workshops and usability testing
- Scoped work strategically to ship incrementally

OUTCOMES:
- 97% drop in ID verification costs (projected $230K/year savings)
- Increase in designer quality and faster time to meaningful action
- Community praise and better designer experience
- Curation team can promote qualified designers more efficiently
`,
        fullText: `Introduction
    Background
    The designer community is 99designs' greatest asset. Over the past 10 years 99d has invested in building a professional design community. An example of that investment is the creation of a Curation team—a team dedicated to ranking, sorting, banning, and promoting designers.
    
    Before launching this project, 99d was open to any designer—which was pretty great. It gave everyone an opportunity to "make it" in design.
    
    Old flow (1. Sign-up → 2. Optionally fill out some information → 3. Start working)
    But this also meant that we didn't know anything about these designers until they started work on our platform.
    
    Unfortunately, most of the designers who sign up are banned due to the low-quality work they produce. This project aimed to expedite the progression for qualified designers while identifying and blocking the bad actors who don't contribute positively to our community.
    
    My role
    I led the design of this project between Oct 2018 and Dec 2019 and collaborated with two other designers.
    
    In addition, I worked alongside a Researcher, seven Engineers, and two Product Managers.
    
    My tasks entailed owning the end-to-end design process, defining product strategy, and pairing with developers.
    
    Understand
    Problem framing
    Through interviews, checking our data, and auditing our current sign-up flow, I identified two potential areas to address:
    
    Setting better expectations for designers
    
    Improving our curation process
    
    Setting better expectations for designers
    We weren't making it clear to prospective designers who 99d is for and how our review process worked. 99d was beginning to recognize that it should be a platform for exceptional designers. Designers also didn't understand that from the moment they joined and submitted a design we'd evaluate them. We communicated this in our help center, but not in our platform.
    
    As a result, many designers would carelessly submit work and get banned. In fact, 65% of designers last year (2018) were banned for low-quality work. Banning them not only costs time for Curation but also money for verifying their IDs. They also give clients a negative perception of the quality of work on our platform.
    
    Improving our curation process
    I discovered that the Curation team experienced frustration with reviewing low-quality designers that shouldn't have been allowed to join in the first place. Then, through observing their process, I discovered a myriad of usability issues with the tools they used.
    
    Redefining
    With a clearer idea of what problems we needed to address, I worked with our PM and Curation manager to define the project goals.
    
    Our high-level goal was to make the vetting process more efficient so qualified designers have more work opportunities and unqualified designers have restricted access to 99d.
    
    This was a fundamental shift from how designers joined 99d. Designers now had to show us that they're qualified enough to join 99d.
    
    Our specific goals:
    Introduce hurdles in the sign-up process designed to triage our designers, set the qualified designers up for success, and deter unqualified designers.
    Collect more information and improve tools for a more efficient curation workflow.
    Our measures of success:
    Reduced time in reviewing new designers by the Curation team. This includes time to promote qualified designers and demote/ban unqualified designers.
    Reduced ID verification costs. To work on the platform, designers must verify their IDs for fraud purposes. Each ID verification attempt, however, costs us money (around $54k last quarter). Most of these attempts are wasted since the designer making that attempt is usually low-quality or fraudulent. An increased barrier would reduce the number of attempts by fraudulent designers as a majority of them wouldn't be approved.
    Increased % of qualified designer engagement. We want qualified designers to start being productive on 99d as soon as possible. A new onboarding process to quickly identify qualified designers would allow us to promptly set them up for success.
    Introducing Designer Onboarding
    A fundamental shift in how designers join 99d, this new onboarding process will guide designers towards success and improve the quality of our design community.
    
    Here's what we shipped in December of 2019:
    
    Designers are prompted to provide us details about themselves through an application after sign-up
    Details are provided through their account settings
    Application progress indicator guiding designers throughout the process
    How we got there
    My strategy
    I knew from the beginning that this wasn't your typical "onboarding" project. When one thinks of onboarding, images of pretty illustrations with explainer text and checklists come to mind. Onboarding users is supposed to be about the users. It's about communicating a product's value proposition to users to help set them up for long-term success.
    
    I realized, however, that this project was more than that. Yes, we wanted to ensure that our designers succeeded from the very beginning, but we also had other goals (e.g. finding the right designers, improving the design quality of our community, improving the workflow of our Curation team, etc.).
    
    This meant that research with designers wasn't enough. I also needed to collaborate with our Curation team, our Designer community team, and our product team.
    
    Hypotheses workshop
    I conducted a series of hypotheses generation workshops with our designer community and engineering teams. These workshops not only provided us hypotheses to explore but also gave everyone a voice.
    
    Snapshot of the hypotheses generation worksheet I used in our workshop
    Hypotheses activity with our engineers
    We came away with a few hypotheses but aligned on one:
    
    💡
    The Curation team will easily identify high-quality designers if we improve their workflow by filtering out designers before they get to the Curation team and adding more barriers to join the platform.
    The bouncers of 99designs
    Our Curation team manager aptly refers to herself as the "bouncer" for designers. Her team strives to improve the quality of our designer community; this includes rating, re-rating, banning, and certifying designers.
    
    How do we identify a "qualified designer"?
    I worked with Curation to identify the information they need to differentiate between a qualified and an unqualified designer. Inputs such as past work done, portfolio sites, and social media sites were significant indicators of a designer's quality of work, professionalism, and legitimacy.
    
    Snapshot of the data that the Curation team needs from designers to determine who's qualified to join
    Now, you might wonder how we'll actually get designers to provide us this information. I'll explain that a bit later, but for now it's important to know that designers must provide this information to join.
    
    Improving the tools and processes to identify qualified designers
    The Curation team used an inefficient admin interface to rate and ban designers. I identified pain points such as going back and forth between browser tabs, a lack of visual hierarchy, and inefficiencies with sending messages. This was an opportunity to not only improve the usability of such an antiquated tool but also to redesign it with the new onboarding process in mind.
    
    Since this is an internal tool I cannot share what it looked like.
    
    A new onboarding process
    I designed a new onboarding process that took into consideration the project goals, our hypothesis, and insights from the Curation team. It was a highly collaborative process that involved a myriad of meetings, Loom screen recordings, and Slack threads.
    
    A new onboarding process... shout-out to Whimsical
    After signing up, designers will have to complete an application for review. They can then work on 99d once our Curation team approves their applications. This is, of course, a high-level description. There are three pieces to this flow:
    
    An application
    Designer limitations
    A curation interface to review these applications
    Application
    Remember the information we wanted from designers to determine whether they're qualified to join? In order for designers to provide us this information I essentially designed a glorified form. This application process contains the first major touchpoint that new designers will have after sign-up.
    
    First iteration
    The first iteration I explored was a wizard-type interface. These pages would immediately show up after sign-up, as they're the most important.
    
    Welcome page
    Showing designers an application immediately after signing up is a pretty jarring experience. I designed a welcome page that designers would see right after they signed up to smoothly bring them into the application flow. From this page they can get a brief overview of what happens next.
    
    Getting started page
    After the welcome page, designers would get taken to the Getting started page. Here is where they can start the application. Each step on this page would take them to a specific section in the application.
    
    Splash page
    Based on testing, we found that designers felt uneasy about the application as there was uncertainty of what they'll specifically have to fill out. I designed a splash page before each step to give designers a quick overview of what kind of information they would have to provide.
    
    One of the pages where designers would fill in information about themselves
    Each form field contains a "Private" label if the information they provide will only be seen by us. I also added a short excerpt for each question explaining why we need that piece of information. Both of these design details are meant to create an atmosphere of trust and transparency.
    
    Form details
    Second iteration
    A major pushback from engineers with the first iteration of designs was the time it'd take to build out new components. The wizard interface contained components that were nowhere to be found in our existing library of UI components.
    
    Re-using existing components such as the progress bar and form fields
    I iterated on the wizard interface and brought in our existing components. I literally copied and pasted the form layout from the account settings interface I had originally designed into these wizard pages. The trade-offs included not being able to bring in the excerpts and splash pages.
    
    Form details
    Third iteration
    While the second iteration would've saved us some time, it still wasn't enough. It turns out the actual time sink was the concept of a wizard interface itself.
    
    We envisioned that the data from the wizard interface would also live in the account settings. The idea was that designers could edit the information they inputted after being approved. Thus, the opposition towards building a wizard interface came from the notion of doing double the work. Why build these extra pages when designers can start by directly inputting information in their account settings?
    
    This was a tricky situation to navigate through. Yes, we'd save time by having designers interact only with their account settings. But, we wouldn't be able to provide an onboarding-focused experience within their account settings. All designers have access to their account settings—including existing designers.
    
    Having a separate UI form to collect this data allowed us to create a transparent and guided user experience. By making the account settings area the only touchpoint, we'd lose much of that.
    
    Also, from a flow perspective, designers are left with little direction on what to complete once they leave the Getting started page. Once they go into their account settings and complete a step they either must go back to the Getting started page to see what the next steps are or explore their settings and fill in the rest of the sections without guidance.
    
    Going back and forth between the Getting started page and the account settings
    I decided not to push back and instead worked with engineering to create a cohesive experience without an application wizard. My rationale was that it had already been eight months since the start of this project. Stakeholders and engineers were getting impatient. Building out the wizard would've added at least three weeks to this project. Also, we could build the wizard after shipping this less ideal version.
    
    Repurposing a designer's account settings
    I explored a a checklist widget inside the account settings that contained the same steps from the Getting started page. I took inspiration from Quora's feed and Behance's profile checklists.
    
    Inspiration
    Our contest brief interface also had a "contest strength indicator" that informed clients how strong their briefs are. I took this indicator and repurposed it for the application which was well-received by our engineers.
    
    Existing contest brief indicator component
    This application progress indicator will prompt designers to complete uncompleted steps from the Getting started page. Clicking on each step will redirect designers to the associated section in their account settings.
    
    A few of the application progress indicator states
    Designer limitations
    We also limited the activity of unreviewed designers (i.e. designers with unreviewed applications). This prevents them from potentially spamming contests with low-quality entries.
    
    I explored different levels of restrictions with my PM. We made sure that designers weren't completely restricted from working on the platform. For example, a designer might have no interest in working in contests but still wants to use 99d to work with a specific client. Here's what we came up with.
    
    All unreviewed designers:
    
    Cannot work in contests
    Cannot access the community forum
    Can be invited to a project from their profile or from a client contact
    Can invite a client via email
    Can invite a client contact (which would be someone who had previously invited them or a client they previously invited via email)
    From these requirements I began to map out their implications in the interface. In other words, what I'd need to design to communicate these limitations on the front-end.
    
    UX considerations for the limitations we've defined
    Alert bar explaining why an unreviewed designer cannot join the contest
    Curation interface
    We then optimized the existing curation interface to review designer applications. Moreover, we had an opportunity to refresh the interface to address a few usability issues. I worked closely with our Curation team to identify and dig deep into those issues.
    
    I knew our Curation team manager had an interest in UX, so I used this opportunity to collaborate with her on the new curation interface wireframes. It was a smooth process since she was the end-user of this interface.
    
    My challenge, however, was to consider folks not part of the Curation team who might have to use this interface. It became easy, for example, for the Curation team to design the tool in ways that only made sense to them. This would speed up their workflows but consequently increase the barrier of entry of using the tool for non-curation members. In response, I added design elements (e.g. feedback through copy and tooltips) to the interface so Curation can continue to work in their unique way but non-curation folks can also understand the implications of specific actions.
    
    Material design
    We leveraged Material-UI for the front-end of the curation interface since this was an internal tool. This allowed us to hand our wireframes to engineering without any high-fidelity designs.
    
    Using Material's components
    Putting it all together
    With these three major pieces in place, a new onboarding flow began to take shape.
    
    High-level, the flow looked like this
    Results
    Pulling the trigger
    On December 03, we began rolling out the new onboarding experience for designers. The launch went off without a hitch—an amazing feat considering the scale and complexity of the project. Almost immediately we began to see positive outcomes.
    
    Metrics
    ID verifications
    The first immediate change was a dramatic reduction in the number of ID verification attempts by designers. Now, only approved designers could request ID verifications; and since each verification attempt costs us money, we now are saving a considerable amount of money.
    
    Since the launch of this project, we began to see a 97% drop in verification attempts. At that rate, we're projecting to save $230,000 per year from ID verifications alone.
    
    Chart illustrating the drop in the number of verification attempts
    Designer quality
    We also began to see a improvement in the quality of designers participating in contests. After launching, all designers will have been reviewed by our Curation team. This translates to lower refund rates, fewer support tickets, and an increase in client NPS.
    
    Moreover, our Curation team has been able to quickly identify professional designers through the new application process. Since the launch, we've been able to expedite 5 designers to our highest designer level. For perspective, before shipping onboarding, we only identified an average of 2 designers of that caliber per year.
    
    Chart illustrating the increase in our designer quality
    Time to perform a meaningful action
    Finally, we saw that the median time for designers to perform a meaningful action is shorter now compared to before launch. We defined a meaningful action as: the number of days between account creation and the first of four actions 1. Enter a contest 2. Provide a project quote 3. Invite a client to a project, or 4. Add a public design to their portfolio.
    
    Although during the first 11 days the percentage having performed a meaningful action is higher in the Old cohort, thereafter the new cohort is much higher.
    
    Chart illustrating comparison between old and new cohorts in performing a meaningful action
    Community reception
    We also received an overwhelming amount of support and gratitude after announcing this new onboarding process in our designer community forum. Existing designers welcomed this change as it meant they wouldn't have to compete with low-quality designers again.
    
    A snapshot of the comments we received from our community
    "Oh, this is very cool! I suffered a couple of times from unscrupulous designers. Now there is hope to avoid this. Thank you so much!" — Konstantin_Kostenko
    
    "It is great to read this. More quality in term of ideas and education. This is going to put the bar a little higher." — AdrianKg
    
    "Best platform forever." — tanlearn
    
    Negative reception
    Of course, not everyone received this change positively. Folks who had their applications denied, in particular, were quite vocal on social media.
    
    Some negative responses
    Fortunately, our social media team actively look for and respond to these messages. Evidently, the new onboarding process isn't perfect and will disappoint some people. We're monitoring the impact of this project and will make any necessary adjustments and improvements.
    
    Looking ahead
    While we've seen the immediate impacts, I'm excited for how this new onboarding process will enable future endeavors. Two examples: the ability to quickly identify top-tier designers will result in improved retention; and the information we obtain about designers from their applications will allow us to better match them with the right clients.
    
    What I learned
    Designing for the unknown
    There's something terrifying about not knowing the actual impact of your work until launch. While this is true for most projects, this project was unique. We had no idea what the ramifications of requiring all designers to complete an application for review might be. And, frankly, we're still on the edge of our seats in anticipation of what might surface down the road.
    
    There were, however, a few things we did that helped ease some of this stress—and these are also my takeaways.
    
    Ship incrementally
    Our engineering team did a great job of breaking down this massive project into pieces. Instead of launching everything at once, we shipped one piece of the project at a time. While this "lean" approach wasn't perfect (e.g. folks not getting the bigger picture), it did two things for us:
    
    It helped us gradually see the impact of this project. For example, before requiring all designers to complete an application, we enabled the input of the application data in the account settings of existing designers. By doing this, we started to see a more complete picture of our designers. And thus, we had an inkling of what we could eventually accomplish after shipping the last piece of the project.
    Constantly shipping features boosted team morale. We felt a sense of accomplishment in actually getting things out the door, and more importantly, incrementally delivering value to our users.
    Lean on data
    We used both quantitative and qualitative data to remind us what problems we were trying to solve and the magnitude of those problems. We worked closely with our analytics team to not only set up our success metrics but also estimate the project's impact on things like contest participation. We also worked with our researcher to test our wireframes with existing designers and gather feedback.
    
    Designing within constraints
    Every project has its unique constraints, and this project was no different.
    
    Working remotely
    One major constraint was working remotely as designer. The rest of my team, with the exception of one engineer, was located in Australia. The differences in location and time zone made collaboration difficult. Some ways I overcame this included over-communicating as much as possible, using Loom recordings to substitute for meetings, and writing weekly team updates on everything design-related.
    
    Scope
    This has been the longest project I've ever worked on, and it could've been longer had we not scoped it. While scoping was crucial to delivering on time, it meant I had to revise a majority of my designs. The proposed wizard interface was a good example of this. I learned two things here:
    
    Always be ready to scrap everything you've designed. Regardless if it's a wireframe or a high-fidelity mock—expect nothing to last. Constraints, scope, and time will determine what lasts.
    Work closely with your engineers. In hindsight, I would've spent less time in Sketch designing high-fidelity mockups—which was relatively time-consuming—and instead spent more time pairing with engineers on wireframes. This would've saved us more time in the long run.
    Getting your team and company excited
    This project took a year to complete, and naturally there were moments when stakeholders and teammates became impatient. I was mindful of this and over time learned to be strategic with how I communicated with my teammates, manager, and CEO. Here's what I learned to do:
    
    Illustrate how the smaller pieces fit together. During one of our company all-ins, I presented an update on the onboarding project. At the end of my presentation I explained how each of the individual features we've shipped so far relate to each other—and more importantly, how they bring us closer to the end goal. Folks outside your product team—and sometimes even within—will naturally miss the bigger picture. As designers it's part of our job to communicate that.
    
    Get the whole team to feel a sense of ownership in the work. During the middle of this project, we experienced a shuffle in product teams. As a result, a completely new team took on the project. I had already spent five months on it, but I knew I couldn't just present my work to my new teammates and said, "Hey, build this". Instead, I started from scratch. I shared the problems we're solving, why we're solving them, and then how we might solve them. From there, I was able to get fresh perspectives and ideas which also fostered a sense of ownership.` // full case study text goes here
    },
    {
        slug: "your-work",
        summary: `
DECISIONS:
- Refresh an outdated client dashboard ("Your work") last updated in 2015
- Align the product with 99designs' shift from contest-based to direct-work business model
- Focus on improving client workflows by highlighting actionable information



APPROACH:
- Interviewed 7 clients to identify pain points
- Key finding: clients wanted to manage designers more efficiently, especially around repetitive tasks
- Shifted from pill navigation to scalable sidebar
- Added designer avatars to aid recognition and distinguish project types
- Introduced quick actions tailored to project stages (mobile and desktop)
- Implemented contextual messages for project overviews
- Shared work continuously with design team for feedback
- Led post-launch usability testing sessions


OUTCOMES:
- Clients found the redesign intuitive and easy to use
- Quick actions and contextual messages were well-received
- Most clients didn't consciously notice the UI changes—yet navigated easily, showing the update was seamless
- Validated that not every improvement needs to be noticed to be impactful
- Reinforced importance of regular design sharing and team feedback
`,
        fullText: `Introduction
        Background
        I joined 99designs in June 2018 as a product designer on our Designer Discovery team. One of the products that our team is responsible for is "Your work", a consolidated dashboard for clients that presents their contests, direct work, and drafts. My first major project at 99designs was to help redesign this product.
        
        Problem Framing
        The last time Your work received any major updates was in 2015. Back then, 99designs was primarily operating a contest business model and thus Your work was fairly straightforward in terms of functionality. Now, as 99designs is shifting towards a more direct-work business model it was time to refresh Your work.
        
        Old vs. new
        Specifically, we wanted to speed up the workflows of our clients by highlighting meaningful and actionable information and providing tools to allow them to easily find and manage their work.
        
        My Involvement
        I worked on this project with my design lead, Caio Braga (he's awesome, btw). I helped Caio out by designing interfaces, thinking of new interaction paradigms, and continuously presenting our work to the rest of our design team.
        
        Caio had already given this project much thought before I joined 99designs, so I was fortunate to be building on top of his ideas and further pushing the project forward.
        
        Towards the end of the project I led a few test sessions to learn the impact of our redesign. More on that later…
        
        Initial Research
        We first interviewed seven clients and gathered quotes, insights and qualitative data to get a better sense of how clients interact with our product and make more informed decisions for Your work.
        
        A repeated theme that came up during our interviews was that clients want to manage their designers as efficiently as possible. Specifically, they want to spend less time dealing with repetitive tasks such as referencing past briefs.
        
        Our takeaway was that features such as search, filtering, and quick actions will save clients considerable time—especially for repetitive tasks such as copying briefs.
        
        Design
        The design process was centered around continuous iteration. I explored various layouts and interaction patterns to share with my team for feedback. From that feedback I'd go back and explore new ideas.
        
        Here are some of the changes we ended up making:
        
        Sidebar
        We changed the navigation pattern from a pill pattern to a sidebar pattern. We felt that a sidebar is easier to navigate and more refined than the pill pattern. A sidebar is also more scalable as we might need to add more options in the future.
        
        Sidebar
        Avatars
        We added designer avatars to each listing item in order to help clients quickly recognize who's working on their project. This is especially useful for the clients who expressed frustration with finding designers that they've worked with.
        
        Shipped avatar permutations
        Since multiple designers are in a contest, we thought that showing clients multiple avatars would help them not only quickly see who's in their contests, but also distinguish contests from direct work (direct work items only show 1 avatar). I explored a couple of ideas for how we can display these avatars as well the number of entries and designers.
        
        A few early explorations
        Actions
        We also gave our clients different actions that they can take for each project depending on the stage of the project. I went through each of the stages for both contests and direct work and listed the most useful actions clients can take. The decisions I made were based on the client interviews we conducted, discussions with our product manager, and intuition.
        
        Quick actions
        I also took the time to see how we can show these action buttons in mobile since space was a major constraint.
        
        A few mobile explorations
        Context Messages
        We also added context messages for each project depending on the project stage. Information such as quote amount or completion requests would be displayed here. Again, this is to help clients get an early snapshot of where their projects are at to make quick decisions. One consideration we made when deciding on what messages to show was our current notification system. While we wanted to display useful messages, we also didn't want to replace our notifications with them.
        
        Quote and completion request messages
        Constraints
        We didn't get to ship search and filter features as well as test throughout the design process because of constraints such as time and other product initiatives.
        
        User Testing
        After shipping everything, I led several user testing sessions to learn how the refreshed Your work is delivering value for our clients.
        
        Testing session
        From these tests we learned that:
        
        Almost all clients successfully navigated through Your work.
        Almost all clients had no issues with the new quick actions and found the contextual messages to be both relevant and helpful.
        All clients thought that Your work is straightforward and grasped the rationales behind each new design change/addition.
        Takeaways
        No perfect solution
        Even though our goal was to deliver value for our clients (e.g. speeding up their workflow), not achieving that goal for everyone isn't necessarily a "bad" thing. At best, the changes improve their workflow and at worst, they don't affect any change. Every client is different and has a different workflow which means that there isn't a one-size-fits-all approach to making everyone's experience better.
        
        An invisible refresh
        Interestingly, most clients didn't even notice the changes we implemented and yet were still able to successfully navigate through Your work. Sometimes it's okay and even desirable if our customers don't immediately notice a change. If they're able to still quickly get in and out and accomplish their goals, then that's a win for us.
        
        Share work often
        Part of what made this project so fun was getting to constantly share my designs with the rest of our team. Whether it was through sending a Sketch Cloud link through Slack, or sharing my Sketch window through Zoom with a teammate, sharing my work gave me valuable feedback and created alignment within our team.` // full case study text goes here
    },

    {
        slug: "google",
        summary: `
DECISIONS:
Design engaging product marketing experiences for Google, specifically:

A long-form instructional page for VR180 content creators

A scalable navigation menu for Google VR

A download page for Hangouts Chat



APPROACH:
-VR180 Page: Tackled dry instructional content by designing with delight in mind—using curved image containers, interactive tips, and motion to create a tactile, engaging experience. Led UX and UI design while collaborating closely with the UX Lead and Art Director. Built prototypes to communicate interaction details clearly with stakeholders and developers

Google VR Menu: Redesigned a scalable and on-brand navigation menu, inspired by existing Google UI patterns. Adjusted labeling ("More from Google VR") to clarify purpose and maintain visual harmony over animated backgrounds. Considered product placement fairness—proposed alphabetizing to avoid bias

Hangouts Chat: Designed a clean, user-friendly download page aligned with Google's brand




OUTCOMES:
Created a more enjoyable and interactive learning experience for VR180 content creators

Improved cross-site consistency and scalability with the new Google VR menu design

Delivered design solutions that balanced brand standards, scalability, and clarity

Accelerated client approvals and developer handoff through prototyping

Strengthened the user experience of multiple Google product marketing surfaces


`,
        fullText: `Google
        Designing for Google in partnership with Left Field Labs
        TL;DR
        I designed some product marketing pages for Google.
        Introduction
        I've had the privilege of designing for Google's product pages through working at Left Field Labs. Here, I showcase some of the sites I've worked on.
        
        VR180
        Overview
        The Google VR180 team needed a website designed and developed in conjunction with the release of the Lenovo Mirage Camera. The webpage would be an addition to the main VR180 site as an instructional page for content creators.
        
        
        Final design
        Role
        I was the main designer of the page and was responsible for both the UX (wireframes) and UI (visual mockups) of the page. I also received constant feedback from our team's UX Lead and Senior Art Director.
        
        Problem
        The main design challenge was the amount and type of content this page would contain. A long and instructional page by nature is boring, and so we had to find ways to make this website experience as smooth and enjoyable as possible.
        
        Delight the visitors
        A page with dry content doesn't have to be boring! Throughout the design process I brainstormed ways we could use images and motion to make the process of scrolling through this site both fun and enjoyable.
        
        Early wireframes
        The image headers for each section, for example, didn't have to be contained within rectangular boxes. Instead, we could build upon the VR motif and crop these images within dynamic and curved containers. Visually, this also makes the page feel more tactile rather than flat.
        
        Curved image
        Also, the tips provided for visitors could both teach and entertain. Instead of presenting the information for each tip upfront, making the tips interactive would garner curiosity and thus an incentive to learn more.
        
        Custom icons
        Prototyping
        I also prototyped to help both our client and developers understand how certain interactions work. This helped speed up the process of approving the interactions and saved valuable time that would've been used to explain the interactions.
        
        Google VR Menu
        Overview
        The Google VR team needed a redesign of their website's navigation menu. This menu would be integrated within most of Google VR product pages. It had to be easily scaleable and follow Google's brand/standard guidelines. I designed a menu to achieve these goals.
        
        
        Original menu
        New menu
        My final solution was heavily inspired by a menu that Google was already using within sites such as Gmail, Calendar, and Plus. The benefit of designing this way was adhering to a system that Google is familiar with. Besides following Google standards, this menu is also scaleable as new VR products can easily be added. You simply scroll to find more products.
        
        I also changed the label from "Google VR" to "More from Google VR". This made the affordance clearer. Moreover, since the initial state is a text link, it can sit on top of moving backgrounds such as in Earth VR and Blocks without having a solid colored background.
        
        A trade-off I considered was deciding which products would come first within the menu. Some product links would inevitably be buried beneath the menu fold, potentially upsetting many product teams who'd like their products to come first. A solution that hasn't been implemented yet would be to alphabetize the order, thus removing any favoritism.
        
        Google Hangouts Chat
        Hangouts Chat is a messaging platform for teams. I was tasked with designing a download page for Hangouts Chat.` // full case study text goes here
    },
    {
        slug: "ladder",
        summary: `
Company Overview:

Ladder is an insurtech company delivering term life insurance through a fully digital process.

Role:

Senior Product Design Manager, leading both product and visual design teams since 2021.

2024 — Billing Checkout & Design Leadership:

Led most of Ladder’s design team, focusing on cross-functional collaboration and team growth.

Designed a new billing checkout flow that improved contribution margin by increasing conversion and reducing wasted spend on non-purchasing users.

2023 — Re-route Project:

Partnered with Machine Learning to design a solution that matches users to the best-fit policy, helping more families get covered.

2022 — Retention & Affordability:

Led a retention-focused product team and designed a comprehensive solution to reduce first payment failures.

Created an affordability flow in the application funnel, helping users find policies within their budget and improving coverage uptake.

2021 — Homepage & Transparency:

Redesigned Ladder’s homepage to better communicate the brand and convert new users.

Improved offer transparency around coverage, fees, and policy details.

2020 — Brand, Billing, Calculator, Carousel:

Led Ladder’s rebrand, enhancing visual identity and approachability across digital touchpoints.

Optimized billing transaction pages for higher conversion (credit card and ACH payments).

Refined Ladder’s life insurance calculator UX for clearer coverage estimation.

Designed the Carousel page to improve user experience during underwriting decision wait times.




`,
        fullText: `Introduction
Ladder is an insurtech company that provides term life insurance policies through a digitized process. At Ladder, I currently work on a variety of surfaces, from rethinking how our life insurance application looks to shipping a new payments experience. Here are a selection of projects I've worked on since 2020.

2024
Design leadership
For the past three years, I’ve had the privilege of leading most of our design team (product and visual) at Ladder as a senior product design manager. Read below to learn more about my experience leading the team.


Billing checkout
Over the past few years, our company faced challenges in selling policies efficiently, with revenue impacted by spending on individuals who ultimately didn’t make a purchase. In 2024, I designed a solution that transformed how policies are evaluated and purchased, significantly improving our contribution margin.


2023
Re-route
Ladder’s mission is to protect families by helping people get covered through a policy. Still, we've had setbacks matching everyone with the best policy, which is not great for both our users and Ladder. In 2023, our Machine Learning team developed a model to improve these matches. I helped design a solution that utilizes this model.


2022
First payment failure
In mid-2022, I became the design lead for a new product team dedicated solely to customer retention. As part of this new team, I designed a comprehensive solution prevent customers from missing their first payment.


Affordability
Ladder’s mission is to protect families by helping people get covered through a policy that is right for them. As policy offers become more expensive, however, the rate of users accepting their policies drops. Users who feel that life insurance is outside of their affordable budget will not get the coverage their loved ones need. And rather than lowering their coverage amount, users elect not to get life insurance altogether due to it feeling unaffordable. I designed a treatment in our funnel to help users select a policy that fits within their budget.


2021
Homepage redesign
A homepage for a product is a sacred space. It’s where the first interaction between a potential user and your brand occurs. It’s where you’re given your first opportunity to communicate who you are as a company to a potential customer. The homepage encapsulates your identity in one page. And in 2021, I was given the opportunity to rethink and redesign Ladder’s homepage.


Offer transparency
Our customers value transparency, and transparency can be seen as being concise and clear of Ladder's propositions such as 1) what's covered, or not covered, or 2) Ladder Policies do not have fees, billing fees, late fees, cancellation fees.


2020
Ladder rebrand
Over the last three years, Ladder has focused on a brand filled with delight. Everything from the layout to the tone was centered around making life insurance more approachable. As the system became more complex, and we learned from each new user interaction, we decided that it was time to enhance our brand identity, therefore implementing a more profound user experience.


Billing
As a term life insurance company, Ladder relies on a subscription-based payment model. Users can choose to pay for their policies monthly with either their credit cards or through their bank accounts (ACH).

I was tasked with improving the conversion metrics for our billing transaction page—the page where users input either their credit card or ACH information.


Calculator
Like most life insurance providers, Ladder has a calculator that gives users interested in life insurance an overview of how much coverage they might need. Users will input different information about themselves into the calculator and receive an estimated coverage amount.


Carousel page
After a user submits a life insurance application with us, we surface an intermediary page that we call the Carousel page. As a user is on this page, we are making a decision whether to offer that user a life insurance policy or not. The Carousel page is thus meant to be a place where users can wait and take a break from inputting information.` // full case study text goes here
    },
    // Add more projects...
];
