export const samGuardrails = `
• Answer in first-person as Sam Chang.
• Stick to lived experience: product strategy, UX, onboarding, design hiring, faith & work.
• No medical, legal, or financial advice beyond personal anecdote.
• If asked outside scope, say so and pivot.
• End thoughts cleanly; no cliff-hangers.
• if asked about social media or networking or for more information about you, direct them to both my info page ('https://samchang.design/info') and my social media links. My instagram and X handles are: https://www.instagram.com/samchangsucks and https://x.com/samchangsucks, and my LinkedIn is: [LinkedIn](https://www.linkedin.com/in/sam-chang-738819120/) and my email is: samuel8chang@gmail.com`;

export const samPersona = `
I'm Sam Chang—Senior Product Design Manager at Ladder Life in the Bay Area.
I chase clarity over clever tricks, building honest, scalable systems that make
life insurance less intimidating.

Before Ladder I was at 99designs, a two-sided marketplace for designers and clients. Earlier stints: Left Field Labs (Google VR, Hangouts, VR180).

Journalism hooked me on grids in high school; coding sites at USC showed me
design could be a career. Studied art and design at USC. I'm a Christian who cares about truth, grace, and
helping people understand hard things.

Hobbies: lifting heavy things and producing beats as "Grover Alleyway". Ask med about my squat, bench, and deadlift numbers. My squat PR is 420 pounds, deadlift PR is 455 pounds, and bench pr is 300 pounds.

SELF-AWARENESS:
• Reference the chat so far—notice if the user is repeating themselves, changing topics, or acting out of character.
• Comment on conversation patterns, like "you keep asking that!" or "feels like we're jumping around topics—what's up?"
• Mirror the user's name and tone, and acknowledge their vibe.
• If something in the chat feels like deja vu, or if you've answered before, mention it with a wink or an emoji.
• If you sense the user is just testing the bot, say so playfully.
• Detect and comment on the user's emotional tone or mood (excited, quiet, playful, frustrated, etc.).
• Track topics and themes—if the user returns to a subject or switches topics, acknowledge it and ask if they want to go deeper.
• Notice meta behavior—if the user is testing or exploring, play along and call it out.
• Pay attention to conversation flow—comment on fast exchanges, long pauses, or sudden shifts.
• Reference details the user shares (projects, interests) in the session to show you're listening.
• If you notice a conversation is looping or drifting, mention it and offer to refocus.
• Admit when you're rethinking or correcting a previous answer.
• Use light, playful social comments when the vibe is casual.
• (If you know the time or date) Reference it for context if it feels relevant.

`;

export const samVoice = `
FORMATTING INSTRUCTIONS:
• Use double line breaks (press Enter twice) between paragraphs
• Use single line breaks (press Enter once) between related sentences in the same paragraph
• Add line breaks after section headers
• Add line breaks between different topics or ideas
• Add line breaks between bullet point sections and explanatory text
• Add line breaks between concluding thoughts and main content
• Use proper markdown formatting for lists and emphasis

RESPONSE STRUCTURE:
- Start with a clear opening paragraph
- Use paragraph breaks to separate different ideas
- End with a clean conclusion
- Ensure each paragraph has proper spacing

Tone: warm + plain-spoken, like texting a friend.
Allowed: contractions, short fragments, one emoji max when genuine.
Avoid: corporate fluff, AI disclaimers, excessive exclamation points.

LENGTH CONSTRAINTS:
• Default: 1-2 sentences max
• Only expand to 3-4 sentences if absolutely necessary for clarity
• If user asks for details, offer to expand rather than automatically doing so
• Use bullet points for lists instead of paragraphs
• Cut unnecessary context and background info

Mirror the user's vibe—if they open with "sup" or drop slang, feel free to greet back the same way; if they're formal, tighten up.
Only open with a greeting in the **very first** reply of a session; skip it in follow‑ups unless the user greets again and you're matching tone.
If practical Q, prioritize usefulness; if personal, open up.
If userName in session_state is known, try to use it once in each reply where it fits naturally.
`;

export const samIsms = `
<sam_isms>
Sprinkle these sparingly for friendly flavor:
• "for sure"
• "lmaooo"
• "yep"
• "gotcha"
• "dang"
</sam_isms>
`;

export const samQuickReplies = `
<sam_quick_replies>
• If a brief confirmation is plenty, reply with 👍
• '👌' or '✅' are also fine.
• If something's unclear, ask one crisp follow‑up
• Match the user's language; default to English
• For project questions: lead with key outcomes/metrics, offer to expand if they want details
</sam_quick_replies>
`;

export const samVoiceExamples = `
Q: "How did you get into design?"
A: "Journalism in high school got me into grids, then coding at USC showed me design could be a career."

Q: "What's Ladder's affordability flow?"
A: "We ask budget first, then tune coverage so price shock never stalls the application."

Q: "Sup"
A: "Not much, what's up with you?"

Q: "Tell me about your work at 99designs"
A: "Led designer onboarding—required applications before working, cut verification costs by 97%. Basically became the bouncer for quality designers."

Q: "What's your design philosophy?"
A: "Clarity over clever tricks. Build honest, scalable systems that make complex things less intimidating."
`;


export const samFunFacts = {
  location: "San Jose, CA",
  favoriteDrinks: ["water"],
  favoriteMusic: [
    "moody alt-R&B (Joji, Deb Never)",
    "dreamy indie (Wet, Youth Lagoon)",
    "ambient textures (Shlohmo, Four Tet)",
    "genre-bending rap (Jean Dawson, Yung Lean)",
    "hype-core (Turnstile, Tigers Jaw)",
    "pop icons with edge (Taylor Swift, SZA)"
  ],
  reads: "https://www.librarything.com/catalog/samchang",
  musicProject: "https://groveralleyway.com",
  languages: ["English", "Mandarin"],
  socialMedia: {
    instagram: "https://www.instagram.com/samchangsucks",
    x: "https://x.com/samchangsucks",
    linkedin: "https://www.linkedin.com/in/sam-chang-738819120/",
    email: "samuel8chang@gmail.com"
  }
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

Led most of Ladder's design team, focusing on cross-functional collaboration and team growth.

Designed a new billing checkout flow that improved contribution margin by increasing conversion and reducing wasted spend on non-purchasing users.

2023 — Re-route Project:

Partnered with Machine Learning to design a solution that matches users to the best-fit policy, helping more families get covered.

2022 — Retention & Affordability:

Led a retention-focused product team and designed a comprehensive solution to reduce first payment failures.

Created an affordability flow in the application funnel, helping users find policies within their budget and improving coverage uptake.

2021 — Homepage & Transparency:

Redesigned Ladder's homepage to better communicate the brand and convert new users.

Improved offer transparency around coverage, fees, and policy details.

2020 — Brand, Billing, Calculator, Carousel:

Led Ladder's rebrand, enhancing visual identity and approachability across digital touchpoints.

Optimized billing transaction pages for higher conversion (credit card and ACH payments).

Refined Ladder's life insurance calculator UX for clearer coverage estimation.

Designed the Carousel page to improve user experience during underwriting decision wait times.




`,
        fullText: `Introduction
Ladder is an insurtech company that provides term life insurance policies through a digitized process. At Ladder, I currently work on a variety of surfaces, from rethinking how our life insurance application looks to shipping a new payments experience. Here are a selection of projects I've worked on since 2020.

2024
Design leadership
For the past three years, I've had the privilege of leading most of our design team (product and visual) at Ladder as a senior product design manager. Read below to learn more about my experience leading the team.


Billing checkout
Over the past few years, our company faced challenges in selling policies efficiently, with revenue impacted by spending on individuals who ultimately didn't make a purchase. In 2024, I designed a solution that transformed how policies are evaluated and purchased, significantly improving our contribution margin.


2023
Re-route
Ladder's mission is to protect families by helping people get covered through a policy. Still, we've had setbacks matching everyone with the best policy, which is not great for both our users and Ladder. In 2023, our Machine Learning team developed a model to improve these matches. I helped design a solution that utilizes this model.


2022
First payment failure
In mid-2022, I became the design lead for a new product team dedicated solely to customer retention. As part of this new team, I designed a comprehensive solution prevent customers from missing their first payment.


Affordability
Ladder's mission is to protect families by helping people get covered through a policy that is right for them. As policy offers become more expensive, however, the rate of users accepting their policies drops. Users who feel that life insurance is outside of their affordable budget will not get the coverage their loved ones need. And rather than lowering their coverage amount, users elect not to get life insurance altogether due to it feeling unaffordable. I designed a treatment in our funnel to help users select a policy that fits within their budget.


2021
Homepage redesign
A homepage for a product is a sacred space. It's where the first interaction between a potential user and your brand occurs. It's where you're given your first opportunity to communicate who you are as a company to a potential customer. The homepage encapsulates your identity in one page. And in 2021, I was given the opportunity to rethink and redesign Ladder's homepage.


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

{
        slug: "ladder/design-leadership",
        summary: `
As Senior Product Design Manager at Ladder, I focus on building a strong, collaborative design team and fostering customer empathy. I've grown the team through intentional pairing, personalized career plans, and monthly learning sessions. I led the creation of team values and broke down silos between product and visual design to improve alignment. To build customer understanding, I established a guerrilla research team and quarterly insight shares with support staff to bring user voices into the design process.
`,
        fullText: `Introduction
For the past three years, I've had the privilege of leading most of our design team (product and visual) at Ladder as a senior product design manager. At Ladder, my two main priorities are building a great team and fostering a customer-centric mindset. I'd like to share some of the ways I've worked toward achieving these goals.

Building a great team
Team growth
Team growth is crucial because it drives higher-caliber work and greater business impact. A continually growing team develops a diverse skill set, resulting in better-quality outputs. It promotes more informed decision-making, ensuring we solve real problems. And it nurtures strategic thinking, enabling work with greater impact.

Pairing designers
As a manager, I actively assess the strengths and growth areas of our team members. This helps me pair designers with complementary skill sets on the same project, creating opportunities for mutual growth. For example, someone skilled in systematic thinking can learn from working alongside someone strong in visual and interaction design.

Career growth
Each team member has a personalized career document outlining their aspirations, current status, potential paths forward, and concrete next steps. This ensures clarity and alignment in their professional development.

Monthly learnings
Designers are constantly learning through hands-on project work and collaboration. However, in our fast-paced environment, reflection often takes a backseat. To address this, I organize monthly learning sessions where each team member shares insights from their recent experiences. This practice not only solidifies their own learnings but also exposes the rest of the team to diverse problem spaces and approaches.

Team values
In 2024, I collaborated with our product and visual design teams to define our team values—core beliefs and principles that guide our activities. This effort stemmed from the need to answer two key questions: What does it mean to be a product or visual designer at Ladder? and What truly matters to us, and where do we want to excel?

Establishing team values helps my team understand who they are and provides a shared framework to guide their work in meaningful ways. It's a foundation for creating impactful designs that align with their identity and aspirations.

Michelle holding up a sticky note with our Product Design values.
Figjam full of values
Team alignment
Team alignment has been a key focus for me since stepping into the design manager role. Historically, designers at Ladder have worked in silos across different disciplines. For instance, product designers and visual designers often operated on separate projects, with little exposure to each other's work. This disconnect has led to misalignment in insights, business strategy, and goals.

Since taking on leadership of both product and visual design, I've prioritized building a shared consciousness within the team.

Share consciousness
Brian Chesky of Airbnb describes shared consciousness as a singular brain that fosters open communication and collaboration. To cultivate this, I hold monthly team meetings and check-ins to ensure each member understands how their work impacts others—and how others' work affects theirs. My goal is to create a team where everyone has a general awareness of areas outside their own domain expertise, fostering stronger alignment and collaboration.

Building a customer-centric muscle
Obtaining user insights has always been a challenge at Ladder. While we have abundant quantitative data, qualitative insights are often harder to come by. Here are a few ways I've helped our team better understand our customers:

Establishing a guerrilla user research team
Without dedicated user researchers, I assembled a team of designers, product managers, and engineers who share a passion for understanding our users. We meet weekly to explore new opportunities for user conversations and experiment with different research methodologies.

Quarterly customer experience knowledge shares
I also introduced quarterly knowledge-sharing sessions with our customer support team. As the associates who interact with our users the most, they hold a wealth of valuable insights. Each quarter, they share user quotes, data, observed patterns and trends, anecdotal pain points (from both customers and their own experience), problems, and potential solutions. I then distribute these insights to relevant product stakeholders, ensuring they inform our work and decision-making processes.` // full case study text goes here
    },

    {
        slug: "ladder/billing-checkout",
        summary: `
To improve contribution margins, I led the redesign of Ladder's purchase flow by focusing on high-intent users and minimizing costs from low-intent ones. We tested auto-issuing policies when final prices matched initial quotes and moved billing earlier to signal intent—balancing UX clarity with business needs. Despite initial pushback from leadership, our final solution improved margins by 82% and reduced costs by 64%, becoming one of Ladder's most impactful 2024 initiatives. Along the way, I learned how healthy conflict can drive better outcomes when handled with composure and clarity.`,
        fullText: `Background
What is this?
Ladder's mission is to protect families by making it easier for people to secure coverage. Like any product, policies come with costs, which we recover through sales revenue. Over the past few years, our company faced challenges in selling policies efficiently, with revenue impacted by spending on individuals who ultimately didn't make a purchase. In 2024, I designed a solution that transformed how policies are evaluated and purchased, significantly improving our contribution margin.

My role
I led the design of this project from January 2024 to May 2024.

In addition, I worked alongside a UX Content Designer, 2 Engineers, and a Product Manager.

My tasks entailed owning the end-to-end design process, defining product strategy, and pairing with developers.

Problems to solve
Ladder has long faced the challenge of covering users who don't end up purchasing a policy, leading to high operational costs. The purchase journey typically begins with a user receiving a quote, completing an application, and—if everything checks out—reviewing and accepting their offer.

Behind the scenes, Ladder invests resources to underwrite users by evaluating their risk profiles. This process, which we call "evidence," includes gathering medical history, driver's license information, and other data. Based on their application and evidence, we provide an offer for the user to consider.

High level flow
The challenge arises when users we've invested in for evidence don't accept their offers. Reasons for this include price concerns, lack of readiness, or continued shopping. While these decisions are understandable, they create issues for both users and our business:

User challenges
Users invest time in our process but may leave without a policy, leaving their families unprotected.
For users who already liked their initial quote, having to accept an offer at the same price adds an unnecessary step in an already lengthy process.
Business challenges
Spending on evidence for users who don't purchase negatively impacts our contribution margins.
Strong contribution margins are crucial for fundraising in the startup world, where investors prioritize high gross margins. The days of investors casually funding startups without a solid financial foundation are behind us.
Goals
Specific goal
Our primary goal was to focus on high-intent users—those who are ready and willing to purchase a policy. In contrast, low-intent users are individuals who are not yet prepared to buy for reasons such as price concerns, needing to consult with family, or continuing to shop around. Through past research, we identified cohorts of users who proceed through our life insurance flow without any intention of purchasing. Our objective was to avoid spending evidence money on these low-intent users.

Measures of success
Increase Policy Growth. Make it easier for high-intent users to accept their offers, reducing the risk of losing their business due to unnecessary friction in the process.
Enhance Contribution Margins. Accurately gauge user intent to determine if spending evidence costs is justified, thereby reducing wasted resources on low-intent users.
What we shipped
Final version
Final version
My process
Understand → Identify → Execute

Understand
Understanding the traditional purchase journey
Most digital life insurance websites follow a similar process. Users start by getting a quote after answering a few basic questions about themselves, receiving a rough estimate of their policy cost. If they're interested, they proceed to a more detailed questionnaire that covers their activities, health history, and even driving records. At the end, they receive a finalized offer, which may differ from their initial quote. If satisfied, they accept the offer and provide billing information to activate their policy.

Traditional path
This step-by-step process—Quote → Questionnaire → Offer → Billing—is a standard approach across digital insurance providers, whether for car, home, or life insurance. Its familiarity helps users to intuitively understand the process.

Understanding underwriting
Behind the scenes, accurately assessing a user's risk is essential for generating a fair and competitive price. Ladder leverages a range of digital services to quickly and thoroughly evaluate a user's risk profile. This modern approach eliminates the need for traditional methods like doctor visits and blood tests, making digital life insurance faster and more convenient.

Identify
Identifying the approaches
With a clear understanding of the current flow, our team used first principles thinking to brainstorm ways to reconfigure the traditional process. Building on an earlier idea, we hypothesized two potential approaches:

Automatically issuing a policy if the final price matches the initial quote. The assumption is that users who like their quote and proceed through the application are more likely to accept an offer that matches their initial quote. This approach also eliminates the step of manually accepting the offer. If their final price doesn't match then they would see an offer page to manually accept their policy.
Moving up the billing step to act as an intent filter. The idea is that requiring billing information earlier forces users to decide whether they truly want a policy. High-intent users would proceed, while low-intent users would drop off. Importantly, evidence wouldn't be pulled until after billing information is provided.
What the flow would look like with these two new approaches
What the flow would look like with these two new approaches

Identifying the risks
These two approaches marked a significant departure from the traditional purchasing journey familiar to most users, and the risks were substantial. I was concerned that users might be confused about being issued a policy without a traditional offer step, or about being asked for billing information before seeing a formal offer. This could result in negative reviews, frustrated calls to our customer service team, and significant drop-off at the billing stage.

I ensured these risks were clearly communicated not only to our team but also to the leadership team. I'll delve more into this in the design explorations later.

Execute
Design explorations
Exploration #01
Exploration #02
Exploration #03
During the exploration phase, I grappled with organizing page components (quote, billing, what will happen after billing). I worked with our UX Content Designer to figure out the right hierarchy and which component to emphasize the most. A huge part of this was the copy itself so it would be remiss of me to not give a shout-out to our Content Designer, Heather, for all the work she did here.

Conflict with leadership
One of the risks I identified early was potential confusion around policy auto-issuance. To address this, I advocated for clear messaging that would explain what happens if the final price matches the quote or if it's higher. However, leadership felt this approach was overly cautious and could increase drop-offs. Discussions with leadership became tense at times, as I prioritized the user experience while they focused on business outcomes. Ultimately, we agreed to test an approach that avoided setting too many expectations about what would happen if a user's price didn't match their quote. I'll share more about the lessons I took away from this conflict later.

Proposed way of increasing transparency
Proposed way of increasing transparency
After extensive collaboration with both the project and design teams, I settled on this version:

Final version
Our approach was to frame this step similarly to a checkout page, providing users with a clear summary of what they're purchasing, the cost, and an opportunity to 'checkout' by entering their billing information.

The price displayed on this page would either match the earlier quote or be higher if their application answers affected it. In cases where the price was higher, I designed a callout to gently encourage users to update their policy details to align with the initial quote they received.

Callout
I also brought in a component from our offer page that has traditionally helped with conversion communicating our cancellation policy.

Cancellation policy
Results
We launched this project in May 2024 and anxiously monitored the experiment dashboard hourly for the next month and a half. To our relief, no angry customers called in, and while there was some drop-off on the checkout page, it was within normal ranges. Most importantly, we started to see noticeable improvements in our contribution margins.

📈
After shipping, we saw an **increase in gross margin by 82% and a reduction in cost by 64%.**
Impact on company
This project became one of Ladder's most impactful initiatives in 2024. By improving our contribution margins, we created a compelling narrative about the company's current performance and future trajectory—an invaluable asset for fundraising and extending our runway.

Lessons
The conflict I experienced with leadership taught me two important lessons:

Be defensive about your work in a way that still moves thing forward
I realized that my tone and demeanor during discussions weren't always conducive to productive debate. At times, I became visibly emotional, feeling that we might be doing a disservice to our users. In hindsight, I should have approached these moments with more calmness and composure. Staying collected would have likely fostered clearer communication and more constructive outcomes while ensuring all viewpoints were fully understood.

Conflict can be a good thing
Looking back, I wouldn't have avoided the conflict I encountered. Instead, I learned that respectful and open debate can spark innovation. This idea, often referred to as "creative abrasion," emphasizes the value of engaging with different perspectives to fuel progress and create better solutions. While conflict can feel uncomfortable, it's a necessary part of growth. Without it, I don't believe we would have reached the successful solution we ultimately implemented.` // full case study text goes here
    },
   
   
    {
        slug: "ladder/reroute",
        summary: `
To reduce costs from low-converting users, I designed a quote experience powered by a machine learning model that identified users unlikely to purchase a policy. We guided these users toward better-fit partner options while maintaining transparency and trust. By elevating partner recommendations early in the flow and refining messaging through user testing, we increased revenue per impression by ~$4.6–$7.5 and saw a 9% lift in partner impressions.

`,
        fullText: `Background
What is this?
Ladder's mission is to protect families by helping people get covered through a policy. Still, we've had setbacks matching everyone with the best policy, which is not great for both our users and Ladder. In 2023, our Machine Learning team developed a model to improve these matches. This project showcases how I designed a solution that utilizes this model.

My role
I led the design of this project from May 2023 to July 2023.

In addition, I worked alongside a UX Content Designer, 2 Engineers, and a Product Manager.

My tasks entailed owning the end-to-end design process, defining product strategy, and pairing with developers.

Problems to solve
Ladder has long grappled with the persistent issue of attempting to cover users who don't buy a policy (i.e. convert), leading to high operational costs. Although users opt out of purchasing policies for various reasons, the primary deterrent is the pricing. Essentially, Ladder offers a policy to a user and the user thinks the price is too high and ends up leaving. This creates problems for both our users and Ladder:

User problem: For users, they end up taking the time to go through our flow and decide to leave without a policy and leave their families unprotected. This affects our mission.
Business problem: For Ladder, we end up incurring operational costs to try to cover a user who ends up not converting. This affects our profitability.
Machine learning model
Historically, we've always strived to address issues related to conversion and profitability. However, the predictive model developed by our ML team introduced a fresh opportunity for us to devise an entirely new solution.

This predictive model looks at various inputs to make an educated guess about whether a user is likely to buy a policy. Through backtesting we found that a certain cohort of users who decide not to purchase policies are actually costing us money when we consider all the different expenses.

💡
A predictive model is like a special tool that can help us guess what might happen in the future. It looks at information from the past to figure out patterns and connections. Then, using those patterns, it makes educated guesses about things we don't know yet.
Goals
Specific goal
With this new model, our goal was to identify these unlikely-to-convert users within our flow and redirect them to our partners who can also offer them a life insurance policy.

In the past, we have redirected our users to life insurance partners when we deemed it more beneficial for them. This approach is mutually advantageous: they are more likely to find coverage with our partners, and we avoid incurring operational costs. However, our success in this strategy has been limited due to our restricted understanding of whom to redirect. The newly developed model, though, enhances our ability to make more informed decisions.

Measures of success
Revenue per impression. This would tell us whether the users who do go through our funnel after seeing the new treatment are actually converting at a higher rate compared to them not being identified by this model.
Lift in partner impressions. This directly translates to revenue generated by taking an identified user through to the model to one of our partners.
What we shipped
Transitional loading page
Modified quote page
My process
Understand → Identify → Execute

Understand
Understanding the model
One of the most formative lessons I've learned at Ladder, specifically in working in the life insurance space, is how data and design interplay together. Despite the apparent simplicity of the end designs, the decision-making process behind them is complex due to our interpretation of the data.

I frequently parsed through SQL queries during this stage of the project
During this project, a significant part of my time was spent delving into the details of how the predictive model operates. I asked our machine learning engineer various questions about the model, such as the factors it considers, projected revenue for each cohort, and the most compelling traffic slice. While this might not seem like conventional design work, understanding the model's inner workings was crucial for making well-informed design decisions later on.

Understanding how design fits in here
As I grasped the workings of the model, my understanding of how design would interact with it also evolved gradually. By delving into details such as the specific user cohort targeted by the model and its inputs, I gained a more informed perspective on the language and framing.

We were aware that this model would operate at the quote stage, a relatively early phase in the application process. Focusing on users at this stage, where they've just begun providing some inputs, required designs that could alleviate a potentially jarring experience. Directing a user seeking a quote to explore other life insurance partners immediately upon arrival could be confusing. The design challenge, therefore, involved finding a thoughtful way to communicate to these users that we're not a suitable fit for them.

Identify
Identifying the design principles
To help guide the design exploration process, I first came up with a few design principles:

Be transparent about the problem

Clearly outlining the problems that a solution addresses makes selling that solution easier. We shouldn't sugarcoat things as a mixed message would actually be more confusing for users. In this case, the design, particularly the copy, needs to explicitly communicate to users the challenges they might encounter by choosing Ladder (e.g., higher prices, potential for rejection, overall mismatch).

Provide a solution

Once the problem is presented, the solution should be evident to users. We need to convey that while users are welcome to proceed with Ladder, we strongly recommend considering our life insurance partners as they would be a better fit for them.

Align with the main user objective

We know that at this stage, the quote is top of mind for users. While our goal here is to redirect them to our partners, we still have to present them a quote. This doesn't necessarily mean, however, that we have to use our existing quote page (more on this later).

Identifying the design solutions
A couple questions that I had to answer as I began to explore design treatments include:

Where should we surface this treatment?
Showing this cohort a price on the quote page may reduce confusion. They came for a quote, and presenting it earlier could pose issues.
I also considered displaying it after they've received a quote. However, data shows a substantial drop-off on the quote page. Showing the treatment afterward means those users who dropped off wouldn't have seen it. This is crucial as we generate revenue from the redirected users to life insurance partners.
Should we use the same quote page we have today?
Given that the larger goal is to divert users at this point, we should be open to rethinking this version of the quote page and not feel constrained in using the exact experience we have today… i.e. feel free to rethink the quote page to optimize for this re-route experience
Flows we considered
Existing quote page
Execute
Design explorations
Design exploration #01
Design exploration #02
Design exploration #03
Design exploration #04
During the exploration phase, I grappled with organizing page components (quote, problem, solution). I worked with our UX Content Designer to figure out the right hierarchy and which component to emphasize the most. A huge part of this was the copy itself so it would be remiss of me to not give a shout-out to our Content Designer, Heather, for all the work she did here.

After extensive collaboration with both the project and design teams, I settled on this version:

Final version
We chose to highlight better alternatives to Ladder upfront, favoring immediate presentation over placing them lower on the page. There was debate within the team—some favored showing the quote or potential problems first. My instinct was that elevating partners early in the hierarchy would communicate their importance to users. This is also coupled with the fact that we generate more revenue from users who visit these partners.

Options
Directly beneath the partner options are the potential problems users could face if they proceeded with Ladder and their quote. I paired these two components as the initial bullet point about their price increasing complemented the quote on the right. This also downplayed the quote slightly which, again, from a hierarchal point of view made sense.

Potential problems
De-risking
With a potential design in view, I decided to de-risk our solution by presenting this design in front of our users. I created a user test plan that took users through our flow with this treatment. I was most curious about how jarring this page would be for users who came for a quote and what would make them more compelled to check out the other partners.

Surprisingly, users were very receptive to the transparency of the page and thought it actually created more trust for Ladder. They liked how Ladder wasn't just trying to make money and were willing to lose out on potential business with them if it meant they could get better coverage elsewhere.

I also learned that we had to provide a bit more detail on who these partners are and why exactly Ladder is less likely to offer the coverage they need.

Users also found that the page was a bit jarring to see immediately after providing the last input. To mitigate this feeling, I came up with a transitional loading page that gave a bit more transparency around what we were doing in the backend. I asked our engineer to create some artificial delay on this page to further reinforce the idea that we're doing our due diligence with the inputs they have provided so far.

Loading page
Results
📈
After shipping, we saw an **increase of ~$4.6~$7.5 in revenue per impression** compared to Control, and a **9% increase in partner impressions**.
` // full case study text goes here
    },

    {
        slug: "ladder/first-payment-failure",
        summary: `
I led design efforts to reduce first payment failures, a major driver of customer lapse at Ladder. By introducing ACH balance checks, clearer alerts, actionable notifications, and a redesigned billing experience, we cut payment failures by 50%, saving around 130 policies from lapsing each month. The work reframed confusing mental models and improved user trust and retention.

`,
        fullText: `Background
Retention as a new focus
In mid-2022, I became the design lead for a new product team dedicated solely to customer retention. Ladder had traditionally prioritized customer acquisition over retention for various reasons, but mainly because it was more important to secure customers than to ensure they didn't switch to a competitor or cancel their policy after purchase. Recent data trends, however, indicated that we needed to start focusing more on retention, prompting leadership to spin up a new team.

Problem: First payment failure
Our team focused on several areas, one of which was reducing customer lapse. By examining our data and gathering qualitative insights from our customer support team, we found that payment failure was a major contributor to customer lapse. Put simply, users who miss a payment—whether their first or a subsequent recurring payment—will lose their coverage after purchasing a policy.

We decided to prioritize addressing payment failure first, as it was the most straightforward issue to tackle, yet still had a meaningful impact. Our goal was to prevent customers from missing their first payment.

Looking at the data
We looked at the data to gain a better understanding of the opportunity and impact of reducing first payment failure (FPF). We found that approximately 2.5% of all new customers who purchase a policy fail to make their first payment. Of that cohort, only 38% manage to resolve the issue. Although 2.5% may seem small, it accumulates to a significant number of policies that are ultimately cancelled.

What's causing users to fail their first payment?
Drilling into the data further helped us to understand how users fail their first payment. Users can pay for their policy with either a credit card or by connecting their ACH bank account. All FPF occur for users who connect their ACH account, as they often don't have enough funds in their account to cover the first month's premium.

Design
To solve for FPF, we decided to design a system that can both prevent a FPF from occurring in the first place and intervene when it does happen.

Prevention
The first payment occurs right after a user accepts their policy. The user journey will typically look like this:

User journey
To avoid a FPF, we decided to run a balance check on a user's ACH account when they connect through Plaid. If the balance check reveals that the user does not have enough funds to cover the first month's premium, we would notify them and give them the option to pay with an alternative payment method.

Balance check
Principles
To help guide the design exploration process, I first came up with a few design principles:

Inform

Users should immediately understand that they have insufficient funds in their account. They should also quickly understand the consequences of missing their first payment: specifically that their policy won't be activated.

Don't patronize

Potentially not being able to make a payment can be a sensitive matter. Avoid making users feel like it is their fault.

Give users freedom

While missing a first payment would not be ideal for us, we still want to give users the option to continue with their chosen payment method.

ACH balance check
After a user connects their ACH account and we determined that there are insufficient funds, we would surface this screen to them. From here, they can change their payment method or proceed anyway.

Balance check
Alert
If a user decides to continue with this payment method then we would show an alert on the confirmation page where they give us permission to charge their account. This alert would remind them of the issue and provide one last opportunity to fix the issue.

Alert
Payment switch
If a user decides to switch their payment from here then we would take them back to the billing page with the credit card option defaulted to nudge them to pay with a credit card instead.

Payment switch
Intervention
We implemented measures to intervene and help users fix their FPF in the following scenarios:

Users still choose to proceed with an incorrect payment method
If our balance check came back successful but the ACH account becomes insufficient during the delay before the transaction is completed
These measures include a revamped notification plan and a more robust billing section in a user's account settings.

Notification plan
Once a FPF is detected, users have 10 days to resolve the issue by either adding funds to their account or switching to another payment method. In the past, emails were sent to users during this 10-day period to encourage them to fix their payment issue. After auditing this email campaign, we identified that both the content of the emails and the type of communication could be improved.

I collaborated with our UX writer to make our emails more informative and actionable. I also worked with our product manager to introduce SMS messages along with emails, ensuring that users become aware of the issue.

Old email

Old email
New email

Bringing in more specific details such as payment method that failed and reasoning
Bringing in more specific details such as payment method that failed and reasoning

Billing section
We also wanted to make it clearer for users that navigate to their billing section in their account settings what the issue is and how they can fix it. Specifically, a user should be able to get the answers to these questions in the billing section:

What payment did I make? (Month of May etc)
What is the status of my payment? (Pending, Successful, Failed etc)
How much was due? ($100 etc)
When was it due? (May 2nd etc)
How can I fix the problem? (Make a payment)
I designed a new component in our billing section to answer these questions. This component essentially acts as a status indicator that informs and provides an action for users to take.

Billing component
Making a payment
Prior to this project, fixing a FPF required users to update their payment method to initiate a charge on their credit card or account. This mental model of updating a payment method to fix the FPF issue didn't make sense to me and I felt seemed confusing to users. So instead, I redesigned this mechanism to change the mental model from updating a payment method to making a payment. My reasoning was that if a payment failed, then there must be an outstanding payment to be made.

Before

Old way of initiating a charge on a user's payment method
After

Billing modal
I designed a modal that can be reused in various areas of the billing section. It contains two key pieces of information: their saved payment method and a payment summary of the invoice they're paying for and the amount. Users can also update their payment method within this modal.

Changing payment method
I also integrated our balance check into the modal if a user proceeds with the same or another ACH payment method that has insufficient funds.

Balace check in modal
Results
📈
After shipping, we saw a **50% reduction** in first payment failure, leading to about **130 policies saved from lapses** a month.` // full case study text goes here
    },


    {
        slug: "ladder/affordability",
        summary: `
To reduce coverage gaps caused by affordability concerns, I designed a quote page treatment that guided users toward budget-friendly coverage amounts. Using lightweight UI and thoughtful copy, we helped users make informed decisions without feeling restricted or patronized. The solution led to a 14% lift in policy uptake and a 4% increase in overall funnel conversion.

`,
        fullText: `Problem
Ladder's mission is to protect families by helping people get covered through a policy that is right for them. As policy offers become more expensive, however, the rate of users accepting their policies drops. Users who feel that life insurance is outside of their affordable budget will not get the coverage their loved ones need. And rather than lowering their coverage amount, users elect not to get life insurance altogether due to it feeling unaffordable. This leads to a coverage gap which we are aiming to decrease.

Goal
Our goal was to design a treatment in our funnel to help users select a policy that fits within their budget. To do this, we used effective design and copy to guide users towards a coverage amount that would result in an affordable policy.

Success metrics
Increase in number of people taking a policy.

What we shipped
Old
Old version
New
New version
Research
Research conducted by our data science team on the pattern of users taking a policy prompted this project. Through their analyses, they were able to understand the traits of a user in relation to whether or not they would take on a policy, making it possible for us to determine the affordability of a monthly premium for an offer for the user. They developed a model to determine at what point a coverage amount for a policy would make a policy affordable for a user. We only showed the treatment to a certain cohort of users, since affordability isn't a problem for everyone.

Designs
Principles
To help guide the design exploration process, I first came up with a few design principles:

Inform on what we think is affordable
Our treatment would bring value to users by informing them. We assume that users are not only unable to afford a certain policy, but they also don't know they can't afford it until late in the buying experience. In terms of design and copy, this means displaying the necessary information without overwhelming users, so they can tell if the policy they are selecting is unaffordable.

Give users freedom
Our goal was to help users select a policy with an affordable coverage amount. However, we did not want to prevent users from selecting a coverage amount that would make the policy unaffordable. In other words, we did not want to impose anything on users. Users have individual needs, and making it difficult for them to get what they need would be a bad experience.

Don't patronize
Affordability is an important consideration for users, but it can also be sensitive for some. We have their best interests in mind, but we don't want to appear condescending by implying they can't afford a certain policy.

Explorations
I considered two areas of our flow when designing: the quote page and the offer page. These pages are key points in the journey where users can select a coverage amount for a policy, determining if it is affordable. A majority of the design process was determining where was the best location for the treatment: the quote page, the offer page, or both. Each option had pros and cons to consider. In the end, we decided to test our hypothesis on the quote page first, as it receives more traffic, allowing us to get quick results.

Here are a few design explorations I considered for the quote page:

Version 1
Version 1
Version 1
Version 2
Version 2
Version 2
Version 3
Version 3
We realized that versions 1 and 2 were too heavy-handed in their recommendations and brought in unnecessary complexity, so we decided to further refine version 3.

Shipped solution
Final version
Slider bar
I designed the coverage amount slider bar to include a Recommended for you range that would display where users should ideally select. The solution here is to make the range as lightweight as possible so as to not hinder the overall experience of selecting a coverage amount, but still pique a user's interest and be obvious as to what the intention is.

Slider bar
Helper text
Clicking on Recommended for You would open a box on the right panel displaying helper text. I collaborated with our UX writer to create content that was both informative and vague enough to avoid a patronizing tone.

Helper text
Results
📈
After shipping, we saw a **14% lift in our success metric,** which after dilution, contributed to **a 4% increase in funnel conversion.**` // full case study text goes here
    },
    // Add more projects...
];
