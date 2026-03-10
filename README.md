# Atomity Frontend Engineering Challenge

## Overview

This project implements an **animated cloud infrastructure optimization section** inspired by the Atomity product video.

The section visualizes how multiple cloud providers (AWS, Azure, GCP, On-Prem) connect to a central **Optimization Engine** that analyzes infrastructure metrics such as CPU, RAM, Storage, and Network usage.

The focus of this implementation is on **frontend engineering quality**, including animation, component architecture, data fetching, caching, and responsive design.

---

# Feature Chosen

I implemented a **cloud infrastructure metrics section** that demonstrates how different cloud environments feed resource data into a central optimization engine.

The section includes:

* Cloud provider nodes
* A central optimization engine
* Resource metric cards
* Scroll-triggered animations
* Real-time metric visualization

---

# Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion** – animations
* **TanStack React Query** – API fetching & caching
* **Axios** – API requests

---

# Component Architecture

The project follows a **modular component structure**.

```
components/
 ├── FeatureSection.tsx
 ├── ResourceCard.tsx
 └── CloudNode.tsx

hooks/
 └── useApiData.ts

tokens/
 └── tokens.ts

lib/
 └── queryClient.ts
```

### FeatureSection

Main section layout including:

* heading
* cloud providers
* optimization engine
* animated metric cards

### ResourceCard

Reusable card component displaying:

* resource name
* animated percentage counter
* hover animation

### CloudNode

Represents each cloud provider node with animation.

---

# Animation Approach

Animations are implemented using **Framer Motion**.

Key animations include:

### Scroll-Triggered Entrance

Cards animate when they enter the viewport using:

```
whileInView
```

### Staggered Animation

Metric cards appear sequentially using:

```
staggerChildren
```

### Hover Interactions

Cards slightly scale on hover to improve interaction feedback.

### Count-Up Metric Animation

Metric percentages animate from **0 → final value** using a timed counter.

---

# Data Fetching

Data is fetched using **React Query (TanStack Query)**.

Example API used:

```
https://dummyjson.com/products
```

Although the API returns product data, it is used only to simulate dynamic fetching while displaying cloud-related metrics.

---

# Caching Strategy

React Query caching prevents unnecessary refetching.

```
staleTime: 5 minutes
```

This ensures:

* faster subsequent renders
* reduced network requests

---

# Modern CSS Features

The project uses modern CSS capabilities including:

### clamp()

Responsive typography:

```
font-size: clamp(2rem, 4vw, 2.8rem)
```

### Backdrop Blur

Used in metric cards for a subtle **glassmorphism effect**.

### Tailwind Responsive Grid

```
grid-cols-4
md:grid-cols-2
sm:grid-cols-1
```

---

# Responsive Design

The layout adapts across devices:

| Device  | Layout         |
| ------- | -------------- |
| Desktop | 4 metric cards |
| Tablet  | 2 columns      |
| Mobile  | 1 column       |

---

# Accessibility

Basic accessibility considerations include:

* semantic HTML structure
* readable color contrast
* clear typography
* hover feedback for interactive elements

---

# What I Would Improve With More Time

If more time were available, I would add:

* animated connection lines between cloud nodes and engine
* dark/light theme toggle
* real infrastructure metrics from a cloud API
* container queries for component-level responsiveness
* improved loading skeleton animations

---

# Installation

Clone the repository:

```
git clone <repo-url>
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

# Live Demo

Deployed using **Vercel**.


---

# Author

Frontend implementation by **Sahana A M**.
