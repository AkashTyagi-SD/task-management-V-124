import { FC } from "react";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import EmployeeManagement from "@/components/EmployeeManagement/EmployeeManagement";

const EmployeeManagementPage: FC = () => {
  return (
    <DefaultLayout>
      <EmployeeManagement />
    </DefaultLayout>
  );
};

export default EmployeeManagementPage;
