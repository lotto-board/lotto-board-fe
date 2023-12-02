/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NAVER_MAP_CLIENT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
