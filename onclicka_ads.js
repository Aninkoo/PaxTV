// onclicka_ads.js

// Ad system configuration
const AD_CONFIG = {
    SPOT_ID: '6064957', // Your spot ID
    AUTO_INIT: true      // Initialize ads on window load
};

// Ad system state
let adInitialized = false;
let showAdFunction = null;

// Initialize the ad system
function initializeAds() {
    if (typeof window.initCdTma !== 'function') {
        console.error('Ad script not loaded');
        return Promise.reject('Ad script not loaded');
    }

    return window.initCdTma({ id: AD_CONFIG.SPOT_ID })
        .then(show => {
            showAdFunction = show;
            adInitialized = true;
            console.log(`Ad system initialized successfully with Spot ID: ${AD_CONFIG.SPOT_ID}`);
        })
        .catch(error => {
            console.error('Failed to initialize ad system:', error);
            throw error;
        });
}

// Function to show ads
function showAd() {
    if (!adInitialized || !showAdFunction) {
        console.error('Ad system not initialized');
        return Promise.reject('Ad system not initialized');
    }

    return showAdFunction()
        .then(() => {
            console.log('Ad played successfully');
            return true;
        })
        .catch(error => {
            console.error('Failed to play ad:', error);
            throw error;
        });
}

// Load the ad script dynamically
function loadAdScript() {
    return new Promise((resolve, reject) => {
        if (typeof window.initCdTma !== 'undefined') {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://js.onclckvd.com/in-stream-ad-admanager/tma.js';
        script.onload = resolve;
        script.onerror = () => reject(new Error('Failed to load ad script'));
        document.head.appendChild(script);
    });
}

// Reward function
function get_reward() {
    if (window.location.hash) {
        const start = window.location.hash.substr(1);
        window.open(start, '_self');
        alert('✔️ You have been verified!');
        
        // Close Telegram WebApp if available
        if (window.Telegram && Telegram.WebApp && typeof Telegram.WebApp.close === 'function') {
            Telegram.WebApp.close();
        }
    }
}

// Main function to show ads
async function view_ads() {
    try {
        await loadAdScript();
        await initializeAds();
        const success = await showAd();
        
        if (success) {
            get_reward();
        }
    } catch (error) {
        console.error('Error in ad process:', error);
        alert('⚠️ Failed to load ad. Please try again later.');
    }
}

// DOMContentLoaded handler for UI elements
window.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        document.getElementById('Aa').style.display = 'block';
        document.getElementById('Ab').style.display = 'none';
        document.getElementById('Ac').style.display = 'none';
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.expand();
        }
    } else {
        document.getElementById('Aa').style.display = 'none';
        document.getElementById('Ab').style.display = 'none';
        document.getElementById('Ac').style.display = 'none';
        // elements disabled 
    }
});

// Initialize on window load if configured (for ad system setup)
if (AD_CONFIG.AUTO_INIT) {
    window.addEventListener('load', () => {
        console.log('Window loaded, initializing ads...');
        loadAdScript().then(initializeAds).catch(error => {
            console.error('Auto-initialization failed:', error);
        });
    });
                            }
