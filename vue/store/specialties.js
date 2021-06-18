import {getSpecialty, getSpecialties} from "../services/specialties.js";

const mutations = {
  setSpecialties(state, specialties){
    state.specialties = specialties
  },
  setSpecialty(state, specialty){
    state.specialty = specialty
  },
  setError(state, error){
    state.specialtyError = error
  }
}

const state = () => ({
  specialties: [],
  specialty: {},
  specialtyError: null
})


const actions = {
  async fetchSpecialties({ commit }) {
    try {
      const specialties = await getSpecialties()
      commit('setSpecialties', specialties)
    } catch (err) {
      commit('setSpecialtiesError', err)
    }
  },
  async fetchSpecialty({ commit }, id ) {
    try {
      const specialty = await getSpecialty(id)
      commit('setSpecialty', specialty)
    } catch (err) {
      commit('setSpecialtyError', err)
    }
  }
}

const getters = {
  specialties: ({ specialties }) => specialties,
  specialty: ({ specialty }) => specialty,
  specialtyError: ({ specialtyError }) => specialtyError,
}

export default {
  mutations,
  getters,
  actions,
  state
}

//action вызовет мутацию
// она изменит состояние
// getter заберет мутацию
