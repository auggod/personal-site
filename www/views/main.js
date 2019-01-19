const html = require('choo/html')

const TITLE = 'Augustin Godiscal'
const Links = require('../components/links')

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <section id="lists" class="flex flex-column ma4">
      <section id="projects">
        <h2>Projects</h2>
        ${state.cache(Links, 'projects').render({
          items: [
            {
              href: 'https://github.com/zerowastemap',
              iconName: 'zerowastemap',
              text: 'Zero Waste Map'
            }
          ]
        })}
      </section>
      <section id="contact">
        <h2>Contact</h2>
        ${state.cache(Links, 'contact').render({
          items: [
            {
              href: 'https://keybase.io/auggod',
              iconName: 'keybase',
              text: 'Keybase'
            },
            {
              href: 'https://mamot.fr/@auggod',
              iconName: 'mamot',
              text: '@auggod@mamot.fr'
            }
          ]
        })}
      </section>
      <section id="contact">
        <h2>Fund me</h2>
        ${state.cache(Links, 'fund').render({
          items: [
            {
              href: 'https://liberapay.com/auggod',
              iconName: 'liberapay',
              text: 'Liberapay'
            }
          ]
        })}
      </section>
      <section id="coop">
        <h2>Cooperativism</h2>
        ${state.cache(Links, 'coop').render({
          items: [
            {
              href: 'https://resonate.is',
              iconName: 'resonate',
              text: 'Resonate Coop'
            },
            {
              href: 'https://smartbe.be',
              iconName: 'smartbe',
              text: 'SMartBE'
            }
          ]
        })}
      </section>
    </section>
  `
}
