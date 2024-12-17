import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
    alias :{
      Components : "/src/Components",
      Pages : "/src/Pages",
      Assets : "/src/Assets",
      Configs : "/src/Configs",
      Helpers : "/src/Helpers",
      Layout : "/src/Layouts",
      Redux : "/src/Redux",
      Routes : "/src/Routes",
    }
  }
})
