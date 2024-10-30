const questions = [          
    {
        question: "엘리베이터를 탔을때 나는?",
        options: [
            { text: "빨리 올라갔으면 좋겠다", value: 1 },
            { text: "갑자기 멈추거나 사고나면 어떡하지??", value: 2 }
        ]
    },
    {
        question: "방문을 열었는데..!!",
        options: [
            { text: "3cm 짜리 바퀴벌레 100마리^^", value: 1 },
            { text: "2m 짜리 바퀴벌레 한마리^^", value: 2 }
        ]
    },
    {
        question: "친구와 만났다. 그 때 나는?",
        options: [
            { text: "우리 이제 어디갈까?", value: 1 },
            { text: "내가 다 계획이 있어 나만 따라오셈><", value: 2 }
        ]
    },
    {
        question: "길을 가다가 넘어져버렸다... 그 때 나는?",
        options: [
            { text: "너무 쪽팔려ㅠㅠ' 하루종~일 계속 생각한다.", value: 1 },
            { text: "(툭툭 털며) 아무일도 없는 척 일어난다.", value: 2 }
        ]
    },
    {
        question: "선생님께서 어마어마한 방학 과제를 주셨다. 그 때 나는??",
        options: [
            { text: "오늘부터 차근차근! 계획을 세워 수행한다", value: 1 },
            { text: "아직 한달이나 남았으니까~ 전날에 해야겠당!", value: 2 }
        ]
    },
    {
        question: "나는 누구인가",
        options: [
            { text: "컨닝해서 전교 1등!", value: 1 },
            { text: "열심히 공부해서 전교 꼴등!", value: 2 }
        ]
    },
    {
        question: "기회가 된다면 나는?",
        options: [
            { text: "학급 임원을 맡고 싶다!", value: 1 },
            { text: "되도록 조용하게 1년을 보내고 싶다...", value: 2 }
        ]
    },
    {
        question: "학교가 끝난 후",
        options: [
            { text: "집,집,집! 누가 뭐래도 집!!", value: 1 },
            { text: "친구들과 놀면서 스트레스 해소!", value: 2 }
        ]
    },
    {
        question: "친구가 날 보더니 눈물을 흘린다.",
        options: [
            { text: "?? 뭐야 왜울어...??", value: 1 },
            { text: "헐?! 너 왜울어?? 울지마 ㅜㅜ", value: 2 }
        ]
    },
    {
        question: "한 가지만 고를 수 있다면?",
        options: [
            { text: "평생여름!!!", value: 1 },
            { text: "평생 겨울!!!", value: 2 }
        ]
    },
    {
        question: "한명과 사귀어야 한다면?",
        options: [
            { text: "온몸에 털이 가득한 다운이", value: 1 },
            { text: "털이 하나도 없는 준성이", value: 2 }
        ]
    }
];


        let currentQuestionIndex = 0;
        let responses = [];

        function startTest() {
            const startScreen = document.getElementById('startScreen');
            startScreen.remove();

            document.getElementById('questionForm').classList.remove('hidden');
            showQuestion(currentQuestionIndex);
        }

        function showQuestion(index) {
            const questionsContainer = document.getElementById('questionsContainer');
            questionsContainer.innerHTML = ''; 

            const questionObj = questions[index];
            const question = document.createElement('div');
            question.className = 'question';
            question.innerHTML = `<p>${index + 1}. ${questionObj.question}</p>`;

            questionObj.options.forEach(option => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'answer-button';
                button.textContent = option.text; // 수정된 부분
                button.onclick = () => handleAnswer(option.value, button); // value를 전달하도록 수정
                question.appendChild(button);
            });

            questionsContainer.appendChild(question);

            updateSelectedAnswer();

            if (index === questions.length - 1) {
                document.getElementById('submitButton').classList.remove('hidden');
            }
        }

        function handleAnswer(answer, button) {
            responses[currentQuestionIndex] = answer;
            const buttons = document.querySelectorAll('.answer-button');
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');

            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            }
        }

        function updateSelectedAnswer() {
            const selectedAnswerDiv = document.getElementById('selectedAnswer');
            if (responses[currentQuestionIndex]) {
                selectedAnswerDiv.innerHTML = `선택한 답변: ${responses[currentQuestionIndex]}`;
                selectedAnswerDiv.classList.remove('hidden');
            } else {
                selectedAnswerDiv.classList.add('hidden');
            }
        }

        function submitForm(event) {
            event.preventDefault();
            showResult();
        }

        function showResult() {
            document.getElementById('questionForm').classList.add('hidden');
            document.getElementById('resultScreen').classList.remove('hidden');
            const resultMessage = responses.join(', ');
            document.getElementById('resultMessage').textContent = `당신의 응답: ${resultMessage}`;
        }

        function restartTest() {
            location.reload(); // 페이지 리로드로 테스트 초기화
        }