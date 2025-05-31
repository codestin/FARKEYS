// Navigation selectors
const selectors = {
  home: '[href="/"]',
  notifications: '[href="/notifications"]',
  directCasts: '[href="/direct-casts"]',
  explore: '[href="/explore"]',
  invites: '[href="/invites"]',
  bookmarks: '[href="/bookmarks"]',
  starterPacks: '[href="/starter-packs"]',
  miniApps: '[href="/mini-apps"]',
  warps: '[href="/warps"]',
  developers: '[href="/developers"]',
  profile: '[href="/profile"]',
  cast: '[data-testid="cast-button"]'
};

// Helper function to click an element
function clickElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.click();
  }
}

// Helper function to show visual feedback
function showFeedback(message) {
  const feedback = document.createElement('div');
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    z-index: 9999;
    font-family: system-ui, -apple-system, sans-serif;
  `;
  feedback.textContent = message;
  document.body.appendChild(feedback);
  setTimeout(() => feedback.remove(), 1000);
}

function getLinkByLabel(label) {
  const elements = Array.from(document.querySelectorAll('div, span, a, li, button'));
  const target = elements.find(
    el => el.textContent && el.textContent.trim() === label
  );
  if (target) {
    const link = target.closest('a');
    if (link && link.href) {
      return link.href;
    }
  }
  return null;
}

function navigateTo(label, fallbackPath) {
  const link = getLinkByLabel(label);
  if (link) {
    window.location.assign(link);
    showFeedback(label);
    return;
  }
  if (fallbackPath) {
    window.location.assign(fallbackPath);
    showFeedback(label + ' (fallback)');
    return;
  }
  showFeedback('Could not find link for ' + label);
}

function getProfileUrl() {
  // Find all elements that might contain the text "Profile"
  const elements = Array.from(document.querySelectorAll('div, span, a, li, button'));
  const profileElement = elements.find(
    el => el.textContent && el.textContent.trim() === 'Profile'
  );

  if (profileElement) {
    // Look for the closest parent link
    const link = profileElement.closest('a');
    if (link && link.href) {
      return link.href;
    }
  }

  showFeedback('Could not find profile link on this page.');
  return null;
}

// State tracking for warplet
let warpletOpen = false;

// Initialize keyboard shortcuts
function initializeShortcuts() {
  Mousetrap.bind('h', () => navigateTo('Home', '/'));
  Mousetrap.bind('o', () => navigateTo('Notifications', '/~/notifications'));
  Mousetrap.bind('d', () => navigateTo('Direct Casts', '/~/inbox'));
  Mousetrap.bind('e', () => navigateTo('Explore', '/~/explore/users'));
  Mousetrap.bind('i', () => navigateTo('Invites', '/~/invites'));
  Mousetrap.bind('b', () => navigateTo('Bookmarks', '/~/bookmarks'));
  Mousetrap.bind('s', () => navigateTo('Settings', '/~/settings'));
  Mousetrap.bind('t', () => navigateTo('Starter Packs', '/~/starter-packs'));
  Mousetrap.bind('m', () => navigateTo('Mini Apps', '/miniapps'));
  Mousetrap.bind('w', () => navigateTo('Warps', '/~/warps'));
  Mousetrap.bind('v', () => navigateTo('Developers', '/~/developers'));
  Mousetrap.bind('p', () => navigateTo('Profile'));
  Mousetrap.bind('x', () => {
    const warplet = document.querySelector("#warplet");
    if (warplet) {
      warplet.click();
      if (!warpletOpen) {
        showFeedback('Warplet opened');
        warpletOpen = true;
      } else {
        showFeedback('Warplet closed');
        warpletOpen = false;
      }
    } else {
      showFeedback('Warplet not found');
    }
  });
}

// Initialize when the page is fully loaded
if (document.readyState === 'complete') {
  initializeShortcuts();
} else {
  window.addEventListener('load', initializeShortcuts);
}
