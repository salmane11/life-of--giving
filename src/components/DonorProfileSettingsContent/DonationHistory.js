import styles from "./DonationHistory.module.css";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector } from "recharts";
import ContentTable from "./ContentTable";


const data = [
  {
    association_name: "Al Yusr Foundation",
    total_donation: 40,
  },
  {
    association_name: "CAS Club",
    total_donation: 250,
  },
  {
    association_name: "Al Khayr assoiation",
    total_donation: 100,
  },
  {
    association_name: "Al Yusr Foundation",
    total_donation: 30,
  },
  {
    association_name: "CAS Club",
    total_donation: 10,
  },
  {
    association_name: "Al Khayr assoiation",
    total_donation: 75,
  },
  {
    association_name: "Al Yusr Foundation",
    total_donation: 4,
  },
  {
    association_name: "Al Yusr Foundation",
    total_donation: 15,
  },
];

const name = "Your donation history";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    sum,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        fontFamily="Poppins"
        textAnchor="middle"
        fill={fill}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fontFamily="Poppins"
        fill="#ffc900"
      >{`${sum} $`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fontFamily="Poppins"
        fill="#086e7d"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
export default class DonationHistory extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (chartdata, index) => {
    this.setState({
      activeIndex: index,
    });
  };
  

  

  render() {
    
    return (
      <>
        <div className={styles.donationHistory}>
          <div className={styles.wrapper}>
            <h4>Percentage of donations per organization</h4>
            <PieChart width={500} height={300} className={styles.piechart}>
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={this.props.data}
                cx={230}
                cy={130}
                innerRadius={75}
                outerRadius={100}
                fill="#086e7d"
                dataKey="sum"
                onMouseEnter={this.onPieEnter}
              />
            </PieChart>
          </div>
          <div className={styles.totalDonations}>
            <h2>$205</h2>
            <h4>Total of donations</h4>
          </div>
          <div className={styles.totalOrganizations}>
            <h2>20</h2>
            <h4>Total of organization that you helped</h4>
          </div>

          <div className={styles.container}>
            <div className={styles.title}>
              <h1>{name}</h1>
            </div>
            <ContentTable></ContentTable>
          </div>
        </div>
      </>
    );
  }
}
