const Component = require('choo/component')
const compare = require('nanocomponent/compare')
const html = require('choo/html')
const icon = require('icon-element')

class Links extends Component {
  constructor (id, state, emit) {
    super(id)
    this.local = state.components[id] = {}
    this.items = []
  }

  createElement (props) {
    this.items = props.items

    const items = this.items
      .map(({ href, iconName, text }) => {
        return html`
          <li class="mb2">
            <a class="flex items-center black link f3 pv2 pl3 striped--near-white dim br-pill" href=${href} target="_blank" rel="noopener noreferer">
              ${icon(iconName, {'class': 'icon fill-black icon--lg'})}
              <span class="pl2">${text}</span>
            </a>
          </li>
        `
      })

    return html`
      <ul class="list flex flex-column ma0 pl0">
        ${items}
      </ul>
    `
  }

  update (props) {
    return compare(this.items, props.items)
  }
}

module.exports = Links
