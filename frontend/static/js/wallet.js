document.addEventListener('DOMContentLoaded', () => {
    const topUpForm = document.querySelector('[data-validate-topup]');

    if (topUpForm) {
        topUpForm.addEventListener('submit', (event) => {
            const amount = Number(topUpForm.amount.value);

            if (!Number.isFinite(amount) || amount <= 0) {
                event.preventDefault();
                alert('Please enter a top-up amount more than 0.');
            }
        });
    }

    document.querySelectorAll('[data-confirm-purchase]').forEach((button) => {
        button.addEventListener('click', (event) => {
            const passName = event.currentTarget.getAttribute('data-confirm-purchase');

            if (!confirm(`Confirm purchase of ${passName}?`)) {
                event.preventDefault();
            }
        });
    });
});
