export const APIPath = {
  postNotice: '/api/recruitments',
  allApplication: '/api/application/all',
  signEmployeeContract: '/api/contract',
  makeEmployerContract: '/api/categories',
  downloadContract: '/api/contract/:applyId/download',
};

export const getDynamicAPIPath = {
  downloadContract: (applyId: number) => APIPath.downloadContract.replace(':applyId', applyId.toString()),
};
