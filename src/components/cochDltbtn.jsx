"use client";

import { useFormStatus } from "react-dom";
import styles from "../../src/css/Coaches.module.css";

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      className={styles.deleteBtn} 
      disabled={pending}
      onClick={(e) => {
        // Confirmation dialog
        if (!confirm("Are you sure? This will delete the coach and their profile details.")) {
          e.preventDefault();
        }
      }}
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}