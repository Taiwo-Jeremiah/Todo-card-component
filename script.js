
document.addEventListener('DOMContentLoaded', () => {
    // State Objects
    let taskData = {
        title: "Stage 0 Frontend",
        description: "Build a clean, high-fidelity task card using vanilla HTML, CSS, and JS.",
        priority: "High",
        deadline: "2026-04-16T23:59:00",
        status: "Pending"
    };

    // Selectors
    const card = document.querySelector('.todo-card');
    const viewContainer = document.getElementById('view-container');
    const editForm = document.getElementById('edit-form');
    const statusSelect = document.querySelector('[data-testid="test-todo-status-control"]');
    const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
    const timeDisplay = document.querySelector('[data-testid="test-todo-time-remaining"]');
    const overdueTag = document.getElementById('overdue-tag');

    // --- 1. Expand / Collapse Logic ---
    const expandBtn = document.getElementById('expand-btn');
    const descContainer = document.getElementById('desc-container');

    expandBtn.addEventListener('click', () => {
        const isExpanded = descContainer.classList.toggle('expanded');
        expandBtn.innerText = isExpanded ? "Show Less" : "Read More";
        expandBtn.setAttribute('aria-expanded', isExpanded);
    });

    // --- 2. Time Logic (Granular Updates) ---
    function updateCountdown() {
        if (taskData.status === "Done") {
            timeDisplay.innerText = "Completed";
            overdueTag.style.display = "none";
            return;
        }

        const now = new Date();
        const diff = new Date(taskData.deadline) - now;

        if (diff <= 0) {
            const overdueMs = Math.abs(diff);
            const hours = Math.floor(overdueMs / (1000 * 60 * 60));
            timeDisplay.innerText = `Overdue by ${hours} hour${hours !== 1 ? 's' : ''}`;
            timeDisplay.style.color = "var(--danger)";
            overdueTag.style.display = "inline";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);

        if (days > 0) timeDisplay.innerText = `Due in ${days} day${days > 1 ? 's' : ''}`;
        else if (hours > 0) timeDisplay.innerText = `Due in ${hours} hour${hours > 1 ? 's' : ''}`;
        else timeDisplay.innerText = `Due in ${mins} minute${mins > 1 ? 's' : ''}`;
        
        overdueTag.style.display = "none";
        timeDisplay.style.color = "var(--text-main)";
    }

    // --- 3. Status Sync Logic ---
    function syncStatus(newStatus) {
        taskData.status = newStatus;
        statusSelect.value = newStatus;
        document.querySelector('[data-testid="test-todo-status"]').innerText = newStatus;

        // Checkbox sync
        checkbox.checked = (newStatus === "Done");

        // Visual Class Sync
        card.classList.remove('status-done', 'status-in-progress');
        if (newStatus === "Done") card.classList.add('status-done');
        if (newStatus === "In Progress") card.classList.add('status-in-progress');
        
        updateCountdown();
    }

    checkbox.addEventListener('change', () => syncStatus(checkbox.checked ? "Done" : "Pending"));
    statusSelect.addEventListener('change', (e) => syncStatus(e.target.value));

    // --- 4. Edit Mode Logic ---
    const editBtn = document.getElementById('edit-trigger');
    const saveBtn = document.querySelector('.save-btn');
    const cancelBtn = document.querySelector('.cancel-btn');

    editBtn.addEventListener('click', () => {
        // Fill form with current data
        document.getElementById('edit-title').value = taskData.title;
        document.getElementById('edit-desc').value = taskData.description;
        document.getElementById('edit-priority').value = taskData.priority;
        document.getElementById('edit-date').value = taskData.deadline.substring(0, 16);

        viewContainer.style.display = 'none';
        editForm.style.display = 'flex';
        document.getElementById('edit-title').focus();
    });

    saveBtn.addEventListener('click', () => {
        taskData.title = document.getElementById('edit-title').value;
        taskData.description = document.getElementById('edit-desc').value;
        taskData.priority = document.getElementById('edit-priority').value;
        taskData.deadline = document.getElementById('edit-date').value;

        // Update View
        document.querySelector('[data-testid="test-todo-title"]').innerText = taskData.title;
        document.querySelector('[data-testid="test-todo-description"]').innerText = taskData.description;
        document.querySelector('[data-testid="test-todo-priority"]').innerText = taskData.priority;

        editForm.style.display = 'none';
        viewContainer.style.display = 'block';
        editBtn.focus();
        updateCountdown();
    });

    cancelBtn.addEventListener('click', () => {
        editForm.style.display = 'none';
        viewContainer.style.display = 'block';
        editBtn.focus();
    });

    // --- Init ---
    setInterval(updateCountdown, 30000);
    updateCountdown();
});