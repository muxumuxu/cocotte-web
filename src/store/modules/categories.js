const getters = {
  categories: state => state.categories
}

const state = {
  categories: [
    { name: 'Oeufs & Laitages' },
    { name: 'Fruits & Légumes' },
    { name: 'Poissons & Fruits de mer' },
    { name: 'Condiment' },
    { name: 'Drink' },
    { name: 'Deli' },
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
