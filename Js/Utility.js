const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric'};
    const newDate = !date ? "undefined" :
                    new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}

let site_properties = {
    home_page: "../pages/EmployeePayrollHomePage.html",
    add_emp_payroll_page: "../pages/EmployeePayroll.html"
};

const update = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id)
    if(!empPayrollData) return;
    localStorage.setItem('editEmp', JSON.stringify(empPayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}