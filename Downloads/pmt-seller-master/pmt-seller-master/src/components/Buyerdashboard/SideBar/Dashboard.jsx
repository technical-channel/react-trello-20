import React from "react";
import ProjectChart from "./../Dashboard/ProjectChart";
import ListSellers from "./../Dashboard/ListSellers";
import Expense from "./../Dashboard/Expense";
import BudgetChart from "./../Dashboard/BudgetChart";
import ProjectGraph from "./../Dashboard/ProjectGraph";

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-start gap-5 flex-col md:flex-row p-5 bg-cyan ">
        <div className="md:w-[45%] w-full">
          <Expense />
          <BudgetChart />

          <ListSellers />
        </div>
        <div className="md:w-[55%] w-full">
          <ProjectChart />
          <ProjectGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
