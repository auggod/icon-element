var html = require('bel')
var assert = require('assert')

module.exports = iconElement

function iconElement (iconName, opts) {
  opts = opts || {}

  assert.equal(typeof iconName, 'string', 'elements/icon: iconName should be type string')
  assert.equal(typeof opts, 'object', 'elements/icon: opts should be type object')

  var classNames = 'icon-' + iconName
  if (opts.class) classNames += (' ' + opts.class)

  return html`
    <svg viewBox="0 0 16 16" class=${classNames}>
      <use xlink:href="#icon-${iconName}" />
    </svg>
  `
}
