const css = require('sheetify')
const html = require('choo/html')
const choo = require('choo')

css('tachyons')
css('./styles/icons.css')
css('./styles/sticky.css')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

const Fiche = require('./components/fiche')

const layout = view => {
  return (state, emit) => {
    return html`
      <div id="app">
        <main class="flex flex-column flex-row-l">
          <section id="content" class="bg-white black flex flex-column flex-auto">
            ${view(state, emit)}
          </section>
          <aside class="bg-black white pa3">
            ${state.cache(Fiche, 'fiche').render({
              nickname: '@auggod',
              name: 'Augustin Godiscal',
              title: 'Freelance Software Developer',
              location: 'Brussels, BE',
              avatar: '/assets/photo.jpg'
            })}
          </aside>
        </main>
      </div>
    `
  }
}

app.route('/', layout(require('./views/main')))
app.route('/*', layout(require('./views/404')))

module.exports = app.mount('#app')
