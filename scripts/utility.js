// Set Value Function
function setValueById(ticketBooked, value) {
  const element = document.getElementById(ticketBooked); //seat book
  element.innerText = value;
}
setValueById("seat-booked", 0);
setValueById("seat-left", 40);
setValueById("total", 0);
setValueById("grand-total", 0);
const allSeats = document.querySelectorAll(".seat");

// Seat Button Functionality
for (const singleSeat of allSeats) {
  singleSeat.addEventListener("click", function (event) {
    // Getting Target Clicked
    const clickedElement = event.target;
    const clickedSeat = clickedElement.innerText;

    // Updating Booking
    const cBooking = document.getElementById("seat-booked");
    const cBookingText = cBooking.innerText;
    const currentBooking = parseInt(cBookingText);

    const cLeft = document.getElementById("seat-left");
    const cLeftText = cLeft.innerText;
    const currentLeft = parseInt(cLeftText);

    const cTotal = document.getElementById("total");
    const cTotalText = cTotal.innerText;
    const currentTotal = parseInt(cTotalText);

    const cGrandTotal = document.getElementById("grand-total");
    const cGrandTotalText = cGrandTotal.innerHTML;
    const currentGrandTotal = parseInt(cGrandTotalText);

    if (currentBooking < 4) {
      const newBooking = currentBooking + 1;
      cBooking.innerText = newBooking;
      const newLeft = currentLeft - 1;
      cLeft.innerText = newLeft;
      const newTotal = currentTotal + 550;
      cTotal.innerText = newTotal;
      const newGrandTotal = currentGrandTotal + 550;
      cGrandTotal.innerText = newGrandTotal;

      // Creating Apending Elements
      const costGrid = document.getElementById("cost-grid");
      const div = document.createElement("div");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");

      // Appending Elements
      costGrid.append(div);
      div.classList.add("col-span-3", "grid", "grid-cols-3");
      div.appendChild(p1);
      p1.innerText = clickedSeat;
      p1.classList.add("text-lg", "text-gray-500");
      div.appendChild(p2);
      p2.classList.add("text-lg", "text-gray-500");
      p2.innerText = "Economy";
      div.appendChild(p3);
      p3.classList.add("text-lg", "text-gray-500", "text-right");
      p3.innerText = 550;

      // Setting Background and Disabled
      clickedElement.setAttribute("disabled", true);
      clickedElement.setAttribute("style", "background:#1DD100; color:white");

      // Unlocking Apply Button
      if (newTotal > 2100) {
        const applyElement = document.getElementById("apply");
        applyElement.removeAttribute("disabled");
      }

      const nameInput = document.getElementById("passenger-name").value;

      if (newTotal > 0 && (nameInput !== null || nameInput !== "")) {
        const nextBtn = document.getElementById("next-btn");
        nextBtn.removeAttribute("disabled");
      }
    }
  });
}

document.getElementById("apply").addEventListener("click", function () {
  const couponElement = document.getElementById("coupon");
  const couponText = couponElement.value;
  // console.log(couponText);

  const cGrandTotal = document.getElementById("grand-total");
  const cGrandTotalText = cGrandTotal.innerHTML;
  const GrandTotal = parseInt(cGrandTotalText);
  // console.log(GrandTotal);

  if (couponText == "NEW15") {
    const disValue15 = (GrandTotal * 15) / 100;
    const ultGrandTotal15 = GrandTotal - disValue15;
    setValueById("grand-total", ultGrandTotal15);

    // Hiding Apply Button
    const inputFieldElement = document.getElementById("input-field");
    inputFieldElement.classList.add("hidden");

    // Creating Discount Element
    const belowAppendElement = document.getElementById("place-to-discount");
    const priceP1 = document.createElement("p");
    const priceP2 = document.createElement("p");

    // Appending Discount Element
    belowAppendElement.appendChild(priceP1);
    priceP1.classList.add("text-lg", "font-medium");
    priceP1.innerText = "Discount";
    belowAppendElement.appendChild(priceP2);
    priceP2.classList.add("text-lg", "font-medium");
    priceP2.innerText = "BDT " + disValue15;
  } else if (couponText == "Couple 20") {
    const disValue20 = (GrandTotal * 20) / 100;
    const ultGrandTotal20 = GrandTotal - disValue20;
    setValueById("grand-total", ultGrandTotal20);

    // Hiding Apply Button
    const inputFieldElement = document.getElementById("input-field");
    inputFieldElement.classList.add("hidden");

    // Creating Discount Element
    const belowAppendElement = document.getElementById("place-to-discount");
    const priceP1 = document.createElement("p");
    const priceP2 = document.createElement("p");

    // Appending Discount Element
    belowAppendElement.appendChild(priceP1);
    priceP1.classList.add("text-lg", "font-medium");
    priceP1.innerText = "Discount";
    belowAppendElement.appendChild(priceP2);
    priceP2.classList.add("text-lg", "font-medium");
    priceP2.innerText = "BDT " + disValue20;
  } else {
    alert("Invalid Coupon Code");
  }
});

document.getElementById("next-btn").addEventListener("click", function () {
  const headerPart = document.getElementById("header-section");
  headerPart.classList.add("hidden");
  const mainPart = document.getElementById("main-section");
  mainPart.classList.add("hidden");
  const footerPart = document.getElementById("footer-part");
  footerPart.classList.add("hidden");
  const successPart = document.getElementById("success-part");
  successPart.classList.remove("hidden");
});

document.getElementById("success-part").addEventListener("click", function () {
  const headerPart = document.getElementById("header-section");
  headerPart.classList.remove("hidden");
  const mainPart = document.getElementById("main-section");
  mainPart.classList.remove("hidden");
  const footerPart = document.getElementById("footer-part");
  footerPart.classList.remove("hidden");
  const successPart = document.getElementById("success-part");
  successPart.classList.add("hidden");
});
