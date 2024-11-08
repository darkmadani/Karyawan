import {
  fetchEmployees,
  fetchFilteredEmployees,
} from "@/lib/actions/employee.actions";
import TableRow from "../ui/TableRow";

const EmployeeTable = async ({
  query,
  sort,
}: {
  query: string;
  sort: boolean;
}) => {
  const employeesData = await fetchFilteredEmployees(query, sort);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table min-md:table-lg">
        <thead>
          <tr>
            <th className="max-sm:hidden"></th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, index) => (
            <TableRow
              key={employee._id.toString()}
              _id={employee._id.toString()}
              name={employee.name}
              jobTitle={employee.jobTitle}
              department={employee.department}
              salary={employee.salary}
              jabatan={employee.jabatan}
              phone={employee.phone}
              email={employee.email}
              index={index}
            />
          ))}
        </tbody>
      </table>
      {employeesData.length < 1 && (
        <h1 className="text-center text-2xl text-slate-500/70 font-bold mt-10">
          {query ? "No search result!" : "No employees yet!"}
        </h1>
      )}
    </div>
  );
};

export default EmployeeTable;
