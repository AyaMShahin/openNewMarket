class StepsComponent {
  constructor(stepsSelector, contentsSelector) {
    this.current = 1;
    this.stepsNode = document.querySelector(stepsSelector);
    this.contentsNode = document.querySelector(contentsSelector);

    this.totalSteps = this.stepsNode.children.length;

    this.stepsNode.querySelectorAll(".step-btn").forEach((step) => {
      step.addEventListener("click", (e) => {
        const targetStep = parseInt(e.target.dataset.step);

        this.contentsNode
          .querySelectorAll(".content")
          .forEach((content) => content.classList.remove("howactive"));
        this.stepsNode
          .querySelectorAll(".step-btn")
          .forEach((content) => content.classList.remove("howactive"));

        this.contentsNode
          .querySelector(`.content[data-step="${targetStep}"]`)
          .classList.add("howactive");
        this.stepsNode
          .querySelector(`button[data-step="${targetStep}"]`)
          .classList.add("howactive");

        this.stepsNode
          .querySelectorAll(".content")
          .forEach((content) => content.classList.remove("howactive"));
        if (targetStep - 1 > 0) {
          const num = targetStep - 1;
          for (let i = 1; i <= num; i++) {
            this.stepsNode
              .querySelector(`div:nth-of-type(${i})`)
              .classList.add("howactive");
          }
        }
      });
    });
  }
}

new StepsComponent("#steps", "#contents");

//FAQ
let summaryCollection = document.getElementsByTagName("summary");
let signsCollection = document.getElementsByClassName("faq-open-icon");

for (let i = 0; i < summaryCollection.length; i++) {
  summaryCollection[i].onclick = function () {
    if (signsCollection[i].innerHTML === "+")
      signsCollection[i].innerHTML = "—";
    else signsCollection[i].innerHTML = "+";
  };
}
