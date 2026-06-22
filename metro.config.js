const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

// Ignore web-only files during native bundling
config.resolver.blacklistRE = /web-only|\.web\.(@.*)?\.(js|jsx|ts|tsx)$/

module.exports = config
