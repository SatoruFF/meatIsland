require('dotenv').config();
const BUCKET = process.env.YANDEX_CLOUD_BUCKET;
const BUCKET_URL = `https://${BUCKET}.storage.yandexcloud.net`;

module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', BUCKET_URL],
          'media-src': ["'self'", 'data:', 'blob:', BUCKET_URL],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];