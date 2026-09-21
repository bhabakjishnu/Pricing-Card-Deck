# 💳 Responsive Pricing Card Deck

<div align="center">

  <p align="center">
    A high-converting, modern <strong>Developer Services Pricing Deck</strong> built with semantic HTML5 and cutting-edge modern CSS3. Demonstrates advanced Flexbox layout mechanics, native CSS nesting, CSS custom properties, and responsive design patterns without external frameworks.
  </p>

  <p align="center">
    <a href="https://bhabakjishnu.github.io/Pricing-Card-Deck/"><strong>Explore Live Demo »</strong></a>
    <br />
    <a href="https://github.com/bhabakjishnu/Pricing-Card-Deck/issues">Report Bug</a>
    ·
    <a href="https://github.com/bhabakjishnu/Pricing-Card-Deck/issues">Request Feature</a>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Flexbox-Advanced-01B7FF?style=for-the-badge&logo=css3&logoColor=white" alt="Flexbox" />
    <img src="https://img.shields.io/badge/Responsive-Mobile_Friendly-success?style=for-the-badge" alt="Responsive" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
  </p>
</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & CSS Highlights](#-architecture--css-highlights)
  - [Advanced Flexbox Deck Strategy](#1-advanced-flexbox-deck-strategy)
  - [Native CSS Nesting](#2-native-css-nesting)
  - [Modern Viewport & Logical Properties](#3-modern-viewport--logical-properties)
  - [Media Queries Level 4](#4-media-queries-level-4-syntax)
- [Tier Breakdown](#-tier-breakdown)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Running Locally](#installation--running-locally)
- [Customization Guide](#-customization-guide)
- [Browser Compatibility](#-browser-compatibility)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 📖 Overview

The **Pricing Card Deck** is an engineered pricing table layout designed for SaaS and software development agencies. It provides a visual hierarchy to guide prospective clients toward high-value service tiers (featuring the **"Pro Developer"** tier as the prime conversion target).

### Target Audience & Use Case
- **Freelance Engineers & Agencies:** A plug-and-play pricing table ready to integrate into any client-facing website or portfolio.
- **Frontend Practitioners:** A clean, dependency-free reference implementation of modern CSS specifications (Flexbox weighting, CSS nesting, logical properties).

---

## ✨ Key Features

- 🎯 **Conversion-Optimized Hierarchy:** Featured "Pro Developer" card stands out with an eye-catching badge, custom borders, and priority flex sizing.
- 📐 **Zero-Framework Architecture:** Pure, pristine vanilla HTML5 and CSS3—no Tailwind, Bootstrap, or JavaScript overhead.
- 📱 **Fully Responsive:** Adapts gracefully from wide 4K desktop screens down to compact mobile viewports.
- ⚡ **Blazing Fast Performance:** 0ms JavaScript execution time, zero external bundle bloat, and GPU-accelerated CSS micro-animations.
- ♿ **Semantic & Accessible (A11y):** Formatted with semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) and accessible `aria-label` tags for social links.
- 🎨 **Modular Design Tokens:** Easily brandable via centralized CSS Custom Properties in `:root`.

---

## 🧠 Architecture & CSS Highlights

### 1. Advanced Flexbox Deck Strategy

The layout avoids rigid grids in favor of a fluid, resilient Flexbox strategy:

```css
/* Container: Centered items with wrapping */
.pricing-card-deck {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}

/* Standard Tier Cards */
.card {
    flex: 1 1 300px; /* grow: 1, shrink: 1, basis: 300px */
}

/* Featured / Best Value Tier Override */
.card--featured {
    flex: 2 0 340px;      /* Prioritized growth, never shrinks below 340px */
    align-self: stretch;  /* Breaks out of center alignment to fill vertical space */
}

/* Footer Pinning */
.card__footer {
    margin-block-start: auto; /* Guarantees CTA buttons always align across uneven card copy */
}
```

### 2. Native CSS Nesting
Written using browser-native nesting syntax without requiring preprocessors like SASS or PostCSS:

```css
.card {
    /* ...base styles... */

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    &__header {
        display: flex;
        justify-content: space-between;
    }
}
```

### 3. Modern Viewport & Logical Properties
- **`100svh` (Small Viewport Height):** Eliminates awkward layout jumps caused by collapsible mobile browser URL bars.
- **Logical Properties:** Leverages `padding-block`, `padding-inline`, and `margin-block-start` for modern internationalization and cleaner dimensional control.

### 4. Media Queries Level 4 Syntax
Uses the modern range syntax for cleaner, more readable responsive breakpoints:

```css
@media (width <= 768px) {
    .site-header {
        flex-direction: column;
    }
    .footer__container {
        flex-direction: column;
        align-items: center;
    }
}
```

---

## 📦 Tier Breakdown

| Tier | Target Client | Key Focus | Flex Behavior |
| :--- | :--- | :--- | :--- |
| **Basic Integration** | Startups & Simple Sites | Standard HTML5 & CSS3 static development | `flex: 1 1 300px` |
| ⭐ **Pro Developer** *(Featured)* | High-growth apps & SMBs | Advanced Flexbox, modern tooling, component systems | `flex: 2 0 340px` + `align-self: stretch` |
| **Enterprise** | Large Scale Organizations | Full-stack architecture, custom CI/CD pipelines | `flex: 1 1 300px` |

---

## 🛠️ Tech Stack

- **Markup:** [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) (Semantic, Accessible)
- **Styling:** [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (Flexbox, CSS Custom Properties, Native Nesting)
- **Typography:** [Google Fonts](https://fonts.google.com/) (*Archivo Black*, *Knewave*, *Poppins*)
- **Icons:** [Font Awesome 6](https://fontawesome.com/) (CDN)

---

## 📁 Project Directory Structure

```text
Pricing-Card-Deck/
├── assets/
│   ├── css/
│   │   └── style.css            # Central stylesheet with design tokens & layout rules
│   │   ├── style.css            # Central entry point importing modular stylesheets
│   │   ├── variables.css        # Design tokens & CSS custom properties
│   │   ├── reset.css            # Reset & normalization rules
│   │   ├── base.css             # Base styles & typography
│   │   ├── layout.css           # Header, main-content, and footer layout
│   │   ├── components.css       # Buttons & reusable UI elements
│   │   ├── pricing.css          # Pricing cards & flex deck structure
│   │   └── responsive.css       # Media queries & responsive overrides
│   └── images/
│       └── Profile-picture.jpg  # Feature package preview asset
├── index.html                   # Semantic markup entry point
└── README.md                    # Project documentation & deliverable specifications
```

---

## 🚀 Getting Started

### Prerequisites

No special build tools, compilers, or package managers are required. You only need a modern web browser (Google Chrome, Firefox, Edge, Safari).

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhabakjishnu/Pricing-Card-Deck.git
   ```

2. **Navigate to the project root:**
   ```bash
   cd Pricing-Card-Deck
   ```

3. **Launch the project:**
   - **Direct Browser:** Simply open `index.html` in your favorite web browser.
   - **VS Code Live Server:** Right-click `index.html` and select **"Open with Live Server"**.
   - **Node.js (optional):**
     ```bash
     npx serve .
     ```

---

## 🎨 Customization Guide

You can completely alter the visual theme by tweaking the design tokens inside [assets/css/style.css](assets/css/style.css):
You can completely alter the visual theme by tweaking the design tokens inside [assets/css/variables.css](assets/css/variables.css):

```css
:root {
    /* Color Scheme */
    --body-background: #F5F5F5;
    --card-background: bisque;
    --card-featured-bg: #ffe4c4;
    --header-background: #01B7FF;
    --text-light: #ffffff;
    --text-dark: #333333;
    --btn-primary: #01B7FF;
    --footer-bg: #333333;
    
    /* Typography */
    --font-logo: "Knewave", system-ui;
    --font-heading: "Archivo Black", sans-serif;
    --font-body: "Poppins", sans-serif;
}
```

---

## 🌐 Browser Compatibility

Tested and fully operational across all evergreen browsers supporting native CSS Nesting and Level 4 Media Queries:

| Browser | Supported Version |
| :--- | :--- |
| **Google Chrome** | Version 120+ |
| **Mozilla Firefox** | Version 117+ |
| **Apple Safari** | Version 17.2+ |
| **Microsoft Edge** | Version 120+ |

---

## 🤝 Contributing

Contributions make the open-source community an inspiring place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Jishnu Bhabak**

- **GitHub:** [@bhabakjishnu](https://github.com/bhabakjishnu)
- **Repository:** [Pricing-Card-Deck](https://github.com/bhabakjishnu/Pricing-Card-Deck)

---

<div align="center">
  <sub>Built with ❤️ by Jishnu Bhabak. If you enjoyed this project, don't forget to star ⭐ the repository!</sub>
</div>