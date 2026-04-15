/**
 * Project: Testable Todo Item Card
 * Logic: Handles dynamic time updates and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuration
    const deadlineDefault = "2026-04-16T23:59:00"; // Based on your project brief
    const timeRemainingElement = document.querySelector('[data-testid="test-todo-time-remaining"]');
    const statusText = document.querySelector('[data-testid="test-todo-status"]');
    const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
// deadlineDefault
    //  Updates the "Time Remaining" display based on the current time.
     
    function updateCountdown() {
        const deadline = new Date(deadlineDefault);
        const now = new Date();
        const diffInMs = deadline - now;

        if (diffInMs <= 0) {
            timeRemainingElement.innerText = "Overdue";
            timeRemainingElement.style.color = "var(--danger)";
            return;
        }

        const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);

        // Formatting based on the brief's requirements (e.g., "Due in 3 days")
        if (days > 0) {
            timeRemainingElement.innerText = `Due in ${days} day${days > 1 ? 's' : ''}`;
        } else if (hours > 0) {
            timeRemainingElement.innerText = `Due in ${hours} hour${hours > 1 ? 's' : ''}`;
        } else {
            timeRemainingElement.innerText = `Due in ${minutes} minute${minutes > 1 ? 's' : ''}`;
        }
    }

    // Handles the status toggle logic
    
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            statusText.innerText = "Completed";
            statusText.style.color = "var(--success)";
            document.querySelector('.todo-card').style.opacity = "0.8";
        } else {
            statusText.innerText = "Pending";
            statusText.style.color = "var(--text-main)";
            document.querySelector('.todo-card').style.opacity = "1";
        }
    });


    // Button Click Handlers (For interactivity points)
     
    document.querySelector('[data-testid="test-todo-edit-button"]').addEventListener('click', () => {
        alert("Edit mode triggered!");
    });

    document.querySelector('[data-testid="test-todo-delete-button"]').addEventListener('click', () => {
        if(confirm("Are you sure you want to delete this task?")) {
            // document.querySelector('.todo-card').remove();
        }
    });

    // Initial runs
    updateCountdown();

    // 2. Update every 60 seconds as requested
    setInterval(updateCountdown, 60000);
});