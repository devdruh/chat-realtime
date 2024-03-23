import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};

  const cherryPickedKeys = [
    "REACT_APP_SERVER_URL",
  ];

  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          // eslint-disable-next-line no-undef
          // target: process.env.REACT_APP_SERVER_URL
          target: 'https://chat-realtime-server-9h7i.onrender.com'
          // target: 'https://chat-realtime-client-prod.vercel.app'
        }
      }
    }
  }
})
