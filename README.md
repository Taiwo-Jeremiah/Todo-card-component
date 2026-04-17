# Stage 0: Testable Todo Item Card

A high-fidelity, responsive, and fully testable Todo Task Card built with **Vanilla HTML, CSS, and JavaScript**. This project focuses on semantic structure, accessibility (a11y), and automated testability.

## 🚀 Live Demo
[https://taiwo-jeremiah.github.io/Todo-card-component/]

## 🛠️ Features
* **Real-time Countdown:** The "Time Remaining" updates every 60 seconds without a page refresh.
* **Fully Testable:** Implements specific `data-testid` attributes for automated QA suites.
* **Semantic HTML:** Optimized for screen readers and SEO using modern HTML5 tags.
* **Responsive Design:** Polished "startup energy" aesthetic that works on mobile and desktop.

## 📂 How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Taiwo-Jeremiah/Todo-card-component.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd Todo-card-component
   ```
3. **Open the project:**
   Simply open the `index.html` file in any modern web browser.
   *(Alternatively, use the "Live Server" extension in VS Code for the best experience.)*

## 🧠 Decisions Made

### 1. Semantic HTML & Accessibility
* Used `<article>` for the card container to represent a self-contained piece of content.
* Used `<time>` with a `datetime` attribute for the due date to provide machine-readable data for browsers and calendars.
* Used `<input type="checkbox">` for the completion toggle to ensure keyboard navigability and native accessibility.

### 2. State Management (Vanilla JS)
* Implemented a centralized `updateLiveCountdown` function.
* By using `setInterval`, the component feels "alive" as it dynamically calculates the difference between the current time and the fixed deadline (`2026-04-16T23:59:00`).

### 3. Styling Strategy
* Used CSS Variables for the color palette (Indigo/Slate).
* This mimics a professional design system, making it easy to swap themes (e.g., Dark Mode) in the future.
* The "startup" feel was achieved using soft shadows (`box-shadow`) and subtle hover transitions.

## ⚖️ Trade-offs

* **Vanilla JS vs. React:** While I am proficient in React, I chose Vanilla JS for this stage to minimize bundle size and demonstrate a deep understanding of the DOM API. This results in a near-instant load time.
* **Time Library:** I opted to write a custom date-formatting function instead of importing a library like *date-fns* or *Moment.js*. This keeps the project dependency-free and lightweight.
* **CSS Grid vs. Flexbox:** I used a combination of both; Flexbox for the header (alignment) and Grid for the footer (structure). This ensures the "Due Date" and "Time Remaining" sections stay perfectly aligned across different screen widths.

## 🧪 Technical Specifications
* **Card Container:** `data-testid="test-todo-card"`
* **Status Toggle:** `data-testid="test-todo-complete-toggle"`
* **Priority Badge:** `data-testid="test-todo-priority"`

## 🚀 Stage 1a Updates: Advanced Interactive Features
This section outlines the new features, logic, and test IDs added to upgrade the Stage 0 card into the stateful Stage 1a component.

### 🛠️ What Changed from Stage 0
* **Stateful Editing Mode:** Added a functional form that allows users to edit the title, description, priority, and due date in real-time.
* **Status Synchronization:** The UI now bi-directionally syncs between the completion checkbox and a new status dropdown ("Pending", "In Progress", "Done"). Unchecking reverts the status to "Pending".
* **Expandable Description:** Added an accordion-style expand/collapse toggle to handle excessively long text cleanly.
* **Granular Time Handling:** Timer logic was upgraded to display exact days, hours, and minutes, and automatically displays an explicit "Overdue" indicator with red text when the deadline passes.
* **Visual Status Indicators:** The component now applies a strike-through and muting effect when "Done", and an amber border accent when "In Progress".

### ♿ Accessibility (A11y) Additions
* **Focus Management:** When exiting the edit mode (via Save or Cancel), keyboard focus is programmatically returned to the Edit button to maintain strict tab order.
* **ARIA Expansions:** The expand/collapse button correctly utilizes `aria-expanded` and `aria-controls` to semantically link the button to the hidden text.
* **Live Region Tracking:** The dynamic timer uses `aria-live="polite"` so screen readers are gently notified of time updates without breaking user flow.

### 🧪 New Technical Specifications (Stage 1a IDs)
* **Edit Form:** `data-testid="test-todo-edit-form"`
* **Status Control:** `data-testid="test-todo-status-control"`
* **Expand Toggle:** `data-testid="test-todo-expand-toggle"`
* **Overdue Indicator:** `data-testid="test-todo-overdue-indicator"`
* **Priority Indicator:** `data-testid="test-todo-priority-indicator"`



