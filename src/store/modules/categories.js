const getters = {
  categories: state => state.categories
}

const state = {
  categories: [
    { id: 1, name: 'Oeufs & Laitages' },
    { id: 2, name: 'Fruits & Légumes' },
    { id: 3, name: 'Poissons & Fruits de mer' },
    { id: 4, name: 'Condiments' },
    { id: 5, name: 'Boissons' },
    { id: 6, name: 'Charcuterie' },
    { id: 7, name: 'Desserts' },
    { id: 8, name: 'Féculents' },
    { id: 9, name: 'Divers' },
    { id: 10, name: 'Viandes' },
    { id: 11, name: 'Plats cuisinés' },
    { id: 12, name: 'Plantes' }
  ]
}

export default {
  state,
  getters
}
