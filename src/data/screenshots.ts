export type Screenshot = {
  title: string
  description: string
  src: string
}

// Add your real images into: /public/screenshots/
// Recommended filenames (examples):
// - dashboard.png
// - member-profile.png
// - attendance.png
// - member-enrollment.png
export const screenshots: Screenshot[] = [
  {
    title: 'Dashboard overview',
    description: 'A clean snapshot of what needs attention today.',
    src: '/screenshots/dashboard.png',
  },
  {
    title: 'Attendance tracking',
    description: 'Mark attendance quickly and spot patterns over time.',
    src: '/screenshots/attendance.png',
  },
  {
    title: 'Member profile',
    description: 'Fast access to key details, history, and club-ready status.',
    src: '/screenshots/member-profie.png',
  },
  {
    title: 'Member enrollment',
    description: 'Enroll members into programs in a few clicks — no spreadsheets.',
    src: '/screenshots/member-enrollment.png',
  },
]
