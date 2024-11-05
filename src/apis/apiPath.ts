const BASE_URL = '/api';

export const APIPath = {
  postNotice: `${BASE_URL}/recruitments`,
  allApplication: `${BASE_URL}/application/all`,
  signEmployeeContract: `${BASE_URL}/contract/employee`,
  makeContract: `${BASE_URL}/contract`,
  getContract: `${BASE_URL}/contract/:applyId`,
  downloadContract: `${BASE_URL}/contract/:applyId/download`,
  registerSign: '/api/sign',
  getMyCompanies: `${BASE_URL}/company`,
  getMyRecruitments: `${BASE_URL}/recruitments/company/:companyId`,
  getMyApplicants: `${BASE_URL}/application/:recruitmentId`,
  getForeigner: `${BASE_URL}/visa/:userId`,
  registerVisa: `${BASE_URL}/visa`,
  registerCompany: `${BASE_URL}/company`,
  apply: '/api/application/',
  recruitmentsDetail: '/api/recruitments/:postId',
};

export const getDynamicAPIPath = {
  downloadContract: (applyId: number) => APIPath.downloadContract.replace(':applyId', applyId.toString()),
  getContract: (applyId: number) => APIPath.getContract.replace(':applyId', applyId.toString()),
  getMyRecruitments: (companyId: number) => APIPath.getMyRecruitments.replace(':companyId', companyId.toString()),
  getMyApplicants: (recruitmentId: number) =>
    APIPath.getMyApplicants.replace(':recruitmentId', recruitmentId.toString()),
  getForeigner: (userId: number) => APIPath.getForeigner.replace(':userId', userId.toString()),
  recruitmentsDetail: (postId: string) => APIPath.recruitmentsDetail.replace(':postId', postId.toString()),
};
