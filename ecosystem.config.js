module.exports = {
  apps: [
    {
      name: "server",
      script: "api/index.js",
      watch: true,
    },
    {
      name: "servicio-user",
      script: "ms_user/index.js",
      watch: true,
    },
    {
      name: "base-de-datos",
      script: "ms_product/index.js",
      watch: true,
    },
    {
      name: "servicio-category",
      script: "ms_category/index.js",
      watch: true,
    },
  ],
};
