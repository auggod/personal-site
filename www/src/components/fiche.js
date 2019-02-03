const Component = require('choo/component')
const html = require('choo/html')

class Fiche extends Component {
  constructor (id, state, emit) {
    super(id)
    this.local = state.components[id] = {}
    this.items = []
  }

  createElement (props) {
    const { nickname, name, avatar, title, location } = props
    return html`
      <div class="sticky top-0 flex flex-column items-center">
        <img src=${avatar} alt="auggod" class="br-pill mw4 pa3 grow">
        <span class="b pv2">${nickname}</span>
        <span class="pv1">${name}</span>
        <span class="pv1">${title}</span>
        <span class="pv1">${location}</span>
      </div>
    `
  }

  update () {
    return false
  }
}

module.exports = Fiche
