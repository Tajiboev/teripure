import { createStore, action, computed, persist } from "easy-peasy";

const store = createStore(persist({
    addToBag: action((state, payload)=>{
      state.itemsInBag += payload
    }),
    price: 135000,
    itemsInBag: 0,
    totalAmount: computed(state => state.price * state.itemsInBag),
    displayLanguage: "ru",
    changeLanguage: action((state) => {
      if(state.displayLanguage === 'ru') {
        state.displayLanguage = "uz"
      } else {
        state.displayLanguage = "ru"
      }
    }),
    bagOpen: false,
    toggleBag: action((state)=>{
      state.bagOpen = !state.bagOpen
    }),
    incrementBag: action((state)=>{
      state.itemsInBag++
    }),
    decrementBag: action((state)=>{
      if(state.itemsInBag !== 0) state.itemsInBag--
    }),
    clearBag: action((state)=>{
      if(state.itemsInBag !== 0) state.itemsInBag = 0
    }),
  }, {
    storage: localStorage
  }));

export default store