"use server";

import connectDB from "../../src/lib/db.js";
import subject from "../../Models/Admin/subject";
import { redirect } from "next/navigation.js";

export default async function SubjectSubmit(formData) {
  await connectDB();

  const splitField = (s) =>
    (s || "")
      .split("@")
      .map((x) => x.trim())
      .filter(Boolean);

  const title = formData.get("title");
  const slug = formData.get("slug");
  const shortDescription = formData.get("shortDescription");
  const detailedDescription = formData.get("detailedDescription");

  const skills = splitField(formData.get("skills")); // [String]
  const responsibilities = splitField(formData.get("responsibilities"));
  const salaryRange = formData.get("salaryRange");
  const examples = splitField(formData.get("examples"));

  const rtitleRaw = formData.get("rtitle");
  const rurlRaw = formData.get("rurl");

  const rtitleArr = splitField(rtitleRaw); // split on "@"
  const rurlArr = splitField(rurlRaw);

  const resources = rtitleArr.map((t, i) => ({
    title: t,
    url: rurlArr[i] || "",
  }));

  const futureScope = splitField(formData.get("futureScope"));
  const challenges = splitField(formData.get("challenges"));
  const commonInterviewQuestions = splitField(
    formData.get("commonInterviewQuestions")
  );

  // Career progression: one or more stages
  const rawStageTitles = (formData.get("cptitle") || "").trim();
  const rawStagePoints = (formData.get("cpbulletPoints") || "").trim();

  const stageTitles = rawStageTitles
    .split("@")
    .map((t) => t.trim())
    .filter(Boolean);

  const stagePointsByStage = rawStagePoints
    .split("@")
    .map((seg) =>
      seg
        .split("|")
        .map((p) => p.trim())
        .filter(Boolean)
    );

  const careerProgression = stageTitles.map((title, idx) => ({
    title,
    bulletPoints: stagePointsByStage[idx] || [],
  }));

    // Certifications (multiple, @ separated)
  const rawCTitle = formData.get("ctitle");
  const rawCDescription = formData.get("cdescription");

  const cTitles = splitField(rawCTitle);        // ["Meta...", "Google UX..."]
  const cDescriptions = splitField(rawCDescription); // ["desc1", "desc2"]

  const certifications = cTitles.map((t, idx) => ({
    title: t,
    description: cDescriptions[idx] || "",
  }));

  // Key tools (multiple, @ separated)
  const rawKTitle = formData.get("ktitle");
  const rawKDescription = formData.get("kdescription");

  const kTitles = splitField(rawKTitle);
  const kDescriptions = splitField(rawKDescription);

  const keytools = kTitles.map((t, idx) => ({
    title: t,
    description: kDescriptions[idx] || "",
  }));


  // FAQs
  const rawFaqQuestions = formData.get("faqQuestions");
  const rawFaqAnswers = formData.get("faqAnswers");

  const faqQuestions = splitField(rawFaqQuestions);
  const faqAnswers = splitField(rawFaqAnswers);

  const faqs = faqQuestions.map((q, idx) => ({
    question: q,
    answer: faqAnswers[idx] || "",
  }));

  try {
    const data = new subject({
      title,
      slug,
      shortDescription,
      detailedDescription,
      skills,
      responsibilities,
      salaryRange,
      examples,
      resources,
      futureScope,
      challenges,
      commonInterviewQuestions,
      careerProgression,
      certifications,
      keytools,
      faqs, // <-- new field
    });

    await data.save();
    console.log("data got saved in the db");
  } catch (err) {
    console.error("Error will storing subject details", err);
    return { success: false, error: "Failed to save subject" };
  }

  redirect("/admin/validate");
}
