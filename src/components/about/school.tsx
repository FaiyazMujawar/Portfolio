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
      <h6>{school.institute}</h6>
      <p className='pe-3 mb-0'>{school.course}</p>
      <span>
        {school.result.indicator}: {school.result.result}
      </span>
    </div>
  );
}

export default School;
