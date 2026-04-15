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
   *(Alternatively, use the "Live Server" extension in VS Code for the best experience).*

## 🧠 Decisions Made

### **1. Semantic HTML & Accessibility**
Instead of using generic `<div>` tags, I used:
* `<article>` for the card container to represent a self-contained piece of content.
* `<time>` with a `datetime` attribute for the due date to provide machine-readable data for browsers and calendars.
* `<input type="checkbox">` for the completion toggle to ensure keyboard navigability and native accessibility.

### **2. State Management (Vanilla JS)**
I implemented a centralized `updateLiveCountdown` function. By using `setInterval`, the component feels "alive" as it dynamically calculates the difference between the current time and the fixed deadline (`2026-04-16T23:59:00`), fulfilling the requirement for high-fidelity interactivity.

### **3. Styling Strategy**
I used **CSS Variables** for the color palette (Indigo/Slate). This mimics a professional design system, making it easy to swap themes (e.g., Dark Mode) in the future. The "startup" feel was achieved using soft shadows (`box-shadow`) and subtle hover transitions.

## ⚖️ Trade-offs

* **Vanilla JS vs. React:** While I am proficient in React, I chose Vanilla JS for this stage to minimize bundle size and demonstrate a deep understanding of the DOM API. This results in a near-instant load time.
* **Time Library:** I opted to write a custom date-formatting function instead of importing a library like *date-fns* or *Moment.js*. This keeps the project dependency-free and lightweight.
* **CSS Grid vs. Flexbox:** I used a combination of both; Flexbox for the header (alignment) and Grid for the footer (structure). This ensures the "Due Date" and "Time Remaining" sections stay perfectly aligned across different screen widths.

## 🧪 Technical Specifications
* **Card Container:** `data-testid="test-todo-card"`
* **Status Toggle:** `data-testid="test-todo-complete-toggle"`
* **Priority Badge:** `data-testid="test-todo-priority"`

