import { Announcement, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'All',
    slug: 'organization', // This will be handled specially in the UI
    description: 'All announcements',
    color: 'accent'
  },
  {
    id: '2',
    name: 'Organization',
    slug: 'organization',
    description: 'Student organization updates and recruitment',
    color: 'accent'
  },
  {
    id: '3',
    name: 'Contest',
    slug: 'contest',
    description: 'Competitions and contests',
    color: 'warning'
  },
  {
    id: '4',
    name: 'Event',
    slug: 'event',
    description: 'Campus events and activities',
    color: 'success'
  },
  {
    id: '5',
    name: 'Academic',
    slug: 'academic',
    description: 'Academic announcements and updates',
    color: 'primary'
  },
  {
    id: '6',
    name: 'Scholarship',
    slug: 'scholarship',
    description: 'Scholarship opportunities and grants',
    color: 'success'
  },
  {
    id: '7',
    name: 'Career',
    slug: 'career',
    description: 'Career opportunities and internships',
    color: 'accent'
  },
  {
    id: '8',
    name: 'Admin',
    slug: 'admin',
    description: 'Administrative notices',
    color: 'muted'
  }
];

// Sample announcements data
export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'PresUniv DataViz Challenge 2025',
    slug: 'presuniv-dataviz-challenge-2025',
    category: 'contest',
    summary: 'Join the annual data visualization competition. Create stunning visualizations and win prizes up to $5,000. Open to all students.',
    body: `# PresUniv DataViz Challenge 2025

## Overview
The President University Data Visualization Challenge is back! This annual competition invites students to showcase their creativity and technical skills in transforming raw data into compelling visual stories.

## Prizes
- 🥇 **First Place**: $5,000 + Internship opportunity
- 🥈 **Second Place**: $3,000 + Certificate
- 🥉 **Third Place**: $1,500 + Certificate
- **People's Choice**: $1,000

## Rules & Guidelines
1. Individual or team participation (max 3 members)
2. Use any visualization tool or programming language
3. Dataset will be provided on registration
4. Submission must include source code and documentation

## Important Dates
- Registration opens: October 1, 2025
- Dataset release: October 15, 2025
- Submission deadline: November 10, 2025
- Winners announcement: November 25, 2025`,
    organizer: {
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@president.ac.id',
      phone: '+62-21-2789-4300',
      orgUnit: 'Faculty of Computing & Data Science'
    },
    tags: ['competition', 'data-science', 'visualization', 'prizes'],
    deadline: '2025-11-10T23:59:59Z',
    attachments: [
      {
        name: 'Competition Guidelines.pdf',
        url: '/attachments/dataviz-guidelines.pdf',
        type: 'application/pdf',
        size: 245760
      }
    ],
    externalLinks: [
      {
        label: 'Registration Form',
        url: 'https://forms.president.ac.id/dataviz2025'
      }
    ],
    createdAt: '2024-09-15T10:00:00Z',
    updatedAt: '2024-09-20T14:30:00Z',
    status: 'published',
    featured: true
  },
  {
    id: '2',
    title: 'PUMA Informatics Open Recruitment 2025',
    slug: 'puma-informatics-recruitment-2025',
    category: 'organization',
    summary: 'President University Multimedia Association (PUMA) is recruiting new members. Join us in creating digital innovations and media content.',
    body: `# Join PUMA Informatics 2025!

## About PUMA Informatics
The President University Multimedia Association (PUMA) Informatics division is seeking passionate students to join our creative community.

## What We Do
- Mobile app development
- Web development projects
- UI/UX design workshops
- Tech talks and seminars
- Collaboration with industry partners

## Requirements
- Currently enrolled at President University
- Basic programming knowledge (any language)
- Enthusiasm for technology and innovation
- Team player with good communication skills

## Benefits
- Hands-on project experience
- Industry networking opportunities
- Skill development workshops
- Certificate of participation
- Portfolio building support`,
    organizer: {
      name: 'Kevin Ananta',
      email: 'kevin.ananta@student.president.ac.id',
      orgUnit: 'PUMA Informatics Division'
    },
    tags: ['recruitment', 'programming', 'student-organization', 'technology'],
    startDateTime: '2025-10-05T09:00:00Z',
    endDateTime: '2025-10-20T17:00:00Z',
    location: {
      type: 'hybrid',
      address: 'Student Center, President University',
      link: 'https://meet.google.com/puma-recruitment'
    },
    attachments: [],
    externalLinks: [
      {
        label: 'Apply Now',
        url: 'https://puma.president.ac.id/recruitment'
      },
      {
        label: 'PUMA Website',
        url: 'https://puma.president.ac.id'
      }
    ],
    createdAt: '2024-09-18T08:00:00Z',
    updatedAt: '2024-09-22T16:45:00Z',
    status: 'published',
    featured: false
  },
  {
    id: '3',
    title: 'OBM 2025 Briefing Session',
    slug: 'obm-2025-briefing',
    category: 'event',
    summary: 'Mandatory briefing session for Orientasi Belajar Mahasiswa (OBM) 2025. All new students must attend this important orientation session.',
    body: `# Orientasi Belajar Mahasiswa (OBM) 2025 Briefing

## Event Details
Join us for the mandatory briefing session for all new students entering President University in 2025.

## Agenda
- **09:00 - 09:30**: Registration & Welcome
- **09:30 - 10:30**: University Overview & History
- **10:30 - 10:45**: Coffee Break
- **10:45 - 11:30**: Academic Policies & Procedures
- **11:30 - 11:45**: Q&A Session

## What to Bring
- Student ID card
- Notebook and pen
- University handbook (provided during registration)

## Important Notes
- Attendance is mandatory for all new students
- Session will be recorded for those unable to attend
- Dress code: Business casual
- Parking available at Building C

## Contact Information
For questions, please contact the Student Affairs Office.`,
    organizer: {
      name: 'Student Affairs Office',
      email: 'studentaffairs@president.ac.id',
      phone: '+62-21-2789-4200',
      orgUnit: 'Student Affairs Division'
    },
    tags: ['orientation', 'mandatory', 'new-students', 'briefing'],
    startDateTime: '2025-10-12T09:00:00Z',
    endDateTime: '2025-10-12T11:45:00Z',
    location: {
      type: 'hybrid',
      address: 'Main Auditorium, President University',
      link: 'https://zoom.us/j/obm2025briefing'
    },
    attachments: [
      {
        name: 'OBM Schedule.pdf',
        url: '/attachments/obm-schedule.pdf',
        type: 'application/pdf',
        size: 156432
      }
    ],
    externalLinks: [
      {
        label: 'Zoom Meeting',
        url: 'https://zoom.us/j/obm2025briefing'
      }
    ],
    createdAt: '2024-09-10T14:00:00Z',
    updatedAt: '2024-09-25T11:20:00Z',
    status: 'published',
    featured: true
  },
  {
    id: '4',
    title: 'AWS Emerging Talent Grant Program',
    slug: 'aws-emerging-talent-grant',
    category: 'scholarship',
    summary: 'Amazon Web Services is offering grants up to $10,000 for emerging talent in cloud computing. Application deadline: October 30, 2025.',
    body: `# AWS Emerging Talent Grant Program

## Program Overview
Amazon Web Services is proud to offer the Emerging Talent Grant Program to support the next generation of cloud professionals.

## Grant Amount
Up to **$10,000 USD** per recipient to cover:
- Tuition fees
- AWS certification costs
- Learning materials and resources
- Conference attendance

## Eligibility Criteria
- Currently enrolled undergraduate or graduate student
- Demonstrated interest in cloud computing
- GPA of 3.5 or higher
- Financial need consideration
- Indonesian citizenship or permanent residency

## Application Requirements
1. Completed application form
2. Academic transcripts
3. Letter of recommendation from faculty
4. Personal statement (500 words max)
5. Portfolio of cloud-related projects (if available)

## Selection Process
Applications will be reviewed by a panel of AWS professionals and academic partners. Recipients will be notified by December 15, 2025.

## Additional Benefits
- AWS mentorship program access
- Priority consideration for internships
- Free AWS certification exam vouchers
- Invitation to exclusive AWS events`,
    organizer: {
      name: 'Career Services Center',
      email: 'career@president.ac.id',
      phone: '+62-21-2789-4350',
      orgUnit: 'Career Services & Alumni Relations'
    },
    tags: ['scholarship', 'aws', 'cloud-computing', 'grants', 'technology'],
    deadline: '2025-10-30T23:59:59Z',
    attachments: [
      {
        name: 'Application Form.pdf',
        url: '/attachments/aws-application.pdf',
        type: 'application/pdf',
        size: 234567
      }
    ],
    externalLinks: [
      {
        label: 'Apply Online',
        url: 'https://aws.amazon.com/education/emerging-talent'
      }
    ],
    createdAt: '2024-09-12T13:30:00Z',
    updatedAt: '2024-09-24T09:15:00Z',
    status: 'published',
    featured: true
  },
  {
    id: '5',
    title: 'Academic Calendar Revision - Effective Immediately',
    slug: 'academic-calendar-revision',
    category: 'admin',
    summary: 'Important changes to the academic calendar including adjusted mid-term exam dates and semester break schedule.',
    body: `# Academic Calendar Revision Notice

## Effective Date
This revision is effective **immediately** and applies to all current semester activities.

## Key Changes

### Mid-Term Examinations
- **Original dates**: November 4-8, 2025  
- **Revised dates**: November 11-15, 2025
- **Reason**: Public holiday adjustment

### Semester Break
- **Original dates**: December 20, 2025 - January 6, 2026
- **Revised dates**: December 23, 2025 - January 8, 2026
- **Reason**: Extended holiday period

### Final Examinations
- **Dates remain unchanged**: December 9-13, 2025
- **Location**: As previously announced

## Impact on Students
- Assignment deadlines automatically adjusted
- No penalties for submissions affected by calendar changes
- Consult with faculty regarding project schedules

## Impact on Faculty
- Grading deadlines extended proportionally
- Updated calendar distributed to department heads
- Office hours schedule updates required

## Questions?
Contact the Academic Affairs Office for any clarification regarding these changes.`,
    organizer: {
      name: 'Academic Affairs Office',
      email: 'academic@president.ac.id',
      phone: '+62-21-2789-4100',
      orgUnit: 'Academic Affairs Division'
    },
    tags: ['academic-calendar', 'important', 'policy-change', 'examinations'],
    attachments: [
      {
        name: 'Revised Academic Calendar.pdf',
        url: '/attachments/revised-calendar.pdf',
        type: 'application/pdf',
        size: 445231
      }
    ],
    externalLinks: [],
    createdAt: '2024-09-25T16:00:00Z',
    updatedAt: '2024-09-25T16:00:00Z',
    status: 'published',
    featured: false
  },
  {
    id: '6',
    title: 'Software Engineering Internship at Tech Innovate',
    slug: 'tech-innovate-internship',
    category: 'career',
    summary: 'Exciting internship opportunity at Tech Innovate for Computer Science and Information Systems students. 6-month program with potential full-time offer.',
    body: `# Software Engineering Internship - Tech Innovate

## Company Overview
Tech Innovate is a leading fintech startup focusing on digital payment solutions and financial inclusion in Southeast Asia.

## Position Details
**Role**: Software Engineering Intern  
**Duration**: 6 months (January - June 2026)  
**Location**: Jakarta (Hybrid - 3 days office, 2 days remote)  
**Stipend**: IDR 4,000,000 per month

## Responsibilities
- Develop and maintain web applications using React/Node.js
- Participate in agile development processes
- Write clean, testable code with proper documentation
- Collaborate with cross-functional teams
- Contribute to code reviews and technical discussions

## Requirements
- Computer Science or Information Systems major
- Proficiency in JavaScript, HTML, CSS
- Basic knowledge of databases (MySQL/PostgreSQL)
- Git version control experience
- Strong problem-solving skills
- Good communication in English and Bahasa Indonesia

## What You'll Learn
- Modern web development frameworks
- Cloud computing (AWS/GCP)
- Microservices architecture
- DevOps practices
- Agile methodologies
- Financial technology domain knowledge

## Application Process
1. Submit resume and cover letter
2. Technical screening (coding challenge)
3. Technical interview (live coding)
4. Final interview with hiring manager
5. Reference check

## Benefits
- Mentorship from senior engineers
- Access to online learning platforms
- Potential full-time job offer
- Flexible working hours
- Modern office facilities`,
    organizer: {
      name: 'Career Services Center',
      email: 'career@president.ac.id',
      orgUnit: 'Career Services & Alumni Relations'
    },
    tags: ['internship', 'software-engineering', 'fintech', 'career-opportunity'],
    deadline: '2025-11-15T23:59:59Z',
    attachments: [],
    externalLinks: [
      {
        label: 'Apply Online',
        url: 'https://techinnovate.com/careers/intern-swe'
      },
      {
        label: 'Company Website',
        url: 'https://techinnovate.com'
      }
    ],
    createdAt: '2024-09-20T11:00:00Z',
    updatedAt: '2024-09-23T14:30:00Z',
    status: 'published',
    featured: false
  }
];