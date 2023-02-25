export interface Org {
  name: string;
  start: string;
  end?: any;
  position: string;
  workDone: string[];
}

interface OrganizationProps {
  organization: Org;
}

function Organization({ organization }: OrganizationProps) {
  return (
    <div>
      <h6>{organization.name}</h6>
      <p>{organization.position}</p>
    </div>
  );
}

export default Organization;
