// state
export const state = () => ({
  modalStatus: false,
});

// actions
export const actions = {};

// mutaions
export const mutations = {
  modalOn(state: any) {
    state.modalStatus = true;
  },
};

// getters
export const getters = {
  getDeleteModalStatus(state: any) {
    return state.modalStatus;
  },
};
