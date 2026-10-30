export type CompetencyGroup = 'strength' | 'development'

export type Competency = {
  id: string
  name: string
  group: CompetencyGroup
  description: string
}

export type CapabilityPair = {
  id: string
  current: {
    id: string
    name: string
    description: string
  }
  developing: {
    id: string
    name: string
    description: string
  }
}

export const aimlCompetencies: Competency[] = [
  {
    id: 'ethical-ai',
    name: 'Ethical and Responsible AI/ML',
    group: 'strength',
    description:
      'I look at how AI affects people before I look at what it can do. Fairness, accountability, and unintended harm are part of the design conversation, not a later add-on.',
  },
  {
    id: 'technical-understanding',
    name: 'Technical Understanding',
    group: 'strength',
    description:
      'I can follow how AI and machine learning systems work at a conceptual level. That helps me ask better questions of specialists and keep the work grounded in what is actually possible.',
  },
  {
    id: 'adoption-strategies',
    name: 'AI/ML Adoption Strategies',
    group: 'strength',
    description:
      'I think about where AI belongs in a product or service, not only whether it is technically feasible. Adoption is a design and business problem as much as a model problem.',
  },
  {
    id: 'project-management',
    name: 'AI/ML Project Management',
    group: 'development',
    description:
      'I still need more practice scoping, sequencing, and coordinating AI work from idea through delivery. I want to get better at managing the work, not only shaping the concept.',
  },
  {
    id: 'continuous-improvement',
    name: 'Continuous Improvement',
    group: 'development',
    description:
      'I want stronger habits for measuring what happens after launch — how a system performs, where it drifts, and what should change next.',
  },
  {
    id: 'change-readiness',
    name: 'Change Readiness',
    group: 'development',
    description:
      'I need more experience preparing teams and processes for the disruption that AI can introduce, including resistance, new workflows, and shifting roles.',
  },
]

export const changePairs: CapabilityPair[] = [
  {
    id: 'communication-knowledge',
    current: {
      id: 'communication',
      name: 'Communication',
      description:
        'I am used to translating between design, product, and stakeholders so people can act from a shared understanding.',
    },
    developing: {
      id: 'change-knowledge',
      name: 'Change Management Knowledge',
      description:
        'I want a more formal grasp of established change frameworks, rather than relying only on instinct from project work.',
    },
  },
  {
    id: 'problem-risk',
    current: {
      id: 'problem-solving',
      name: 'Problem-Solving',
      description:
        'I work through messy, incomplete information and look for a usable next step instead of waiting for a perfect brief.',
    },
    developing: {
      id: 'risk-management',
      name: 'Risk Management',
      description:
        'I need a more structured way to identify, document, and mitigate implementation risks before they become surprises.',
    },
  },
  {
    id: 'flexibility-tech',
    current: {
      id: 'flexibility',
      name: 'Flexibility and Adaptability',
      description:
        'I adjust when user needs, constraints, or timelines shift. That has been essential in both design and product work.',
    },
    developing: {
      id: 'implementing-tech',
      name: 'Implementing New Technologies',
      description:
        'I have less experience leading the operational introduction of new tools into existing business processes.',
    },
  },
]

export const aimlReflection =
  'I was interested to see that responsible AI and technical understanding were among my strengths. My design background has taught me to consider how technology affects people, not just how it works. However, I still need more practical experience managing AI projects and measuring their impact.'

export const changeReflection =
  'These results were closer to what I expected. Working in design and product management taught me how to communicate across teams, solve unexpected problems, and adapt when plans change. I want to develop a more structured approach to managing change, especially when introducing new technologies.'
