export interface ISchool {
  institute: string;
  course: string;
  startYear: string;
  endYear: string;
  result: {
    indicator: string;
    result: string;
  };
}
interface SchoolProps {
  school: ISchool;
}

function School({ school }: SchoolProps) {
  return (
    <div>
      <h5>{school.institute}</h5>
      <h6>{school.course}</h6>
      <p>
        {school.result.indicator}: {school.result.result}
      </p>
    </div>
  );
}

export default School;
