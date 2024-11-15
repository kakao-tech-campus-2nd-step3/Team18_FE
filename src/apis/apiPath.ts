const BASE_URL = '/api';

export const APIPath = {
  postRegister: `${BASE_URL}/register`,
  postOAuth: `${BASE_URL}/oauth`,
  postNotice: `${BASE_URL}/recruitments`,
  getSlides: `${BASE_URL}/slides`,
  getRecruitments: `${BASE_URL}/recruitments/:filter`,
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
  apply: `${BASE_URL}/application/:recruitmentId`,
  resume: `${BASE_URL}/resumes`,
  recruitmentsDetail: '/api/recruitments/:recruitmentId',
  getApplicantProfile: '/api/resumes/:resumeId/:applyId',
  closeRecruitment: `${BASE_URL}/recruitments/hiringClose/:recruitmentId`,
  requiredFieldCheck: `${BASE_URL}/application`,
};

export const getDynamicAPIPath = {
  downloadContract: (applyId: number) => APIPath.downloadContract.replace(':applyId', applyId.toString()),
  apply: (recruitmentId: number) => APIPath.apply.replace(':recruitmentId', recruitmentId.toString()),
  getContract: (applyId: number) => APIPath.getContract.replace(':applyId', applyId.toString()),
  getMyRecruitments: (companyId: number) => APIPath.getMyRecruitments.replace(':companyId', companyId.toString()),
  getMyApplicants: (recruitmentId: number) =>
    APIPath.getMyApplicants.replace(':recruitmentId', recruitmentId.toString()),
  getForeigner: (userId: number) => APIPath.getForeigner.replace(':userId', userId.toString()),
  recruitmentsDetail: (postId: number) => APIPath.recruitmentsDetail.replace(':recruitmentId', postId.toString()),
  getApplicantProfile: (resumeId: number, applyId: number) =>
    APIPath.getApplicantProfile.replace(':resumeId', resumeId.toString()).replace(':applyId', applyId.toString()),
  closeRecruitment: (recruitmentId: number) =>
    APIPath.closeRecruitment.replace(':recruitmentId', recruitmentId.toString()),
  getRecruitments: (filter: string) => APIPath.getRecruitments.replace(':filter', filter),
};
