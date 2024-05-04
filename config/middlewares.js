module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     origin: [
  //       'http://localhost:4200', 
  //       'http://localhost:1338',
  //       'http://localhost:61429', 
  //     ],
  //     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  //     keepHeaderOnError: true,
  //   },
  // },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
