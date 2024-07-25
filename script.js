document.addEventListener("DOMContentLoaded", () => {
    const headingElement = document.getElementById("heading");
    const values = ["Smart", "Intelligent", "Good Looking"];
    let currentIndex = 0;

    headingElement.addEventListener("click", () => {
      headingElement.textContent = values[currentIndex];
      currentIndex = (currentIndex + 1) % values.length;
    });
  });

const input1 = [1, 2, -2, 11, 7, 1]
const input2 = [1, 4, 7, 2, 4, 7]

const findSecondLargest =(arr)=>{
  let removeDup = [...new Set(arr)]
  let descendingSort = removeDup.sort((a,b)=> b-a)
  let secondLargest = descendingSort[1]
  console.log((secondLargest));
}
const secondlargest1 = findSecondLargest(input1)
const secondlargest2 = findSecondLargest(input2)



