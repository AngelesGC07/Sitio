    document.querySelectorAll('.lugar').forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    }