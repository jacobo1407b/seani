const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
var cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const cookieparser = cookieParser();

app.prepare().then(() => {
  createServer(async (req, res) => {
    function runMiddleware(req, res, fn) {
        return new Promise((resolve, reject) => {
          fn(req, res, (result) => {
            if (result instanceof Error) {
              return reject(result)
            }
      
            return resolve(result)
          })
        })
      }
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    await runMiddleware(req, res, cookieparser)

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})