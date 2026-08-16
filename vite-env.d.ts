/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

// optional type env variables for IntelliSense support
interface ImportMetaEnv {
    readonly VITE_TKM_BACKEND: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
