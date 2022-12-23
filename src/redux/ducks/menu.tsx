import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  add_menu: ["menu"],
  edit_menu_filters: ["menu_search"],
  edit_menus_active: ["keys"],
  edit_menu_is_open: ["open"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  menus: [],
  menus_filter: [],
  menus_active: [],
  menu_is_open: true,
};

const add_menu = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    ...state,
    menu: action?.menu,
  });

const edit_menu_filters = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    ...state,
    construction: action?.construction,
  });
const edit_menus_active = (state: any = INITIAL_STATE, action: any) => {
  console.log("🚀 ~ file: construction.tsx ~ line 42 ~ action", action);
  if (action.construction) {
    state = {
      ...state,
      filters: { ...state.filters, construction: action.construction },
    };
  }
  state = {
    ...state,
    filters: { ...state.filters, search: action.search },
  };
  return state;
};
const edit_menu_is_open = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    construction: null,
  });

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_MENU]: add_menu,
  [Types.EDIT_MENU_FILTERS]: edit_menu_filters,
  [Types.EDIT_MENUS_ACTIVE]: edit_menus_active,
  [Types.EDIT_MENU_IS_OPEN]: edit_menu_is_open,
});
