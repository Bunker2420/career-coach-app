"use client";

import { useTransition } from "react";
import subscribeToCoach from "../../actions/student/subscribeprogress";
import styles from "../../src/css/dtldcoach.module.css";

const STATUS_LABELS = {
  pending: "Request pending (admin review)",
  active: "Subscription active",
  cancelled: "Request cancelled",
  expired: "Subscription expired",
};

export default function SubscribeButton({ coachId, currentStatus }) {
  const [isPending, startTransition] = useTransition();

  const disabled =
    isPending || currentStatus === "pending" || currentStatus === "active";

  function handleClick() {
    if (disabled) return;

    startTransition(async () => {
      const res = await subscribeToCoach(coachId);
      if (res.ok) {
        alert("Request sent to admin. Status will change to pending.");
        // optional: refresh page
        window.location.reload();
      } else {
        alert(res.error || "Something went wrong.");
      }
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={styles.primaryButton}
    >
      {isPending
        ? "Sending..."
        : currentStatus === "pending"
        ? "Request pending"
        : currentStatus === "active"
        ? "Already subscribed"
        : "View progress & subscribe"}
    </button>
  );
}
