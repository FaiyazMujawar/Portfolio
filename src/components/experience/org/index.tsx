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
      <h5>{organization.name}</h5>
      <h6>{organization.position}</h6>
    </div>
  );
}

export default Organization;
