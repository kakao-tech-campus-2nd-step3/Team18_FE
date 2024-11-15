import { useParams } from 'react-router-dom';
import { useGetMyCompanies } from '@/apis/companies/hooks/useGetMyCompanies';
import { useGetMyRecruitments } from '@/apis/recruitments/hooks/useGetMyRecruitments';
import MyCompany from './MyCompany';
import { Spinner } from '@/components/common';
import { CompanyData } from '@/types';

export default function MyCompanyPage() {
  const { companyId } = useParams();
  const { data: companyList, isLoading: isLoadingCompanies } = useGetMyCompanies();
  const { data: recruitments, isLoading: isLoadingRecruitments } = useGetMyRecruitments(Number(companyId));

  const companyData = companyList?.find((c: CompanyData) => c.companyId.toString() === companyId);
  const recruitmentsData = recruitments;

  if (isLoadingCompanies || isLoadingRecruitments) {
    return <Spinner />;
  }

  return <MyCompany companyData={companyData} recruitmentsData={recruitmentsData} companyId={companyId!} />;
}
