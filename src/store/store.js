import { createStore, action, computed, persist } from "easy-peasy";

const store = createStore(persist({
    isAuthenticated: false,
    authenticate: action((state)=>{
      state.isAuthenticated = true
    }),
    token: '',
    setToken: action((state, payload)=>{
      state.token = payload
    }),
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
    }),
    addToBag: action((state, payload) => {
      console.log("payload: ", payload)
      state.itemsInBag = state.itemsInBag + payload
    })
  }, {
    storage: localStorage
  }));

export default store