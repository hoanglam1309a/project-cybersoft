const kmCounterEle = document.getElementById("soKM");
const timeCounterEle = document.getElementById("thoiGianCho");
const btnPaymentEle = document.querySelector(".payment");
const totalMoneyEle = document.querySelector("#divThanhTien");
const textTotalMoneyEle = document.querySelector("#xuatTien");
const messengerEle = document.querySelector(".messenger");
const typeCar = document.querySelectorAll(".getTypeCar");
const nameUber = document.querySelector(".nameUber");

let quantityKM1 = document.querySelector(".quantityKM1");
let costKM1 = document.querySelector(".costKM1");
let quantityKM2 = document.querySelector(".quantityKM2");
let costKM2 = document.querySelector(".costKM2");
let quantityKM3 = document.querySelector(".quantityKM3");
let costKM3 = document.querySelector(".costKM3");

let quantityTime = document.querySelector(".quantityTime");
let costTime = document.querySelector(".costTime");
let subTotal = document.querySelector(".subtotal");

let typeCarChecked;
let totalMoney;

// Khai báo giá tiền
const GIATIENUBERX_1 = 8000;
const GIATIENUBERX_2 = 12000;
const GIATIENUBERX_3 = 10000;
const GIATIENUBERX_CHO = 2000;

const GIATIENUBERSUV_1 = 9000;
const GIATIENUBERSUV_2 = 14000;
const GIATIENUBERSUV_3 = 12000;
const GIATIENUBERSUV_CHO = 3000;

const GIATIENUBERBLACK_1 = 10000;
const GIATIENUBERBLACK_2 = 16000;
const GIATIENUBERBLACK_3 = 14000;
const GIATIENUBERBLACK_CHO = 4000;

function getTypeCar() {
  for (i = 0; i < typeCar.length; i++) {
    if (typeCar[i].checked) {
      typeCarChecked = typeCar[i].id;
    }
  }
}

function calcMoney(km, time, price1, price2, price3, pricetime) {
  if (km < 1) {
    totalMoney = km * price1 + time * pricetime;
  } else if (km >= 1 && km <= 20) {
    totalMoney = 1 * price1 + (km - 1) * price2 + time * pricetime;
  } else if (km > 20) {
    totalMoney =
      1 * price1 + 19 * price2 + (km - 20) * price3 + time * pricetime;
  }
}

function renderBill(name, km, time, price1, price2, price3, priceTime) {
  quantityKM1.innerHTML = km < 1 ? km : 1;
  if (km - 1 > 0 && km <= 20) {
    quantityKM2.innerHTML = km - 1;
  } else if (km > 20) {
    quantityKM2.innerHTML = 19;
  }
  quantityKM3.innerHTML = km - 20 > 0 ? km - 20 : 0;
  quantityTime.innerHTML = time;

  costKM1.innerHTML = price1;
  costKM2.innerHTML = price2;
  costKM3.innerHTML = price3;
  costTime.innerHTML = priceTime;

  nameUber.innerHTML = name;
  subTotal.innerHTML = totalMoney.toLocaleString();
  console.log(name);
}

btnPaymentEle.addEventListener("click", function () {
  let kmCounterValue = Number(kmCounterEle.value);
  let timeCounterValue = Number(timeCounterEle.value);
  // Check type of data input
  if (isNaN(kmCounterValue) || isNaN(timeCounterValue)) {
    totalMoneyEle.style.display = "none";
    messengerEle.style.display = "block";
    return;
  } else {
    messengerEle.style.display = "none";
    getTypeCar();
    switch (typeCarChecked) {
      case "uberX":
        calcMoney(
          kmCounterValue,
          timeCounterValue,
          GIATIENUBERX_1,
          GIATIENUBERX_2,
          GIATIENUBERX_3,
          GIATIENUBERX_CHO
        );
        renderBill(
          "UberX",
          kmCounterValue,
          timeCounterValue,
          GIATIENUBERX_1,
          GIATIENUBERX_2,
          GIATIENUBERX_3,
          GIATIENUBERX_CHO
        );
        break;
      case "uberSUV":
        calcMoney(
          kmCounterValue,
          timeCounterValue,
          GIATIENUBERSUV_1,
          GIATIENUBERSUV_2,
          GIATIENUBERSUV_3,
          GIATIENUBERSUV_CHO
        );
        renderBill(
          "UberSUV",
          kmCounterValue,
          timeCounterValue,
          GIATIENUBERSUV_1,
          GIATIENUBERSUV_2,
          GIATIENUBERSUV_3,
          GIATIENUBERSUV_CHO
        );
        break;
      case "uberBlack":
        calcMoney(
          kmCounterValue,
          timeCounterValue,
          GIATIENUBERBLACK_1,
          GIATIENUBERBLACK_2,
          GIATIENUBERBLACK_3,
          GIATIENUBERBLACK_CHO
        );
        renderBill(
          "UberBlack",
          kmCounterValue,
          timeCounterValue,
          GIATIENUBERBLACK_1,
          GIATIENUBERBLACK_2,
          GIATIENUBERBLACK_3,
          GIATIENUBERBLACK_CHO
        );
        break;
    }
    totalMoneyEle.style.display = "block";
    textTotalMoneyEle.innerHTML = totalMoney.toLocaleString();
  }
});
