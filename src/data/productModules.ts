export type ProductModule = {
  title: string
  description: string
  icon: 'user-plus' | 'belt' | 'calendar' | 'check' | 'credit-card' | 'bell' | 'users' | 'shield'
}

export const productModules: ProductModule[] = [
  {
    title: 'Member registration',
    description: 'Onboard new students fast with clean profiles, waivers, and club-ready records.',
    icon: 'user-plus',
  },
  {
    title: 'Belt grading management',
    description: 'Track gradings, eligibility, outcomes, and history — aligned to your club workflow.',
    icon: 'belt',
  },
  {
    title: 'Attendance tracking',
    description: 'Mark attendance in seconds, spot patterns, and keep classes running smoothly.',
    icon: 'check',
  },
  {
    title: 'Class scheduling',
    description: 'Organise sessions, instructors, and venues with a schedule students can trust.',
    icon: 'calendar',
  },
  {
    title: 'Payment tracking',
    description: 'Stay on top of fees with clear payment status and simple admin visibility.',
    icon: 'credit-card',
  },
  {
    title: 'Notifications',
    description: 'Keep students informed with timely updates for classes, gradings, and club news.',
    icon: 'bell',
  },
  {
    title: 'Instructor management',
    description: 'Manage instructor roles and class cover to keep delivery consistent and professional.',
    icon: 'users',
  },
  {
    title: 'Student login',
    description: 'Give students a clean place to view key details and stay engaged with the club.',
    icon: 'shield',
  },
]
