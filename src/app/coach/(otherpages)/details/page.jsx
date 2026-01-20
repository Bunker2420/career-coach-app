// app/(coach)/coach/details/page.jsx

import styles from '../../../../css/coachdtls.module.css';
import { redirect } from 'next/navigation';
import connectDB from '../../../../lib/db';
import coachdtls from '../../../../../Models/CoachUser/coachdetails';
import subject from '../../../../../Models/Admin/subject';
import { getSessionFromCookie } from '../../../../lib/authSession';
import createCoachDetails from '../../../../../actions/coach/detail';

export default async function CoachDetailsPage() {
  const session = await getSessionFromCookie();
  if (!session || session.role !== 'coach') {
    redirect('/coach/authRequired');
  }

  await connectDB();

  const coachData = await coachdtls.findOne({ coachId: session.id });
  if (coachData) {
    redirect('/coach');
  }

  const allSubjects = await subject.find({}, 'title').lean();
  const preselectedTitles = coachData?.subjectsTaught || [];

  return (
    <>
      <div className={styles.coachFormContainer}>
        <h2 className={styles.formTitle}>Complete Profile</h2>

        <form action={createCoachDetails} className={styles.formRoot}>
          <div className={styles.formGrid}>
            <input
              name="name"
              defaultValue={coachData?.name || ''}
              placeholder="Full Name"
              className={styles.formInput}
              required
            />
            <input
              name="personalEmail"
              type="email"
              defaultValue={coachData?.personalEmail || ''}
              placeholder="Personal Email"
              className={styles.formInput}
              required
            />
            <input
              name="company"
              defaultValue={coachData?.company || ''}
              placeholder="Company"
              className={styles.formInput}
              required
            />
            <input
              name="position"
              defaultValue={coachData?.position || ''}
              placeholder="Position"
              className={styles.formInput}
              required
            />
            <input
              name="experienceYears"
              type="number"
              min="0"
              defaultValue={coachData?.experienceYears || ''}
              placeholder="Years of Experience"
              className={styles.formInput}
              required
            />
          </div>

          {/* Subjects custom multi-select */}
          <div>
            <label className={styles.subjectsLabel}>Subjects Taught</label>

            {/* Hidden real multi-select (for form submission) */}
            <select
              name="subjectsTaught"
              multiple
              className={styles.hiddenSelect}
              defaultValue={preselectedTitles}   // array of titles
            >
              {allSubjects.map((subj) => (
                <option key={subj.title} value={subj.title}>
                  {subj.title}
                </option>
              ))}
            </select>

            {/* Visible UI */}
            <div
              className={styles.subjectsWrapper}
              data-preselected={JSON.stringify(preselectedTitles)}
            >
              <div className={styles.chipContainer} data-chips></div>

              <div className={styles.optionList}>
                {allSubjects.map((subj) => (
                  <label
                    key={subj.title}
                    className={styles.optionItem}
                    data-value={subj.title}
                  >
                    <input
                      type="checkbox"
                      className={styles.optionCheckbox}
                    />
                    <span className={styles.optionTitle}>{subj.title}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <textarea
            name="bio"
            defaultValue={coachData?.bio || ''}
            placeholder="Short Bio"
            className={`${styles.formTextarea} ${styles.bio}`}
            required
          />

          <textarea
            name="aboutContent"
            defaultValue={coachData?.aboutContent || ''}
            placeholder="Detailed About Content"
            className={`${styles.formTextarea} ${styles.about}`}
            required
          />

          <label className={styles.formLabel}>
            <input
              type="checkbox"
              name="available"
              defaultChecked={coachData?.available ?? true}
              className={styles.formCheckbox}
            />
            <span>Currently Available for new students</span>
          </label>

          <button type="submit" className={styles.submitButton}>
            Save Profile
          </button>
        </form>
      </div>

      {/* script unchanged except it now works with titles instead of ids */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function () {
              var wrapper = document.querySelector('.subjectsWrapper');
              if (!wrapper) return;

              var hiddenSelect = document.querySelector('select[name="subjectsTaught"]');
              var chipsContainer = wrapper.querySelector('[data-chips]');
              var checkboxes = wrapper.querySelectorAll('input[type="checkbox"]');
              var preselected = [];
              try {
                preselected = JSON.parse(wrapper.getAttribute('data-preselected') || '[]');
              } catch (e) {}

              function syncFromPreselected() {
                checkboxes.forEach(function (cb) {
                  var val = cb.closest('[data-value]').getAttribute('data-value');
                  cb.checked = preselected.includes(val);
                });
                renderChips();
              }

              function renderChips() {
                chipsContainer.innerHTML = '';
                var selectedLabels = [];
                checkboxes.forEach(function (cb) {
                  if (cb.checked) {
                    var parent = cb.closest('[data-value]');
                    var val = parent.getAttribute('data-value');
                    var text = parent.querySelector('span').textContent;
                    selectedLabels.push({ val: val, text: text });
                  }
                });

                Array.from(hiddenSelect.options).forEach(function (opt) {
                  opt.selected = selectedLabels.some(function (s) { return s.val === opt.value; });
                });

                selectedLabels.forEach(function (item) {
                  var chip = document.createElement('button');
                  chip.type = 'button';
                  chip.className = 'chip';
                  chip.textContent = item.text;
                  chip.dataset.value = item.val;
                  chip.addEventListener('click', function () {
                    checkboxes.forEach(function (cb) {
                      var v = cb.closest('[data-value]').getAttribute('data-value');
                      if (v === item.val) cb.checked = false;
                    });
                    renderChips();
                  });
                  chipsContainer.appendChild(chip);
                });

                if (!selectedLabels.length) {
                  var placeholder = document.createElement('span');
                  placeholder.className = 'chipPlaceholder';
                  placeholder.textContent = 'Select subjects below';
                  chipsContainer.appendChild(placeholder);
                }
              }

              checkboxes.forEach(function (cb) {
                cb.addEventListener('change', renderChips);
              });

              syncFromPreselected();
            });
          `,
        }}
      />
    </>
  );
}
