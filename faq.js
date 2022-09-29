const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

faqData.map((faq) => {
  const div_faq = document.createElement("div");
  div_faq.classList.add("faq");

  const div_header = document.createElement("div");
  div_header.classList.add("faq_header"); 

  const div_answer = document.createElement("div");
  div_answer.classList.add("answer", "hidden");
  
  const h3 = document.createElement("h3");
  h3.innerText = faq.question;
  const button = document.createElement("button");
  button.innerText = "+";
  button.classList.add("show_btn");

  const answer = document.createElement("p");
  answer.innerText = faq.answer;


  div_header.appendChild(h3);
  div_header.appendChild(button);
  div_answer.appendChild(answer);

  div_faq.appendChild(div_header);
  div_faq.appendChild(div_answer);

  accordianBody?.appendChild(div_faq);
});

const button = document.getElementsByTagName("button");
const answer = document.getElementsByClassName("answer");

function showFaq(i) {
  answer[i].classList.toggle("hidden");
  button[i].innerText === "+" ? button[i].innerText = "-" : button[i].innerText = "+";
}

for (let i=0; i<button.length; i++){
  button[i].addEventListener("click", function(){showFaq(i)});
}

