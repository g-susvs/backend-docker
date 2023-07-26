const CONFIG = {
  service: {
    port: process.env.PORT || 3000,
  },
  msUser: {
    port: process.env.PORT_USER || 3001,
  },
  msProduct: {
    port: process.env.PORT_PRODUCT || 3002,
  },
  msCategory: {
    port: process.env.PORT_CATEGORY || 3003,
  },
};

module.exports = CONFIG;
