import { useGetMyApplicants } from '@/apis/applicants/hooks/useGetMyApplicants';
import { useGetMyRecruitments } from '@/apis/recruitments/hooks/useGetMyRecruitments';
import { Spinner } from '@/components/common';
import { RecruitmentItem } from '@/types';
import { useParams } from 'react-router-dom';
import Applicants from './Applicants';

export default function ApplicantsPage() {
  const { companyId, recruitmentId } = useParams();
  const { data: recruitmentList, isLoading: isLoadingRecruitment } = useGetMyRecruitments(Number(companyId));
  const { data: applicants, isLoading: isLoadingApplicants } = useGetMyApplicants(Number(recruitmentId));

  const recruitmentData = recruitmentList?.find((r: RecruitmentItem) => r.recruitmentId.toString() === recruitmentId);
  const applicantsData = applicants;

  if (isLoadingRecruitment || isLoadingApplicants) {
    return <Spinner />;
  }

  return <Applicants recruitmentData={recruitmentData} applicantsData={applicantsData} />;
}
