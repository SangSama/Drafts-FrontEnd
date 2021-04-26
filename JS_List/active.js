const listMembers = [{
        id: 0,
        name: "ssm",
        team: "web",
        email: "sangsama1999@gmail.com",
        active: "active"
    },
    {
        id: 1,
        name: "tmt",
        team: "3tq",
        email: "34tmt@gmail.com",
        active: "active"
    },
    {
        id: 2,
        name: "cr",
        team: "web",
        email: "caocr7999@gmail.com",
        active: "inactive"
    },
    {
        id: 3,
        name: "mc",
        team: "web",
        email: "chouchou2000@gmail.com",
        active: "active"
    },
    {
        id: 4,
        name: "dbk",
        team: "lag",
        email: "khanhdb1234@gmail.com",
        active: "inactive"
    },
    {
        id: 5,
        name: "hd",
        team: "4in1",
        email: "abcxyz1234@gmail.com",
        active: "inactive"
    },
    {
        id: 6,
        name: "ntt",
        team: "",
        email: "abcxyz1234@gmail.com",
        active: "active"
    },
    {
        id: 7,
        name: "mc",
        team: "web",
        email: "abcxyz1234@gmail.com",
        active: "active"
    },
    {
        id: 8,
        name: "mc",
        team: "web",
        email: "abcxyz1234@gmail.com",
        active: "inactive"
    },
    {
        id: 9,
        name: "mc",
        team: "web",
        email: "abcxyz1234@gmail.com",
        active: "inactive"
    },
    {
        id: 10,
        name: "mc",
        team: "web",
        email: "abcxyz1234@gmail.com",
        active: "active"
    },
    {
        id: 11,
        name: "mc",
        team: "web",
        email: "abcxyz12098@gmail.com",
        active: "inactive"
    },
    {
        id: 12,
        name: "mc",
        team: "web",
        email: "abcxyz127631@gmail.com",
        active: "active"
    },
    {
        id: 13,
        name: "mc",
        team: "web",
        email: "abcxyz6666@gmail.com",
        active: "inactive"
    }
];

var idData = 0;

var check = true;

var indexEdit;

var pageItem = 5;

let n = listMembers.length;

let x;

var checkNumberPage = 1;

const displayPage = () => {
    if (n % pageItem !== 0) {
        x = Math.floor(n / pageItem) + 1;
    } else x = Math.floor(n / pageItem);
    let number =
        `
        <ul class="pagination">
            <li class="page-item" onClick="previousButton()">
                <a class="page-link" href="#">
                    Previous
                </a>
            </li>
            <li class="page-item" data-page="1" onClick="clickNumberPage(1)">
                <a class="page-link" href="#">
                    1
                </a>
            </li>
        `
    for (let i = 2; i <= x; i++) {
        number +=
            `
                <li class="page-item" data-page="${i}" onClick="clickNumberPage(${i})">
                    <a class="page-link" href="#">
                        ${i}
                    </a>
                </li>
            `
    }
    number +=
        `
            <li class="page-item" onClick="nextButton()">
                <a class="page-link" href="#">
                    Next
                </a>
            </li>
        </ul>
        `
    if (x > 1) {
        document.getElementById("numberPage").innerHTML = number;
    }
}

const showData = (Arr) => {
    let list = "";
    Arr.map((data, index) => {
        let text =
            `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.team}</td>
            <td>${data.email}</td>
            <td>${data.active}</td>
            <td>
                <i data-toggle="modal" data-target="#myModal" class="fas fa-edit" data-edit="${index}" onClick="clickEditData(${index})"></i>
                <i class="fas fa-ban" data-delete="${index}" onClick="deleteData(${index})"></i>
            </td> 
        </tr>
        `
        list += text;
    });
    document.getElementById("listData").innerHTML = list;
}

showData(listMembers.slice(0, 5));

displayPage();

const clickNumberPage = (number) => {
    checkNumberPage = number;
    let a = (number - 1) * pageItem;
    let b = number * 5;
    if (n >= b) {
        showData(listMembers.slice(a, b));
    } else showData(listMembers.slice(a, n));
}

const previousButton = () => {
    if (checkNumberPage !== 1) {
        checkNumberPage--;
        clickNumberPage(checkNumberPage);
    }
}

const nextButton = () => {
    if (checkNumberPage !== x) {
        checkNumberPage++;
        clickNumberPage(checkNumberPage);
    }
}

const deleteData = (index) => {
    listMembers.splice(index, 1);
    showData(listMembers);
}

const createData = () => {
    let new_name = document.getElementById("name-data").value;
    let new_team = document.getElementById("team-data").value;
    let new_email = document.getElementById("email-data").value;
    let new_active = document.getElementById("active-data").value;
    listMembers.push({
        id: idData++,
        name: new_name,
        team: new_team,
        email: new_email,
        active: new_active
    });
    showData(listMembers);
}

const clickEditData = (index) => {
    check = false;
    document.getElementById("name-data").value = listMembers[index]["name"];
    document.getElementById("team-data").value = listMembers[index]["team"];
    indexEdit = index;
}

const editData = (indexEdit) => {
    let edit_name = document.getElementById("name-data").value;
    listMembers[indexEdit].name = edit_name;
    let edit_team = document.getElementById("team-data").value;
    listMembers[indexEdit].team = edit_team;
    showData(listMembers);
}

const checkCondition = () => {
    if (check) {
        createData();
    } else editData(indexEdit);
}

const searchMember = (event) => {
    let arrPor = [];
    if (event.keyCode === 13) {
        let valueSearch = document.getElementById("search").value;
        listMembers.map((data, index) => {
            let por = data["name"].search(valueSearch);
            if (por !== -1) {
                arrPor.push(data);
            }
        });
        showData(arrPor);
    }
}