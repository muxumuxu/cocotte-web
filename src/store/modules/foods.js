const getters = {
  foods: state => state.foods
}

const state = {
  foods: [
    { name: 'Jus de fruit', status: 'authorized', category_id: 5 },
    { name: 'Café', status: 'avoid', category_id: 5 },
    { name: 'Bière', status: 'forbidden', category_id: 5 }
  ]
}

export default {
  state,
  getters
}
