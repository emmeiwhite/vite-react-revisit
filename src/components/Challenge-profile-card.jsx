const skills = [
  {
    id: 1,
    skill: 'HTML+CSS',
    proficiency: 5,
    color: 'red'
  },
  {
    id: 2,
    skill: 'JavaScript',
    proficiency: 4,
    color: 'blue'
  },
  {
    id: 3,
    skill: 'ReactJS',
    proficiency: 4,
    color: 'green'
  },
  {
    id: 4,
    skill: 'Redux',
    proficiency: 4,
    color: 'purple'
  },
  {
    id: 5,
    skill: 'Git & Github',
    proficiency: 4,
    color: 'pink'
  },
  {
    id: 6,
    skill: 'Node.JS & Next.JS',
    proficiency: 3.5,
    color: 'orange'
  }
]

export default function ProfileCard() {
  return (
    <article className="profile-card">
      <img
        src="./pizzas/spinaci.jpg"
        alt="Dummy pizza"
      />

      <main className="main-card-content">
        <h1>Imran Rafiq Rather</h1>
        <p>
          With 6+ years of expertise as a Front End Web Developer, I specialize in ReactJS and
          JavaScript programming, crafting dynamic user interfaces with innovative techniques.
        </p>

        <section className="skills">
          {skills.map(skill => (
            <Skill
              {...skill}
              key={skill.key}
            />
          ))}
        </section>
      </main>
    </article>
  )
}

// A Skill component which can be customized
function Skill({ skill, proficiency, color }) {
  return (
    <button
      className="skill"
      style={{ backgroundColor: color }}
    >
      <span>{skill}</span>

      <span>
        {proficiency === 5 && '🌟'}
        {proficiency === 4 && '💪'}
        {proficiency < 4 && '👨🏻‍💻'}
      </span>
    </button>
  )
}
