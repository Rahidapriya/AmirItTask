// let words = document.querySelectorAll(".word");
// words.forEach((word) => {
//   let letters = word.textContent.split("");
//   word.textContent = "";
//   letters.forEach((letter) => {
//     let span = document.createElement("span");
//     span.textContent = letter;
//     span.className = "letter";
//     word.append(span);
//   });
// });

// let tl = gsap.timeline({ repeat: -1, defaults: { stagger: 0.05 } });

// words.forEach((word) => {
//   tl.from(
//     word.childNodes,
//     {
//       y: -100,
//       ease: "expo.out"
//     },
//     "<0.3"
//   );
//   tl.to(word.childNodes, {
//     delay: 3,
//     y: 100,
//     ease: "expo.in"
//   });
// });