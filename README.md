# Accredian Enterprise Website

A modern, responsive Next.js application recreating the Accredian Enterprise platform with a focus on clean architecture, reusable components, and full-stack capability.

---

## 🚀 Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4
* **Fonts**: Inter (via next/font)
* **Icons**: Material Symbols (Google Fonts)

---

## 🧠 Approach

The project was built with a focus on scalability, maintainability, and real-world product thinking.

* Broke down the landing page into modular, reusable sections and UI components
* Used Next.js App Router for efficient routing and API integration
* Designed a clean folder structure separating layout, sections, and UI layers
* Implemented API routes to simulate backend functionality
* Focused on responsive, mobile-first design using Tailwind CSS
* Built a simple admin panel to view submitted enquiries dynamically

---

## 📁 Project Structure

```
accredian/
├── app/
│   ├── api/
│   │   └── enquire/          # GET + POST (lead capture API)
│   ├── admin/enquiries/      # Admin panel to view enquiries
│   ├── enquire/              # Enquiry form page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrackRecord.tsx
│   │   ├── Partnerships.tsx
│   │   ├── AccredianEdge.tsx
│   │   ├── DomainExpertise.tsx
│   │   ├── CourseSegmentation.tsx
│   │   ├── SkillEnhancement.tsx
│   │   ├── CATFramework.tsx
│   │   ├── DeliverySteps.tsx
│   │   ├── Testimonials.tsx
│   │   └── FAQ.tsx
│   └── ui/
│       ├── Button.tsx
│       └── EnquiryForm.tsx
├── lib/
│   └── data.ts
├── types/
│   └── index.ts
└── public/images/
```

---

## 🌐 Pages

| Route              | Description                   |
| ------------------ | ----------------------------- |
| `/`                | Landing page                  |
| `/enquire`         | Enquiry form                  |
| `/admin/enquiries` | Admin dashboard to view leads |

---

## 🔌 API Endpoints

| Method | Route          | Description         |
| ------ | -------------- | ------------------- |
| POST   | `/api/enquire` | Submit enquiry form |
| GET    | `/api/enquire` | Fetch all enquiries in JSON view |

---

## ✨ Features

* Fully responsive (mobile-first)
* Clean and structured UI
* Reusable component architecture
* Enquiry form with validation and API integration
* Admin panel to view submitted enquiries
* SEO-friendly structure with metadata
* Accessible UI with semantic HTML
* Modular and scalable codebase

---

## ⏱️ Development Time & Workflow

The project was completed in approximately **3 hours 45 minutes**, focusing on rapid execution while maintaining code quality and structure.

### Development Workflow

* Used AI-assisted design tools to quickly generate an initial UI structure, significantly reducing design iteration time
* Leveraged AI to scaffold component structures and API routes
* Refined layout, component architecture, and responsiveness manually
* Implemented validation logic, API integration, and admin panel with deliberate engineering decisions
* Used AI selectively for debugging and optimization, while maintaining full understanding of the codebase

The focus was on using AI as an **accelerator for development speed**, while ensuring that all architectural and implementation decisions were made consciously.

---

## 🛠️ Getting Started

### Prerequisites

* Node.js 18+
* pnpm / npm / yarn

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open http://localhost:3000

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

---

## 🎯 Future Improvements

* Persist enquiry data using a database (MongoDB or PostgreSQL)
* Add authentication for admin dashboard
* Implement rate limiting and server-side validation
* Add analytics for tracking user interactions
* Improve performance with caching strategies
* Enhance UI animations and accessibility further

---

## 📌 Notes

* Enquiry data is currently stored in-memory for demonstration purposes
* Can be easily extended to a production-ready backend with database integration

---

## 🚀 Deployment

Deployed on Vercel for fast and reliable access.
