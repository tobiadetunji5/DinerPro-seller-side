import utils from "./serviceUtils";

const { apiUrls, proccessReq } = utils;

const allInventorories = "/products";
const InventoryService = {};

InventoryService.inventories = async () => {
  const getInventories = await proccessReq(allInventorories, "GET");
  return getInventories;
};

InventoryService.createInventory = async (body) => {
  const createInventory = await proccessReq(allInventorories, "POST", body);
  return createInventory;
};

InventoryService.updateInventory = async (id, body) => {
  const updateInventory = await proccessReq(
    `${allInventorories}/${id}`,
    "PATCH",
    body
  );
  return updateInventory;
};
export default InventoryService;
