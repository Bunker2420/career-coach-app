'use server';

import { redirect } from 'next/navigation';
import connectDB from '../../src/lib/db';
import coachdtls from '../../Models/CoachUser/coachdetails';
import coach from '../../Models/CoachUser/coach';
import { getSessionFromCookie } from '../../src/lib/authSession';

export default async function createCoachDetails(formData) {
  const session = await getSessionFromCookie();
  if (!session || session.role !== 'coach') {
    throw new Error('Unauthorized');
  }

  await connectDB();

  const raw = formData.getAll('subjectsTaught');
  const subjectsArray = raw
    .flat()
    .filter((v) => typeof v === 'string' && v.trim().length > 0);

  const already = await coachdtls.findOne({ coachId: session.id });
  if (already) {
    redirect('/coach');
  }

  const data = new coachdtls({
    coachId: session.id,
    name: formData.get('name'),
    personalEmail: formData.get('personalEmail'),
    bio: formData.get('bio'),
    company: formData.get('company'),
    position: formData.get('position'),
    experienceYears: Number(formData.get('experienceYears')),
    aboutContent: formData.get('aboutContent'),
    subjectsTaught: subjectsArray,    
    available: formData.get('available') === 'on',
  });

  await data.save();
  await coach.findByIdAndUpdate(session.id, {
      $set: { hasCompletedProfile: true },
    });
  
  redirect('/coach');
}
