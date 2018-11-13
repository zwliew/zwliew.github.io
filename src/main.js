import q from './query.js';
import { ROUTES } from './router.js';
import eventBus, { EVENTS } from './eventBus.js';
import { curTheme, THEMES } from './theme.js';

function navigate(route) {
  eventBus.post(EVENTS.navigate, { route });
}

// Home
q('.home-social').click(ev => open(ev.target.dataset.href));
q('#home-nav-notes').click(() => navigate(ROUTES.notes));
q('#home-nav-projects').click(() => navigate(ROUTES.projects));
q('#home-nav-about').click(() => navigate(ROUTES.about));
