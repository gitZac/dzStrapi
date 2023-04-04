module.exports = {
  menus: {
    config: {
      layouts: {
        menu: { // This is the menu item edit panel.
          input: {
            label: 'Example Field Label',
            name: 'example_field',
            type: 'text',
            description: 'Example field description',
            placeholder: 'Type something...'
          }
        },
      },
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 20, // Default is 5
    }
  },
};