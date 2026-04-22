# Brothers Bakery - Website Specification

## 1. Project Overview

- **Project Name**: Brothers Bakery
- **Type**: Single-page E-commerce Website (HTML + Tailwind CSS CDN)
- **Core Functionality**: A warm, cozy bakery website featuring product browsing, shopping cart, and customer testimonials
- **Target Users**: Local customers seeking artisanal baked goods

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections**:
1. **Navbar** - Fixed top navigation with logo, nav links, cart icon with item count
2. **Hero Section** - Full-width background with headline and CTA
3. **Product Gallery** - Filterable grid of bakery items
4. **Testimonials** - Customer reviews with navigation dots
5. **Contact/Location** - Contact form with validation + map placeholder
6. **Footer** - Opening hours, social links, newsletter signup
7. **Cart Sidebar** - Slide-out drawer for cart items

**Responsive Breakpoints**:
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

### Visual Design

**Color Palette**:
- Primary Background: `#FDF5E6` (Cream)
- Primary Text/Accent: `#3E2723` (Deep Chocolate)
- Secondary Accent: `#818967` (Soft Sage Green)
- Light Accent: `#D4A574` (Warm Caramel)
- White: `#FFFFFF`
- Dark Overlay: `rgba(62, 39, 35, 0.5)`

**Typography**:
- Headings: `Playfair Display` (serif) - elegant, warm
- Body: `Inter` (sans-serif) - clean, readable

---

## 3. Functionality Specification

### Core Features

**Product Data**:
- 9 products (3 per category: Bread, Pastries, Cakes)
- Products include: id, name, category, price, image, description

**Live Filtering**:
- Category filter buttons: All, Bread, Pastries, Cakes
- Instant filtering (no page reload)

**Shopping Cart**:
- Add items to cart
- Increment/decrement quantity
- Remove items
- Calculate subtotal
- Persist cart in localStorage
- Cart icon shows total item count
- Slide-out sidebar

**Contact Form**:
- Client-side validation
- Name (required, min 2 chars)
- Email (required, valid format)
- Message (required, min 10 chars)
- Success message on submit

**Testimonials**:
- Auto-rotate every 5 seconds
- Pause on hover
- Manual navigation via dots

---

## 4. Technical Stack

- **HTML5** with inline JavaScript
- **Tailwind CSS** (via CDN)
- **Google Fonts** (Playfair Display, Inter)
- **Lucide Icons** (SVG inline)
- **LocalStorage** for cart persistence

---

## 5. File Structure

```
/mnt/c/Users/sloke/Downloads/tesproject/
├── index.html          # Complete single-page application
├── SPEC.md            # This specification
├── package.json       # (for Next.js version - not working)
├── app/               # (Next.js components - not used)
├── components/        # (Next.js components - not used)
└── lib/               # (Next.js data - not used)
```

---

## 6. How to Run

Simply open `index.html` in any web browser. No server or build process required.

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server
npx serve .
```

---

## 7. Key Features Implemented

- [x] Hero section with background image and CTA
- [x] Products render in responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- [x] Filter buttons correctly filter products by category
- [x] Cart sidebar opens/closes smoothly with animation
- [x] Items can be added, quantity changed, removed from cart
- [x] Subtotal calculates correctly
- [x] Testimonial carousel auto-advances with pause on hover
- [x] Contact form validates inputs
- [x] Responsive design for all breakpoints
- [x] Colors match specified palette
- [x] Fonts load correctly (Playfair Display + Inter)
- [x] Newsletter subscription form
