import { useContext, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import useHttp, { organizationshost } from "../../store/requests";
import userContext from "../../store/userContext";

function ProjectsProgression() {
  const [associationProjects, setAssociationProjects] = useState([]);

  const userctx = useContext(userContext);
  const { isLoading, error, sendRequest: getAssociationProjects } = useHttp();

  const transformProjects = (data) => {
    const projects = [];
    for (var key in data) {
      projects.push({
        projectId: data[key].id,
        projectName: data[key].title,
        percentage: (data[key].currentBalance / +data[key].target) * 100,
      });
    }
    setAssociationProjects(projects);
  };

  useEffect(() => {
    getAssociationProjects(
      {
        url: organizationshost + `/organisations/${userctx.userId}/projects`,
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      transformProjects
    );
  }, [getAssociationProjects, userctx.userId, userctx.userToken]);

  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={associationProjects.slice(0, 4)}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="4" />
          <XAxis dataKey="projectName" />
          <YAxis domain={[0, 100]} />
          <Bar maxBarSize={30} dataKey="percentage" fill="#086e7d" />
        </BarChart>
      </ResponsiveContainer>
      {isLoading && <p>isLoading ...</p>}
      {error && <p>{error}</p>}
    </>
  );
}
export default ProjectsProgression;
