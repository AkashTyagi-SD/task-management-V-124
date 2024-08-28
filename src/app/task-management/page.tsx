import { FC } from "react";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TaskManagement from "@/components/TaskManagement/TaskManagement";

const TaskManagementPage: FC = () => {
  return (
    <DefaultLayout>
      <TaskManagement />
    </DefaultLayout>
  );
};

export default TaskManagementPage;
