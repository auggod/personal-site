const css = require('sheetify')
const html = require('choo/html')
const choo = require('choo')

css('tachyons')
css('./styles/icons.css')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

const layout = view => {
  return (state, emit) => {
    return html`
      <div id="app">
        <main>
          ${view(state, emit)}
        </main>
      </div>
    `
  }
}

app.route('/', layout(require('./views/main')))
app.route('/*', layout(require('./views/404')))

module.exports = app.mount('#app')
