
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_ORDEN:
      console.log("ORDEN")  
    console.log(action)
      console.log(state)
      return handleChangeOrden(action.typeOrden, state);
    case "FILTER":
      return handleChangeFilter(action.id, action.value, state);
    case "SEARCH":
      return handleChangeSearch(action.textSearch, state);
    case "PAGE":
      return handleChangePage(action.num, state);
    default:
      return state;
  }
};

const handleChangeOrden = (typeOrden, productos) => {
  if (typeOrden == 'mas_baratos') {
    productos.sort(function (a, b) { return a.cost - b.cost });
  }
  if (typeOrden == 'mas_caros') {
    productos.sort(function (a, b) { return b.cost - a.cost });
  }
  return handleChangePage(1, productos)
};

const handleChangeFilter = (id, value, productos) => {
  console.log(id, value,)
  return handleChangePage(1, productos)
};

const handleChangeSearch = (textSearch, productos) => {
  return handleChangePage(1, productos)
};

const handleChangePage = (num, list) => {
  
  let productAll = list;
  let fin = num * CANT_ITEM_PANT
  let inicio = fin - CANT_ITEM_PANT
  let productRest = productAll.slice(inicio, fin)
  console.log('handleChangePage')
  console.log(productRest)
  return productRest
}

export const CANT_ITEM_PANT = 16;

export const ACTION_ORDEN = 'ORDEN'
export const ACTION_FILTER = 'FILTER'
export const ACTION_SEARCH = 'SEARCH'
export const ACTION_PAGE = 'PAGE'