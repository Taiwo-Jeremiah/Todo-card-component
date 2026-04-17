# Stage 1: Testable Todo Item Card

A high-fidelity, responsive, and fully testable Todo Task Card built with **Vanilla HTML, CSS, and JavaScript**. This project focuses on semantic structure, accessibility (a11y), and automated testability.

## 🚀 Live Demo
[https://taiwo-jeremiah.github.io/Todo-card-component/]

## 🛠️ Features
* **Real-time Countdown:** The "Time Remaining" updates every 30 seconds without a page refresh.
* **Editable Task Card:** Open the edit form to update title, description, priority, and due date.
* **Status Sync:** The checkbox and status dropdown stay in sync and update the displayed task state.
* **Overdue Awareness:** When the deadline passes, the card shows an overdue indicator and message.
* **Expandable Description:** The task details can be expanded or collapsed for a cleaner mobile layout.
* **Fully Testable:** Includes rich `data-testid` attributes plus ARIA-friendly live regions.

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
   Open `index.html` in any modern web browser, or use VS Code Live Server for local preview.

## 🧠 Decisions Made

### 1. Semantic HTML & Accessibility
* Used `<article>` for the todo card to define a self-contained content block.
* Used `<time datetime="2026-04-16">` for the due date to make the deadline machine-readable.
* Added `aria-expanded` on the description toggle and an `aria-live` region for countdown updates.
* Used native form controls like `<input>`, `<textarea>`, and `<select>` to preserve accessibility and keyboard support.

### 2. Vanilla JavaScript Logic
* Used a state object in `script.js` to store title, description, priority, deadline, and status.
* Implemented an edit form that populates current data and updates the card in real time when saved.
* The countdown displays due time or overdue time and updates automatically using `setInterval`.
* Status changes are synced between the checkbox and the dropdown, with styling updates for different task states.

### 3. Styling Strategy
* Leveraged CSS variables for colors, border radius, and shadows to create a consistent visual system.
* Built responsive card spacing, hover effects, and button focus states for a polished interactive feel.
* Removed default list styling for tags and used grouped layout styles for the footer and actions.

## ⚖️ Trade-offs

* **No framework:** Chose Vanilla JS to keep the app lightweight and reduce dependency overhead.
* **No external date library:** Used built-in `Date` arithmetic instead of adding dependencies like `date-fns` or `Moment.js`.
* **Local state over persistence:** Data updates are managed in-memory for simplicity, without saving to local storage or a backend.

## 🧪 Implementation Details
* **Card Container:** `data-testid="test-todo-card"`
* **Task Title:** `data-testid="test-todo-title"`
* **Priority Indicator:** `data-testid="test-todo-priority-indicator"`
* **Priority Badge:** `data-testid="test-todo-priority"`
* **Description:** `data-testid="test-todo-description"`
* **Expandable Section:** `data-testid="test-todo-collapsible-section"`
* **Expand Toggle:** `data-testid="test-todo-expand-toggle"`
* **Tags:** `data-testid="test-todo-tags"` and individual tag ids
* **Due Date:** `data-testid="test-todo-due-date"`
* **Time Remaining:** `data-testid="test-todo-time-remaining"`
* **Overdue Indicator:** `data-testid="test-todo-overdue-indicator"`
* **Status Text:** `data-testid="test-todo-status"`
* **Status Control:** `data-testid="test-todo-status-control"`
* **Completion Toggle:** `data-testid="test-todo-complete-toggle"`
* **Edit Button:** `data-testid="test-todo-edit-button"`
* **Delete Button:** `data-testid="test-todo-delete-button"`
* **Edit Form:** `data-testid="test-todo-edit-form"`
* **Edit Title Input:** `data-testid="test-todo-edit-title-input"`
* **Edit Description Input:** `data-testid="test-todo-edit-description-input"`
* **Edit Priority Select:** `data-testid="test-todo-edit-priority-select"`
* **Edit Due Date Input:** `data-testid="test-todo-edit-due-date-input"`
* **Save Button:** `data-testid="test-todo-save-button"`
* **Cancel Button:** `data-testid="test-todo-cancel-button"`



