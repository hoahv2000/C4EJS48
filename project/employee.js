console.log(window.location.search.split())

async function getData () {
    const res = await axios.get('http://dummy.restapiexample.com/api/v1/employee');
    const data = res.data;

    let table = document.getElementById('my--table');
    let tBodyContent = '';
    let id = data.id
    let name = data.employee_name
    let age = data.employee_age
    let salary = data.employee_salary
    
    let template = `<tr>
        <th>
            <a href="./employee.html?employee_id=${id}">${id}</a>
        </th>
        <th>${name}</th>
        <th>${age}</th>
        <th>${salary}</th>
    </tr>`
    tBodyContent += template
    table.tBodies[0].innerHTML = tBodyContent
}

getData();