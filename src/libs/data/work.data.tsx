export type Work = {
  company: string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'Goalteller',
    deliverable: [
      'Worked as a Frontend Developer Intern at a fintech startup.',
      'Fixed critical UI bugs across multiple modules including order history, scheme details, and lifestyle configuration.',
      'Collaborated with the design and backend teams to implement responsive and accessible user interfaces.',
      'Refactored existing codebase for better maintainability and consistency.',
    ],
    fromDate: '2024-08-08',
    toDate: '2025-06-08',
  },
  {
    company: 'Juniper Square',
    deliverable: [
      'Accepted offer to join as an SDE Intern.',
      'Internship focused on full-stack development with modern frameworks and scalable infrastructure.',
    ],
    fromDate: '2025-06-23',
    toDate: '2025-12-23',
  },
]
