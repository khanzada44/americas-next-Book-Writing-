// Stylesheets and scripts of the main site, in the same order as inc/head.php + inc/footer.php + inc/chat.php.
// Files under /assets/legacy/ are the old inline <style> and <script> blocks.
// custom.js, the lozad script and the phone script are now in /assets/js/page-init.js,
// which runs again after every page change (<Link>).
export const siteAssets = {
  styles: [
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css',
    '/assets/css/vendor.css',
    '/assets/css/style.css',
    '/assets/legacy/site-1.css',
  ],
  scripts: [
    '/assets/legacy/site-1.js',
    '/assets/js/jquery-3.7.0.min.js',
    '/assets/js/plugin.js',
    '/assets/js/lozad.min.js',
    'https://kit.fontawesome.com/f108d2f22a.js',
    '/assets/js/site-chat.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.js',
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js',
    '/assets/js/page-init.js',
  ],
};
