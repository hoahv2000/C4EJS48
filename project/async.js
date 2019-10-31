async function getData () {
    const res = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
    const data = res.data;

    let table = document.getElementById('my--table');
    let tBodyContent = '';
    data.forEach(record => {
        let id = record.id
        let name = record.employee_name
        let age = record.employee_age
        let salary = record.employee_salary
        
        let template = `<tr>
            <th>
                <a href="./employee.html?employee_id=${id}">${id}</a>
            </th>
            <th>${name}</th>
            <th>${age}</th>
            <th>${salary}</th>
        </tr>`
        tBodyContent += template
    })
    table.tBodies[0].innerHTML = tBodyContent
}
getData();

