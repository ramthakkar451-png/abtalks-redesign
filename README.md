# ABTalks Redesign - Hackathon Submission

A mobile-first redesign of the ABTalks platform for the Future Founders 60-day coding challenge hackathon.

## Overview

ABTalks is a platform that helps Indian college students build consistency through daily coding challenges. Students code every day, maintain a public learning streak, and share their progress on GitHub and LinkedIn to become visible to recruiters.

This redesign focuses on motivating students through progress visualization, streak psychology, and community engagement.

## Features

### Landing Page (`/`)

The first experience for students who have never heard of ABTalks. Communicates trust, clarity, and motivation to commit to the 60-day challenge.

- Hero section with compelling headline: "Build in Public. Get Noticed."
- Three key features highlighted (Daily Momentum, Build in Public, Get Recognized)
- Social proof with stats (5000+ students, 60-day challenge, 3 tracks)
- Clear call-to-action buttons
- Responsive design for mobile and desktop

### Student Dashboard (`/dashboard`)

The home screen after logging in. Shows all essential information at a glance.

- **Current Streak**: Large, prominent display with fire emoji
- **Today's Task**: Quick access to the day's challenge
- **Challenge Progress**: Visual progress bar showing completion percentage
- **Achievements**: Unlockable badges and milestones
- **Leaderboard**: Top 5 students with streak rankings
- **Upcoming Challenges**: Preview of next days with difficulty indicators

### Challenge Day (`/day/12`)

The complete experience of a single challenge day. Students can read the task, understand requirements, access resources, and submit proof of work.

- Challenge title and day indicator
- Time remaining until deadline
- Detailed description and requirements
- Helpful resources with external links
- Submission form for GitHub repository and LinkedIn post
- Success confirmation with celebration message
- Pro tips for effective sharing

## Design Philosophy

**Modern Growth Mindset** - A design approach that celebrates daily progress and builds consistency through visible achievements.

### Color Scheme

- **Primary Accent**: Warm Orange (#FF6B35) - Energy and momentum
- **Success**: Vibrant Green (#4CAF50) - Completed tasks
- **Background**: Clean White (#FFFFFF)
- **Text**: Deep Navy (#1A1A2E)
- **Supporting**: Grays (#F5F5F5, #E0E0E0)

### Typography

- **Headings**: Poppins (Bold, SemiBold)
- **Body**: Inter (Regular, Medium)
- Hierarchy optimized for mobile scanning

### Mobile-First Approach

- Primary design target: 390px viewport
- Responsive scaling to desktop
- Touch-friendly interactions
- Optimized for late-night usage (high contrast, readable text)

## Technical Stack

- **Framework**: React 19 with TypeScript
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Landing.tsx      # Landing page
│   │   ├── Dashboard.tsx    # Student dashboard
│   │   ├── ChallengeDay.tsx # Challenge day screen
│   │   └── NotFound.tsx     # 404 page
│   ├── components/          # Reusable UI components
│   ├── lib/
│   │   └── mockData.ts      # Mock data for all screens
│   ├── App.tsx              # Main app with routing
│   ├── index.css            # Global styles and theme
│   └── main.tsx             # React entry point
├── index.html               # HTML template
└── public/                  # Static assets
```

## Mock Data

The project uses mock data for a realistic experience without backend requirements:

- **Student Profile**: Name, track, streak, progress
- **Challenge Details**: Title, description, requirements, resources
- **Progress Tracking**: Completed days, percentages, remaining days
- **Leaderboard**: 5 students with streaks and completion
- **Achievements**: 3 badges with unlock states
- **Upcoming Challenges**: Next 3 days with difficulty levels

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Route Map

As required by the hackathon submission:

```
/
/dashboard
/day/12
```

## Key Design Decisions

1. **Warm Orange Accent** - Conveys energy and daily momentum
2. **Large Streak Counter** - Emphasizes habit formation psychology
3. **Card-Based Layout** - Improves mobile scannability
4. **Gradient Progress Bar** - Visual celebration of progress
5. **Leaderboard Highlight** - User's position highlighted in orange
6. **Achievement Unlock States** - Locked items shown with reduced opacity
7. **Pro Tips Section** - Encourages best practices for sharing

## Edge Cases Handled

- **First Day**: Student with no streak yet
- **Missed Day**: Progress bar shows missed days
- **Empty Profile**: Leaderboard shows user position even with low streak
- **Submission States**: Both pre-submission and post-submission states
- **Responsive Design**: Scales from 390px mobile to desktop

## Thoughtful Improvements

Beyond the basic requirements, this redesign includes:

1. **Streak Psychology**: Large, celebratory streak counter with personal best
2. **Progress Visualization**: Multiple ways to see progress (bar, percentage, days)
3. **Achievement System**: Unlockable badges to maintain motivation
4. **Leaderboard Integration**: Competitive element without being discouraging
5. **Pro Tips**: Guidance on effective GitHub commits and LinkedIn posts
6. **Celebration UX**: Success state with emoji and encouraging message
7. **Mobile Optimization**: Late-night usage considered with high contrast

## AI Usage

This project was built with AI assistance. See `PROMPTS.md` for detailed documentation of all AI prompts and outputs used during development.

## Deployment

The project is ready for deployment on any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).

### For Vercel:

```bash
vercel deploy
```

### For Netlify:

```bash
netlify deploy --prod --dir=dist
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- Sufficient color contrast
- Keyboard navigation support
- Focus indicators on interactive elements
- Alt text for images
- ARIA labels where appropriate

## Performance

- Optimized bundle size with Vite
- Lazy loading of routes
- Efficient CSS with Tailwind
- No external API calls (mock data only)
- Fast page transitions

## Future Enhancements

Out of scope for this hackathon submission but potential improvements:

- Backend authentication with real user accounts
- Database integration for persistent data
- GitHub and LinkedIn API integration
- Real-time notifications
- Social features (following, messaging)
- Admin dashboard for organizers
- Recruiter matching system
- Mobile app version with Expo

## License

MIT

## Contact

For questions about this submission, refer to the PROMPTS.md file for detailed AI usage documentation.
