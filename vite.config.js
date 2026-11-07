import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Offline-friendly config: no external services are used.
export default defineConfig({
  plugins: [react()],
  server: {
    open: false,
    // Polling makes sure saved edits always reach the browser, even when the
    // project is opened from a USB drive, network/shared folder, OneDrive,
    // WSL or an online editor where normal file-change events can be missed.
    watch: { usePolling: true, interval: 300 },
  },
})
