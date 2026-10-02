/**
 * Developer Services Pricing Card Deck
 * Lightweight Vanilla JavaScript Interactions
 * Zero external runtime dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // 1. Billing Cycle Toggle (Monthly vs. Annual -20%)
    // -------------------------------------------------------------------------
    const billingToggle = document.getElementById('billing-toggle');
    const optionMonthly = document.getElementById('option-monthly');
    const optionAnnual = document.getElementById('option-annual');
    const amountElements = document.querySelectorAll('.card__pricing .amount');
    const periodElements = document.querySelectorAll('.card__pricing .period');
    const annualNotes = document.querySelectorAll('.annual-note');

    const pricingData = {
        monthly: [
            { amount: '29', period: '/month', note: '' },
            { amount: '79', period: '/month', note: '' },
            { amount: '199', period: '/month', note: '' }
        ],
        annual: [
            { amount: '23', period: '/month', note: 'Billed $276/yr' },
            { amount: '63', period: '/month', note: 'Billed $756/yr' },
            { amount: '159', period: '/month', note: 'Billed $1,908/yr' }
        ]
    };

    function updatePricing(isAnnual) {
        const cycle = isAnnual ? 'annual' : 'monthly';
        const data = pricingData[cycle];

        amountElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-6px)';

            setTimeout(() => {
                el.textContent = data[index].amount;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 150);
        });

        periodElements.forEach((el, index) => {
            el.textContent = data[index].period;
        });

        annualNotes.forEach((el, index) => {
            el.textContent = data[index].note;
            el.style.display = isAnnual ? 'inline-block' : 'none';
        });

        if (isAnnual) {
            optionAnnual.classList.add('active');
            optionMonthly.classList.remove('active');
        } else {
            optionMonthly.classList.add('active');
            optionAnnual.classList.remove('active');
        }
    }

    if (billingToggle) {
        billingToggle.addEventListener('change', (e) => {
            updatePricing(e.target.checked);
        });

        if (optionMonthly) {
            optionMonthly.addEventListener('click', () => {
                if (billingToggle.checked) {
                    billingToggle.checked = false;
                    updatePricing(false);
                }
            });
        }

        if (optionAnnual) {
            optionAnnual.addEventListener('click', () => {
                if (!billingToggle.checked) {
                    billingToggle.checked = true;
                    updatePricing(true);
                }
            });
        }
    }

    // -------------------------------------------------------------------------
    // 2. Mobile Navigation Drawer Toggle
    // -------------------------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('open');
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.className = !isExpanded ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }

    // -------------------------------------------------------------------------
    // 3. Interactive Plan Selection Feedback (Toast Notification)
    // -------------------------------------------------------------------------
    const toast = document.getElementById('plan-toast');
    const toastTitle = document.getElementById('toast-plan-name');
    const toastDesc = document.getElementById('toast-plan-desc');
    const toastClose = document.getElementById('toast-close');
    let toastTimeout = null;

    function showToast(tierName, details) {
        if (!toast) return;

        if (toastTitle) toastTitle.textContent = `${tierName} Plan Selected`;
        if (toastDesc) toastDesc.textContent = details;

        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }

    if (toastClose) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
        });
    }

    // Attach CTA button listeners
    const planButtons = document.querySelectorAll('.pricing-card-deck .card__footer .btn');
    planButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.card');
            const title = card ? card.querySelector('.card__title').textContent.trim() : 'Custom';
            const isAnnual = billingToggle ? billingToggle.checked : false;
            const cycleText = isAnnual ? 'Annual billing (20% off applied)' : 'Monthly billing';
            showToast(title, `${cycleText}. Your deployment sandbox is being prepared.`);
        });
    });

    // -------------------------------------------------------------------------
    // 4. Global Keyboard Accessibility
    // -------------------------------------------------------------------------
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mobileNav && mobileNav.classList.contains('open')) {
                mobileNav.classList.remove('open');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const icon = menuToggle.querySelector('i');
                    if (icon) icon.className = 'fa-solid fa-bars';
                }
            }
            if (toast && toast.classList.contains('show')) {
                toast.classList.remove('show');
            }
        }
    });
});
