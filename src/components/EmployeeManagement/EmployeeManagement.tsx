"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/store";
import styles from "./EmployeeManagement.module.css";
import CustomTable from "@/common/Table";
import { fetchEmployees } from "@/app/features/employee-management/empManagementService";

const column = ["EmpId", "Full Name", "Bod", "Photo", "Joining Date", "Status"];

const EmployeeManagement = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { employeeList, loading, error } = useSelector(
    (state: RootState) => state.employee
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <CustomTable
        column={column}
        data={employeeList?.map((item, index) => (
          <tr key={item.email}>
            <td>{`${item.name}-${index + 1}`}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      />
    </div>
  );
};

export default EmployeeManagement;
