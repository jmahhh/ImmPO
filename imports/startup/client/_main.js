// ***************************************************************
// Bundle for client modules
// ***************************************************************

// Main modules
import './router/index.js';
import './accounts.js';
import './subscriptions.js';

// Main templates
import '/imports/ui/layouts/layout.js';
import '/imports/ui/shared/error-404/error-404.js';
import '/imports/ui/shared/footer/footer.js';
import '/imports/ui/shared/header/header.js';
import '/imports/ui/shared/empty-result/empty-result.js';
import '/imports/ui/shared/loader/loader.js';

// Blaze helpers
import '/imports/ui/helpers/handlebars-helpers.js';
import '/imports/ui/helpers/handlebars-lists.js';

// Notifications
import './bert.js';