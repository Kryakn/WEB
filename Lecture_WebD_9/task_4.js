const employees = [
  { name: "A", dept: "IT", salary: 50000 },
  { name: "B", dept: "HR", salary: 40000 },
  { name: "C", dept: "IT", salary: 60000 }
];

const deptStats = employees.reduce((acc, emp) => {
  if (!acc[emp.dept]) {
    acc[emp.dept] = { total: 0, count: 0 };
  }
  acc[emp.dept].total += emp.salary;
  acc[emp.dept].count++;
  return acc;
}, {});

const avgSalaries = Object.entries(deptStats).map(([dept, data]) => ({
  dept,
  average: data.total / data.count
}));

const highestDept = avgSalaries.reduce((max, dept) =>
  dept.average > max.average ? dept : max
);

console.log(" Highest Average Salary Department:", highestDept);