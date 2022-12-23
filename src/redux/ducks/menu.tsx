import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  add_menu: ["menu"],
  menu_search: ["menu_searched"],
  edit_menu_active: ["key"],
  edit_menu_is_open: ["open"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  menus: [],
  menus_filter: [],
  menus_active: [1, 2],
  menu_is_open: true,
};

const add_menu = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    ...state,
    menus: action?.menu,
  });

const edit_menu_filters = (state: any = INITIAL_STATE, action: any) => {
  state = {
    ...state,
    menus_filter: state?.menus.filter((menu: any) => {
      if (action?.menu_searched.length === 0) return menu;

      if (
        menu?.title.toLowerCase().search(action?.menu_searched.toLowerCase()) >=
        0
      )
        return menu;
    }),
  };

  return state;
};

const edit_menus_active = (state: any = INITIAL_STATE, action: any) => {
  let menus_active = state.menus_active;
  console.log("##### -> state.menus_active", state.menus_active);
  const key_menu_selected = action.key;
  let isActiveIndex = -1;

  menus_active.map((key: any, index: any) => {
    if (key === key_menu_selected) isActiveIndex = index;
  });

  if (isActiveIndex >= 0) {
    console.log("CAIU NO IF MENU ACTIVE isActiveIndex", isActiveIndex);
    menus_active.splice(isActiveIndex);
  } else {
    menus_active.push(key_menu_selected);
  }
  console.log("##### -> menus_active", menus_active);

  state = {
    ...state,
    menus_active: menus_active,
  };
  return state;
};

const edit_menu_is_open = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    menu_is_open: action.open,
  });

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_MENU]: add_menu,
  [Types.MENU_SEARCH]: edit_menu_filters,
  [Types.EDIT_MENU_ACTIVE]: edit_menus_active,
  [Types.EDIT_MENU_IS_OPEN]: edit_menu_is_open,
});
