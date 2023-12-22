/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.etapainfantil.com'],
    },
    // Habilitar el servidor personalizado
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  publicRuntimeConfig: {
    // Configuración pública (si es necesario)
  },
}

module.exports = nextConfig
