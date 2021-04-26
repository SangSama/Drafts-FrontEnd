// 1 danh sách các câu hỏi có sẵn, mỗi câu có 1 đáp án đúng, next chuyển câu có thể quay trở lại chọn lại, tổng hợp lại số điểm.

const listQuestions = [{
        id: 1,
        question: "correct answer: a",
        answer: {
            a: "aaaaa",
            b: "bbbbb",
            c: "ccccc",
            d: "ddddd"
        },
        correct: "a",
        status: false
    },
    {
        id: 2,
        question: "correct answer: b",
        answer: {
            a: "aaaaaaaaaa",
            b: "bbbbbbbbbb",
            c: "cccccccccc",
            d: "dddddddddd"
        },
        correct: "b",
        status: false
    },
    {
        id: 3,
        question: "correct answer: c",
        answer: {
            a: "aaaaa",
            b: "bbbbb",
            c: "ccccc",
            d: "ddddd"
        },
        correct: "c",
        status: false
    },
    {
        id: 4,
        question: "correct answer: d",
        answer: {
            a: "aaaaabbb",
            b: "bbbbbaaa",
            c: "cccccddd",
            d: "dddddccc"
        },
        correct: "d",
        status: false
    }
];

const temporaryMemoryAnswer = [];

const showData = (index) => {
    let data =
        `
        <h2> Question ${index} / ${listQuestions.length}: </h2>
        <p>${listQuestions[index - 1].question}</p>
        <div class = "answer">
            <ul>
                <li>
                    <input type="radio" class="a${index}" name="answer" value="" onclick="checkStatusAnswer(${index-1},'a')" >${listQuestions[index - 1].answer.a}
                </li>
                <li>
                    <input type="radio" class="b${index}" name="answer" value="" onclick="checkStatusAnswer(${index-1},'b')">${listQuestions[index - 1].answer.b}
                </li>
                <li>
                    <input type="radio" class="c${index}" name="answer" value="" onclick="checkStatusAnswer(${index-1},'c')">${listQuestions[index - 1].answer.c}
                </li>
                <li>
                    <input type="radio" class="d${index}" name="answer" value="" onclick="checkStatusAnswer(${index-1},'d')">${listQuestions[index - 1].answer.d}
                </li>
            </ul>
        </div>
        `;
    let paginationData =
        `
        <ul class="pagination">
            <li class="page-item" onclick="buttonPrevious(${index})"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item" onclick="buttonNext(${index})"><a class=" page-link" href="#">Next</a></li>
            <li class="page-item" onclick="buttonSubmit()"><button type="submit">Submit</button></li>
        </ul>
        `
    document.getElementsByClassName("question")[0].innerHTML = data;
    document.getElementsByClassName("pagination_Quiz")[0].innerHTML = paginationData;
    if (temporaryMemoryAnswer[index - 1]) {
        let idCheck = temporaryMemoryAnswer[index - 1] + index;
        document.getElementsByClassName(idCheck)[0].setAttribute("checked", "");
    }
};

showData(1);

const checkStatusAnswer = (index, memoryAnswer) => {
    temporaryMemoryAnswer[index] = memoryAnswer;
    listQuestions[index].status = true;
}

const buttonPrevious = (index) => {
    if (index > 1) {
        index--;
    };
    showData(index);
};

const buttonNext = (index) => {
    if (index < listQuestions.length) {
        index++;
    };
    showData(index);
};

const buttonSubmit = () => {
    let check = 0;
    let count = 0;
    let notify = "";
    listQuestions.map(item => {
        if (item.status == false) {
            check = 1;
        }
    });
    if (check == 0) {
        listQuestions.map((item, index) => {
            if (item["correct"] === temporaryMemoryAnswer[index]) {
                count++;
            }
        })
        notify +=
            `
            <h4>Total score: ${count}/${listQuestions.length}</h4>
            `
    } else if (check == 1) {
        notify += "need to answer all";
    }
    document.getElementsByClassName("point")[0].innerHTML = notify;
};