import styles from "./student-card.module.css";

export type Student = {
  name: string;
  major: string;
  year: number;
  hobbies: string[];
};

export function createStudent(
  name: string,
  major: string,
  year: number,
  hobbies: string[],
): Student {
  return { name, major, year, hobbies };
}

type StudentCardProps = {
  student: Student;
};

export function StudentCard({ student }: StudentCardProps) {
  return (
    <div className={styles.card}>
      <h2>{student.name}</h2>
      <p>
        {student.major}, Year {student.year}
      </p>
      <p>Hobbies: {student.hobbies.join(", ")}</p>
    </div>
  );
}