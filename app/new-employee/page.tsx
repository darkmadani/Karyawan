import EmployeeForm from "@/components/forms/EmployeeForm";

const Page = () => {
  return (
    <section>
      <h1 className="text-head">Karyawan Baru</h1>
      <EmployeeForm btnTitle="Tambah Karyawan" />
    </section>
  );
};

export default Page;
