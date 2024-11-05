import { fetchEmployees } from "@/lib/actions/employee.actions";
import { FaUser, FaDollarSign } from "react-icons/fa";


export default async function Home() {
  const employeesData = await fetchEmployees();

  const avgSalary = Math.trunc(
    employeesData.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.salary,
      0
    ) / employeesData.length
  );

  const highestSalary =
    employeesData.length > 0
      ? Math.max(...employeesData.map((employee) => +employee.salary))
      : 0;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Sistem Informasi Manajemen Karyawan</h1>
      <div className="flex flex-wrap gap-4 shadow-lg p-4 bg-base-200 rounded-lg mb-6">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4"></div>
      <div className="join join-vertical lg:join-horizontal shadow-md w-full">
        <div className="join-item p-10">
        <div className="flex justify-center items-center">
          <FaUser className="text-8xl mb-4" />
        </div>
          <p className="text-6xl max-sm:text-4xl font-black text-secondary text-center">
            {employeesData.length}
          </p>
          <p className="text-center opacity-80">Total Karyawan</p>
        </div>
        <div className="join-item p-10">
        <div className="flex justify-center items-center">
          <FaDollarSign className="text-8xl mb-4" />
        </div>
          <p className="text-6xl max-sm:text-4xl font-black text-accent text-center">
            {isNaN(avgSalary) ? 0 : avgSalary}
          </p>
          <p className="text-center opacity-80">Rata - Rata Gaji</p>
        </div>
        <div className="join-item p-10">
        <div className="flex justify-center items-center">
          <FaDollarSign className="text-8xl mb-4" />
        </div>
          <p className="text-6xl max-sm:text-4xl font-black text-secondary text-center">
            {highestSalary}
          </p>
          <p className="text-center opacity-80">Gaji Tertinggi</p>
        </div>
      </div>
    </section>
  );
}
