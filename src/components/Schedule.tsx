const ROWS: Array<[string, string, string, string]> = [
  ["Monday", "07:00 · 17:30", "Sunrise Flow · Hatha", "Jonah · Maya"],
  ["Tuesday", "12:15 · 18:00", "Vinyasa Flow · Yin", "Jonah · Priya"],
  ["Wednesday", "07:00 · 17:30", "Sunrise Flow · Breathwork & Meditation", "Maya · Priya"],
  ["Thursday", "12:15 · 18:00", "Hatha · Vinyasa Flow", "Maya · Jonah"],
  ["Friday", "07:00 · 16:30", "Sunrise Flow · Prenatal", "Jonah · Maya"],
  ["Saturday", "09:00 · 11:00", "Vinyasa Flow · Yin", "Priya · Tomas"],
  ["Sunday", "10:00 · 16:00", "Hatha · Breathwork & Meditation", "Maya · Priya"],
];

export default function Schedule() {
  return (
    <section className="section" id="schedule" aria-labelledby="schedule-heading">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Schedule</p>
          <h2 id="schedule-heading">
            The week, <em>unhurried</em>
          </h2>
          <p>
            Two classes a day, every day. Doors open twenty minutes before
            each class — come early, have tea, settle in.
          </p>
        </div>

        <div data-reveal>
          <table className="schedule-table">
            <caption>Weekly class timetable at Sama Yoga.</caption>
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Times</th>
                <th scope="col">Classes</th>
                <th scope="col">Teachers</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([day, time, cls, teacher]) => (
                <tr key={day}>
                  <th scope="row" className="day">
                    {day}
                  </th>
                  <td className="time">{time}</td>
                  <td>{cls}</td>
                  <td className="teacher">{teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
