const { response } = require("../app")

const tokenVerifier = (token) => {
  if (token === undefined) {
    return response.status(401).json({ error: 'token missing' })
  }
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or ivalid' })
  }
  return decodedToken
}

module.exports = { tokenVerifier }