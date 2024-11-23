module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Usa babel-jest para transformar arquivos JS/TS
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$", // Transforma módulos como axios
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Ignora arquivos CSS
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Configuração adicional, se necessário
};
