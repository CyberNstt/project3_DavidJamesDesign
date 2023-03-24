//BackgroundChanging

function active() {
	let sliderZone = document.querySelector('.Header'),
		sliderActiveBtn = document.querySelectorAll('.HeaderLimiterSliderBtn');
	sliderZone.addEventListener('click', (active) => {
		const targetS = active.target;
		if (targetS.classList.contains('HeaderLimiterSliderBtn')) {
			sliderActiveBtn.forEach(sActiveBtn => sActiveBtn.classList.remove('HeaderLimiterSliderBtnActive'));
			targetS.classList.add('HeaderLimiterSliderBtnActive');
		}
	})
}
active()
let headerBg = document.querySelector('.Header');
function firstBackgroundF() {
	headerBg.classList.remove('HeaderBg3');
	headerBg.classList.remove('HeaderBg2');
	headerBg.classList.add('Header');
}
function firstBackgroundS() {
	headerBg.classList.remove('Header');
	headerBg.classList.remove('HeaderBg3');
	headerBg.classList.add('HeaderBg2');
}
function firstBackgroundTh() {
	headerBg.classList.remove('HeaderBg2');
	headerBg.classList.remove('Header');
	headerBg.classList.add('HeaderBg3');
}


// filterFunction
let filterBlock = document.querySelector(".WorksLimiterFlexLeftHeadFilter"), 	// объявляется переменная со значением контейнера с кнопками
	filterItems = document.querySelectorAll(".box"), 														// объявляется переменная со значением блока(всех с этим классом), на который(ые) осуществится влияние
	filterActiveBtn = document.querySelectorAll('.worksFilterBtn'); 						// объявляется переменная со значением кнопки(кнопок), которые будут тригерить событие

function filter() { 																													// функция события фильтр
	filterBlock.addEventListener("click", (event) => { 													// добавление контейнеру события с названием "event" и типов "click"
		const targetF = event.target.dataset["f"];																// объявление константы со значением, цепляющим объекты(из области события) с data-"f"
		let activeTarget = event.target;																					// объявление переменной со значением, цепляющим объекты(из области события)

		if (activeTarget.classList.contains('worksFilterBtn')) {									// если у любого объекта из области есть класс "...", то
			filterActiveBtn.forEach(activeBtn => activeBtn.classList.remove('worksButtonActive')); // для каждого такого объекта срабатывает функция "activeBTn", убирающая класс "эктив" ...
			activeTarget.classList.add('worksButtonActive');												// с последующим добавлением этого класса - это нужно для того, чтобы по клику у кнопок обнулялся этот класс ...
		}																																					// для корректной многоразовой работы

		switch (targetF) {
			case "all":
				getItems("box");
				break;
			case "webDesign":
				getItems(targetF);
				break;
			case "branding":
				getItems(targetF);
				break;
			case "photography":
				getItems(targetF);
				break;
			case "illustration":
				getItems(targetF);
				break;
		}
	});
}
filter();

let linkHide = document.querySelector('.WorksLimiterFlexRightLink');
function getItems(className) {
	filterItems.forEach((item) => {
		if (item.classList.contains(className)) {
			item.classList.remove("WorksScriptHide");
			item.classList.add('WorksScriptAppear');
			linkHide.classList.remove('linkHide');
		} else {
			item.classList.add("WorksScriptHide");
			item.classList.remove('WorksScriptAppear');
			linkHide.classList.add('linkHide');
		}
	});
}
