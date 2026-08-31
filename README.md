# Rama IT Solutions Full Stack Website

Rama IT Solutions is a responsive full stack business website built with a React + Vite frontend and a FastAPI backend. The project presents the company's digital assessment, infrastructure, and technical manpower services through a polished marketing site, while also providing an admin area to review inquiries and registrations.

## Project Overview

This project combines:

- A multi-page frontend with a service-focused UI
- Public registration and inquiry forms
- Resume upload support for registration submissions
- An admin login flow protected by JWT authentication
- An admin dashboard for reviewing and managing submitted records

The frontend is designed as a professional corporate experience with strong visual hierarchy, bold gradient accents, card-based content blocks, and responsive navigation. The backend exposes REST APIs for public submissions and authenticated admin operations.

## Tech Stack

### Frontend

- React 18
- Vite
- React Router DOM
- Custom CSS in a single theme stylesheet

### Backend

- FastAPI
- SQLAlchemy
- SQLite by default
- PostgreSQL support through `DATABASE_URL`
- JWT-based admin authentication
- Static file serving for uploaded resumes

## Pages and Flows

### Public Pages

- `Home`
- `About`
- `Services`
- `Registration`
- `Contact`

### Admin Pages

- `Admin Login`
- `Admin Dashboard`

### User Flow

1. A visitor lands on the homepage and explores services through the navbar or CTA sections.
2. The visitor can submit an inquiry through the contact form.
3. A candidate, technical staff member, or partner can register through the registration form and optionally upload a resume.
4. An admin signs in through the admin login page.
5. The admin dashboard loads inquiry and registration records, supports status updates, and allows record deletion.

## UI/UX Theme

The visual direction is intentionally corporate, modern, and high-trust, built for an IT infrastructure and digital assessment brand.

### Theme Direction

- Enterprise-focused visual identity
- Clean, professional layouts with strong spacing
- High-contrast dark hero sections balanced with bright content surfaces
- Modern gradient accents to signal technology and security
- Sticky navigation for easier movement across the site

### Color System

The theme is driven through CSS variables in `frontend/src/styles.css`.

- Background: soft light gray-blue `--bg`
- Surface: white `--surface`
- Primary text: deep navy `--ink`
- Secondary text: muted slate `--text`
- Accent colors: `--navy`, `--blue`, `--cyan`, `--violet`

These colors are used across hero gradients, buttons, the logo mark, section labels, CTA blocks, and admin panels.

### Typography

- Primary family: `Segoe UI Variable`, `Segoe UI`, `Inter`, `Arial`, `sans-serif`
- Display headings use a stronger display-oriented stack for more presence
- Headings use tight letter spacing and fluid sizing with `clamp(...)`
- Small uppercase eyebrow labels improve visual scanning

### Layout Language

- Wide centered container with `1180px` max content width
- Reusable section spacing with generous vertical rhythm
- Card-based design for strengths, services, and dashboard metrics
- Split layouts for content paired with emphasis panels
- Reusable chips for service capability tags
- Sticky header and distinct CTA/footer separation

### Motion and Interaction

- Smooth document scrolling is enabled globally
- Hover lift is used on buttons and cards
- The homepage server illustration includes a floating animation
- Reduced-motion support disables animation when appropriate

### Responsive Behavior

The frontend adapts across desktop, tablet, and mobile with media queries.

- Navbar collapses into a mobile menu below `900px`
- Multi-column grids collapse progressively on smaller screens
- Forms switch from two-column to one-column layout on mobile
- Admin dashboard layout becomes stacked on smaller viewports

## Components and Frontend Structure

### Core Components

- `Layout.jsx` for the shared header, navigation, CTA band, and footer
- `PageHero.jsx` for inner-page hero sections
- `ScrollToTop.jsx` for resetting scroll position on route changes

### Frontend Notes

- React Router handles page routing
- Navbar links and CTA actions are wired to internal routes
- Route changes now reset the scroll position to the top of the page
- JSX files were updated to include proper React imports for compatibility with the current setup

## Forms and Admin Experience

### Contact Form

The contact page allows visitors to submit:

- Full name
- Company or institution
- Email
- Phone number
- Requirement type
- Project message

### Registration Form

The registration page supports:

- Full name
- Contact details
- Role selection
- Location
- Resume upload
- Additional information

Accepted resume types:

- PDF
- DOC
- DOCX

### Admin Dashboard

The dashboard includes:

- Inquiry and registration tabs
- Status management
- Record deletion
- Resume viewing links
- Summary stat cards

Supported statuses:

- `new`
- `reviewing`
- `contacted`
- `approved`
- `rejected`
- `closed`

## Backend API Summary

Main backend behaviors include:

- `GET /api/health`
- `POST /api/admin/login`
- `POST /api/inquiries`
- `POST /api/registrations`
- `GET /api/admin/inquiries`
- `GET /api/admin/registrations`
- `PATCH /api/admin/inquiries/{item_id}/status`
- `PATCH /api/admin/registrations/{item_id}/status`
- `DELETE /api/admin/inquiries/{item_id}`
- `DELETE /api/admin/registrations/{item_id}`

Uploads are served from:

- `/uploads`

## Project Structure

```text
rama_it_fullstack/
|-- backend/
|   |-- app/
|   |   |-- auth.py
|   |   |-- config.py
|   |   |-- main.py
|   |   |-- models.py
|   |   `-- ...
|   |-- run.py
|   `-- requirements.txt
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |   |-- Layout.jsx
|   |   |   |-- PageHero.jsx
|   |   |   `-- ScrollToTop.jsx
|   |   |-- pages/
|   |   |   |-- Home.jsx
|   |   |   |-- About.jsx
|   |   |   |-- Services.jsx
|   |   |   |-- Registration.jsx
|   |   |   |-- Contact.jsx
|   |   |   |-- AdminLogin.jsx
|   |   |   `-- AdminDashboard.jsx
|   |   |-- App.jsx
|   |   |-- api.js
|   |   |-- main.jsx
|   |   `-- styles.css
|   |-- package.json
|   `-- ...
`-- README.md
```

## Local Development

### Run the Backend

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
copy .env.example .env

python run.py
```

Backend URLs:

- API: `http://localhost:8000`
- Swagger Docs: `http://localhost:8000/docs`

Default admin credentials from `.env.example`:

- Email: `admin@ramaitsolutions.local`
- Password: `ChangeMe123!`

Change these before deployment.

### Run the Frontend

Open a second terminal:

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend URLs:

- Website: `http://localhost:5173`
- Admin: `http://localhost:5173/admin`

## Environment and Configuration

Default backend behavior includes:

- SQLite storage for local development
- Static upload serving from the backend
- Admin credentials loaded from environment variables
- JWT secret loaded from configuration

### PostgreSQL Configuration

To use PostgreSQL, set:

```env
DATABASE_URL=postgresql+psycopg2://USERNAME:PASSWORD@HOST:5432/DATABASE_NAME
```

Create the database before starting the backend. Tables are created automatically on startup.

## Work Completed in This Project

The current project includes the following implemented work:

- A branded React/Vite marketing website
- Responsive navigation and layout system
- Shared page hero and layout components
- CTA and footer sections integrated into the main layout
- Contact submission flow wired to the backend
- Registration submission flow with file upload support
- Admin authentication flow using JWT
- Admin dashboard with inquiry and registration management
- Scroll reset on route changes for cleaner page transitions
- React import fixes across JSX files to prevent runtime errors

## Deployment Recommendations

Before production deployment:

- Replace SQLite with PostgreSQL
- Change the admin credentials
- Change `JWT_SECRET`
- Use HTTPS
- Put FastAPI behind a reverse proxy such as Nginx
- Store secrets outside source control
- Consider object storage for uploaded resumes
- Add rate limiting or CAPTCHA for public forms
- Add email notifications if needed
- Add database migrations with Alembic
- Replace single-admin configuration with a proper admin user model if multi-user access is required

## Notes

- The React DevTools browser suggestion is informational only and not an application error.
- The project currently uses custom CSS rather than a UI component framework.
- Build verification was not run from this shell because `node` and `npm` were not available in the current environment.
