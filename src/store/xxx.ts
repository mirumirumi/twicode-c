import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  hoge: number
}

// interface xxx {

// }

export const store = createStore<State>({
  state: {
    hoge: 0,
  },
  getters: {
    // currentPositionStr(state): string {
    //   return `${state.currentPosition["lat"].toString()} ${state.currentPosition["lng"].toString()}`;
    // },
  },
  mutations: {
    // setCurrentPosition(state, newPosition: latlng): void {
    //   state.currentPosition = newPosition;
    // },
    // setRadius(state, newRadius: number): void {
    //   state.radius = newRadius;
    // },
  },
  actions: {
  },
  modules: {
  }
})

export const key: InjectionKey<Store<State>> = Symbol();
export const useStore = () => {
  return baseUseStore(key)
}
