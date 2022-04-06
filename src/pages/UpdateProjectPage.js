import UpdateProject from "../components/UpdateProject/UpdateProject";
import {TitleSection} from "../components/Projects/ProjectOrganization";

const UpdateProjectPage = () => {
  return (
    <div>
      <TitleSection title="Update your project" marginLeftTitle="50%" />
      <UpdateProject />
    </div>
  );
};

export default UpdateProjectPage;
