import { Student, createStudent, StudentCard } from "@/components/StudentCard";

const schoolName: string = "CALPOLY";
let maxStudents: number = 10;

function getGreeting(name: string): string {
  return `Hi, ${name}`;
}

const students: Student[] = [
  { name: "bob", major: "CS", year: 2, hobbies: ["running", "hiking"] },
  { name: "cameron", major: "Business", year: 4, hobbies: ["clubbing"] },
];

export default function StudentPreview() {
  return (
    <main>
      <div>
        <h1>{schoolName} - Profile Cards</h1>
        <p>{getGreeting("class")}</p>
        <p>
          Showing {students.length} of {maxStudents} students
        </p>
        {students.map((student) => (
          <StudentCard key={student.name} student={student} />
        ))}
      </div>
    </main>
  );
}