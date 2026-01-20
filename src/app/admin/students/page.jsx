import connectDB from "../../../../src/lib/db";
import student from "../../../../Models/StudentUser/student";
import { deleteStudent } from "../../../../actions/admin/studentaction"; // Import your action
import DeleteButton from "../../../components/DeleteButton";
import styles from "../../../css/StudentActions.module.css";
import { redirect } from "next/navigation";
import { getSessionFromCookie } from "../../../lib/authSession";

export default async function ManageStudents() {
  await connectDB();
  const session = await getSessionFromCookie();
    if(!session || session.role !== 'admin')
    {
      redirect('/admin/authRequired');
    }
  // 1. Fetch data directly on the server
  // lean() makes it a plain JS object (faster for display)
  const students = await student.find({}, "username email role").lean(); 

  // Convert _id to string to avoid passing objects to client components
  const plainStudents = students.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manage Students</h1>

      {plainStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plainStudents.map((student) => (
                <tr key={student._id}>
                  <td className={styles.username}>{student.username}</td>
                  <td>{student.email}</td>
                  <td>
                    {/* SERVER ACTION FORM */}
                    <form action={deleteStudent}>
                      <input type="hidden" name="id" value={student._id} />
                      <DeleteButton />
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}