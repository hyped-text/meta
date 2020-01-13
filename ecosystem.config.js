module.exports = {
  apps: [
    {
      name: 'katalogoc/meta',
      script: 'dist/run.js',
      mode: 'cluster',
      instances: 'max',
      autorestart: true,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
