import utils from "./serviceUtils";

const { apiUrls, proccessReq } = utils;

const allProcurement = "/kitchen/procurement/me";
const procurement = "/kitchen/procurement";
const ProcurementService = {};

ProcurementService.procurements = async () => {
  const getProcurements = await proccessReq(allProcurement, "GET");
  return getProcurements;
};

ProcurementService.singleProcurement = async (id) => {
  const getProcurement = await proccessReq(`${procurement}/${id}`, "GET");
  return getProcurement;
};

ProcurementService.createProcurement = async (body) => {
  const createProcurement = await proccessReq(allProcurement, "POST", body);
  return createProcurement;
};

ProcurementService.updateInventory = async (id, body) => {
  const updateInventory = await proccessReq(
    `${allProcurement}/${id}`,
    "PATCH",
    body
  );
  return updateInventory;
};
export default ProcurementService;
