const getters = {
  foods: state => state.foods
}

const state = {
  foods: [
    { name: 'Biche', status: 'authorized', category_id: 4 },
    { name: 'Bière', status: 'forbidden', category_id: 5 }
  ]
}

export default {
  state,
  getters
}
