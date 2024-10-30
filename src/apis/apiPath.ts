const BASE_URL = '/api';

export const APIPath = {
  postNotice: '/api/recruitments',
  allApplication: '/api/application/all',
  signEmployeeContract: '/api/contract',
  makeEmployerContract: '/api/categories',
  downloadContract: '/api/contract/:applyId/download',
  registerSign: '/api/sign',
  getMyCompanies: `${BASE_URL}/company`,
  getMyRecruitments: `${BASE_URL}/recruitments/company/:companyId`,
  getMyApplicants: `${BASE_URL}/application/:recruitmentId`,
  getForeigner: `${BASE_URL}/visa/:userId`,
  setVisa: `${BASE_URL}/visa`,
  apply: '/api/application/',
  recruitmentsDetail: '/api/recruitments/:postId',
};

export const getDynamicAPIPath = {
  downloadContract: (applyId: number) => APIPath.downloadContract.replace(':applyId', applyId.toString()),
  getMyRecruitments: (companyId: number) => APIPath.getMyRecruitments.replace(':companyId', companyId.toString()),
  getMyApplicants: (recruitmentId: number) =>
    APIPath.getMyApplicants.replace(':recruitmentId', recruitmentId.toString()),
  getForeigner: (userId: number) => APIPath.getForeigner.replace(':userId', userId.toString()),
  recruitmentsDetail: (postId: string) => APIPath.recruitmentsDetail.replace(':postId', postId.toString()),
};
