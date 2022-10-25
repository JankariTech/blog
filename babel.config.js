const plugins = []

if (process.env.NODE_ENV === "dev") {
  console.debug("Babel is running in development mode.")
  plugins.push("istanbul")
}

module.exports = {
  plugins
}
