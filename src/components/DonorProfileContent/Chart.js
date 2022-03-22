import styles from "./Chart.module.css";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell,  ResponsiveContainer } from 'recharts';
import Button from '../ui/Button';
import { NavLink } from "react-router-dom";

export default class Chart extends PureComponent{
    constructor(props){
		super(props);
		this.state = { chartdata: this.props.data, activeIndex: 0};	
	}
    
      
    
      handleClick = (chartdata, index) => {
        this.setState({
          activeIndex: index,
        });
      };
      render() {
        const { activeIndex, chartdata } = this.state;
        const activeItem = chartdata[activeIndex];
    
        return (
          <div className={styles.cardChart} >
            <h1 className={styles.title}>Statistics: My Donations Last Months </h1>
            <p className={styles.info}>Click each rectangle to visualize your donations</p>
            <ResponsiveContainer width="90%" height={250}>
              <BarChart width={150} height={40} data={chartdata}>
                <Bar dataKey="Donations" onClick={this.handleClick}>
                  {chartdata.map((entry, index) => (
                    <Cell cursor="pointer" fill={index === activeIndex ? '#ffc900' : '#086e7d'} key={`cell-${index}`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className={styles.result}>{`Donations of "${activeItem.donation_mounth}" in Dollars : ${activeItem.Donations}$`}</p>
            <NavLink to="/donor-profile/donation-history">

            <Button className={styles.moreStatistics}>Show more statistics...</Button>
            </NavLink>
          </div>
        );
      }
    }
    

