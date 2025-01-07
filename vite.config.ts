import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: true, // 모든 네트워크 인터페이스에서 접근 가능하도록 설정
    port: 5173, // 기본 포트 설정 (선택사항)
  },
});
