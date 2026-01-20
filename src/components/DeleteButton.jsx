"use client";

import { useFormStatus } from "react-dom";
import styles from "../../src/css/StudentActions.module.css";

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      className={styles.deleteBtn} 
      disabled={pending}
      onClick={(e) => {
        // Simple confirmation before submitting the form
        if (!confirm("Are you sure? This will delete the student and their details.")) {
          e.preventDefault();
        }
      }}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}