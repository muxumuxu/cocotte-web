const getters = {
  categories: state => state.categories
}

const state = {
  categories: [
    { name: 'Oeufs & Laitages' },
    { name: 'Fruits & Légumes' },
    { name: 'Poissons & Fruits de mer' },
    { name: 'Condiments' },
    { name: 'Boissons' },
    { name: 'Charcuterie' },
    { name: 'Desserts' },
    { name: 'Féculents' },
    { name: 'Divers' },
    { name: 'Viandes' },
    { name: 'Plats cuisinés' },
    { name: 'Plantes' }
  ]
}

export default {
  state,
  getters
}
