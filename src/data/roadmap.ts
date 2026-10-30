export type RoadmapStage = {
  id: string
  number: string
  title: string
  summary: string
  action: string
  milestone: string
  question: string
}

export const roadmapStages: RoadmapStage[] = [
  {
    id: 'apply',
    number: '01',
    title: 'Apply',
    summary: 'Gain hands-on experience managing AI-related projects.',
    action:
      'Take ownership of coordinating a small, scoped AI feature or workflow — even as an academic or personal case — from brief through review.',
    milestone: 'Complete one small AI implementation case study',
    question:
      'What did I actually coordinate, and where did the work stall without clearer project management?',
  },
  {
    id: 'structure',
    number: '02',
    title: 'Structure',
    summary: 'Learn practical frameworks for change and risk management.',
    action:
      'Study one change framework and one risk method, then apply both to a sample project instead of leaving them theoretical.',
    milestone: 'Create a change and risk management plan for a sample project',
    question:
      'Which risks would I have missed if I only relied on past product instinct?',
  },
  {
    id: 'lead',
    number: '03',
    title: 'Lead',
    summary:
      'Develop the ability to introduce new technologies into business processes.',
    action:
      'Draft a proposal that explains not only the technology, but the people, process, and measures that would make adoption succeed.',
    milestone: 'Present a technology adoption proposal with success metrics',
    question:
      'How would I know, in practice, that the organization is using the new technology well?',
  },
]
