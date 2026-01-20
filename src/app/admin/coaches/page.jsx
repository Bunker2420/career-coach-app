import connectDB from "../../../lib/db";
import coach from "../../../../Models/CoachUser/coach";
import { deleteCoach } from "../../../../actions/admin/CoachActions"; 
import DeleteButton from "../../../components/cochDltbtn";
import styles from "../../../css/Coaches.module.css";
import { getSessionFromCookie } from "../../../lib/authSession";
import { redirect } from "next/navigation";


export default async function ManageCoaches() {
  await connectDB();
  const session = await getSessionFromCookie();
  if(!session || session.role !== 'admin')
  {
    redirect('/admin/authRequired');
  }
  
  // Fetch coaches. .lean() returns plain JS objects which are faster.
  const coaches = await coach.find({}, "username email role").lean();

  // Convert _id objects to strings for React
  const plainCoaches = coaches.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manage Coaches</h1>

      {plainCoaches.length === 0 ? (
        <p>No coaches found.</p>
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
              {plainCoaches.map((coach) => (
                <tr key={coach._id}>
                  <td className={styles.username}>{coach.username}</td>
                  <td>{coach.email}</td>
                  <td>
                    {/* Server Action Form */}
                    <form action={deleteCoach}>
                      <input type="hidden" name="id" value={coach._id} />
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