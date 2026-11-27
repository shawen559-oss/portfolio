import { Container } from './Container'
import { Reveal } from './Reveal'

const scenarios = [
  {
    number: '01',
    title: 'Data Quality and Cleaning',
    challenge: 'Should emoji-only customer reviews be removed during data cleaning?',
    decision: 'I first wanted to remove them to simplify the dataset. Then I realized that this could remove real customer opinions. I decided to keep them first and compare the results before making a final decision.',
    lesson: 'Cleaner-looking data is not always better data. Removing information can change what the model learns.',
  },
  {
    number: '02',
    title: 'Bias and Responsible Scaling',
    challenge: 'How can a hiring model perform fairly when used with applicants from a different country?',
    decision: 'I suggested collecting representative local data and testing the model. I also recognized that historical university preferences could exclude qualified applicants. I considered removing those preferences and comparing different samples.',
    lesson: 'High accuracy does not guarantee fairness. Removing university names alone may not remove other signals of the same bias.',
  },
  {
    number: '03',
    title: 'Privacy, Security, and Governance',
    challenge: 'How can hospitals collaborate on machine learning without exposing patient records?',
    decision: 'I considered keeping records within each hospital and sharing model updates instead. I suggested verification, access protection, and stopping the model to investigate and fix a problem if patient information leaked.',
    lesson: 'Keeping data local helps, but it does not remove every privacy risk. Security checks and a response plan still matter.',
  },
]

export function DataChallengeArtifact() {
  return (
    <section id="data-challenge" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <p className="text-[11px] tracking-[.22em] text-accent uppercase">Portfolio Artifact 04 / AIML500</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-tight sm:text-5xl">
            Why Chat with a Bot?
          </h2>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-muted">
            Data Challenge Scenarios: AI-Guided Decision Making. Three practice scenarios about data quality, fairness, and privacy in machine learning.
            I used each scenario to question my first decision and think about what should be tested before a model is trusted.
          </p>
          <p className="mt-4 text-[12px] tracking-[.08em] text-muted">
            Machine Learning Fundamentals · Indiana Wesleyan University · November 2026
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            ['Introduction', 'Machine learning decisions depend on the quality of data and the people affected by the model.'],
            ['Description', 'A guided chatbot exercise covering customer reviews, hiring fairness, and hospital data privacy.'],
            ['Objective', 'Practice making responsible decisions about machine learning data, model bias, and patient privacy.'],
            ['Process', 'Respond to three AI-generated scenarios, explain my decisions, reconsider them after follow-up questions, and identify what still needs testing.'],
            ['Tools and Technology', 'ChatGPT, AI-guided scenario practice, critical thinking, comparison testing, data quality review, fairness checks, and privacy risk assessment.'],
            ['Value Proposition of the Artifact', 'These lessons apply to product design and data analytics, where data choices affect people and model results need to be checked.'],
            ['Unique Value', 'The exercise records how I revised my initial decisions after considering risks and alternatives.'],
            ['Relevance', 'Data analysts and AI product teams need to consider data quality, fairness, and privacy before deployment.'],
            ['References', 'Indiana Wesleyan University. (2026). Why chat with a bot? Data Challenge Scenarios Coach [Course activity]. OpenAI. (2026). ChatGPT [Large language model]. https://chatgpt.com/'],
          ].map(([heading, body]) => (
            <Reveal key={heading}>
              <div className="h-full border-t border-line pt-6">
                <h3 className="font-display text-2xl">{heading}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          {scenarios.map((scenario) => (
            <Reveal key={scenario.number}>
              <article className="grid gap-5 border-t border-line py-9 md:grid-cols-[75px_1fr]">
                <span className="text-[12px] tracking-[.16em] text-accent">{scenario.number}</span>
                <div>
                  <h3 className="font-display text-3xl">{scenario.title}</h3>
                  <p className="mt-5 text-[15px] font-medium">{scenario.challenge}</p>
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">{scenario.decision}</p>
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
                    <span className="font-medium text-ink">What I learned: </span>{scenario.lesson}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 border-t border-line pt-8">
            <h3 className="font-display text-3xl">Reflection and next step.</h3>
            <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-muted">
              I changed my mind about removing emoji-only reviews because I realized that data cleaning can remove useful opinions.
              The hiring example showed me that a model can repeat unfair decisions from the past, even when its accuracy looks good.
              The hospital example reminded me that privacy needs more than keeping records in separate systems.
            </p>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
              My next step is to make validation more specific by comparing model errors across different groups
              and defining when the results should trigger a change.
            </p>
            <p className="mt-5 text-[12px] text-muted">
              Based on my AIML500 Data Challenge Scenarios practice and reflection. No private conversation transcript is published.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
