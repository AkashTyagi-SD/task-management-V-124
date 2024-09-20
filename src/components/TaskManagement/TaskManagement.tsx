import styles from "./TaskManagement.module.css";
import CustomTable from "@/common/Table";

const data = [
  {
    name: "Akash",
    email: "akash@gmail.com",
    phone: "87393933",
    status: "Active",
  },
  {
    name: "Akash",
    email: "akash@gmail.com",
    phone: "87393933",
    status: "Active",
  },
];
const column = ["Name", "Email", "Phone", "Status"];
const TaskManagement = () => {
  return (
    <div className={styles.container}>
      <CustomTable
        column={column}
        data={data?.map((item, index) => (
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

export default TaskManagement;
