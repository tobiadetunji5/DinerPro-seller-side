import utils from "./serviceUtils";

const { apiUrls, proccessReq } = utils;

const allMenu = "/menu/me";
const menu = "/menu";
const MenuService = {};

MenuService.menus = async () => {
  const getMenu = await proccessReq(allMenu, "GET");
  return getMenu;
};

MenuService.singleItem = async (id) => {
  const getItem = await proccessReq(`${menu}/${id}`, "GET");
  return getItem;
};

MenuService.createMenu = async (body) => {
  const createMenu = await proccessReq(menu, "POST", body);
  return createMenu;
};

MenuService.updateMenu = async (id, body) => {
  const updateMenu = await proccessReq(`${allMenu}/${id}`, "PATCH", body);
  return updateMenu;
};

export default MenuService;
