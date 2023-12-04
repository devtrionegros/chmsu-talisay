export const initialState = {
  users: [],
  totalUsers: 0,
  loading: true,
};

export const loadingReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, loading: true };
    case "LOADING_END":
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.users],
        totalUsers: action.totalUsers,
      };
    default:
      return state;
  }
};
