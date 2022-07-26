import { createStore, action, computed, persist } from "easy-peasy";

const store = createStore(persist({
    price: 135000,
    itemsInBag: 0,
    totalPrice: computed(state => state.price * state.itemsInBag),
    displayLanguage: "Русский",
    changeLanguage: action((state) => {
      if(state.displayLanguage === 'Русский') {
        state.displayLanguage = "O'zbekcha"
      } else {
        state.displayLanguage = "Русский"
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
    })
  }, {
    storage: localStorage
  }));

export default store