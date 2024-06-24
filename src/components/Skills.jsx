// App.js
import React from "react"

const skills = [
  { name: "HTML", rating: 90 },
  { name: "CSS", rating: 80 },
  { name: "JavaScript", rating: 85 },
  { name: "Node.js", rating: 75 },
  { name: "React", rating: 85 },
]

const getColor = (rating) => {
  if (rating >= 85) return "bg-green-500"
  if (rating >= 70) return "bg-yellow-500"
  if (rating >= 50) return "bg-orange-500"
  return "bg-red-500"
}

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-8">
        Technical Skills
      </h1>
      <div className="w-full max-w-xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="mb-6"
          >
            <h2 className="text-xl font-semibold mb-2">
              {skill.name}
            </h2>
            <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full ${getColor(
                  skill.rating
                )} rounded-full animate-skill`}
                style={{
                  "--skill-width": `${skill.rating}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
