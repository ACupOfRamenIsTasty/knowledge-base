module.exports = {
  apps: [
    {
      name: "knowledge-base",
      script: "server.js",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};