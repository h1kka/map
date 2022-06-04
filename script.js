let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main= document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let castle = document.querySelector(".arena"); //картина замка
let kirisu = document.querySelector(".mastery"); //картина мастерской

let location2 = document.querySelector(".location2"); //локация 2
let location1=document.querySelector(".location1"); //локация 1
let location3=document.querySelector(".location3"); //ласт локация
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let sword=document.querySelector(".sword"); // ачивка меч
let shield=document.querySelector(".shield"); //ачивка хз

school.onclick = function(){
	main_player.style.top = "32%";
	main_player.style.left = "70%";

	let t=10;

	let timer=function(){
		t=t-1;
		loc2_timeText.innerHTML=t;
		if(t<=0){
			stoptime()
			alert("пахайкинс");
			main.style.display="block";
			location2.style.display="none";
			body.style.backgroundImage="url(bg1.png)";
			body.style.backgroundSize="cover";
		}
	}

	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let interval=setInterval(timer, 1000);
	function stoptime(){
		clearInterval(interval);
	}
	let talk=document.querySelector(".loc2_talk");
	let wrong=document.querySelectorAll(".loc2_variants");
	let write=document.querySelector(".loc2_pravilno");
	let loc2_timeText=document.querySelector(".loc2_timeText");
	function changeLocation2(){
		main.style.display="none";
		location2.style.display="block";
		body.style.background="green";
		setTimeout(showtalk, 1000);
		setTimeout(showvar, 2000);


		for(let i=0; i<5; i=i+1){
			wrong[i].onclick=function(){
				alert("сыыьа");
			} 
		}

		write.onclick=function(){
			stoptime()
			alert("good");
			main.style.display="block";
			location2.style.display="none";
			body.style.backgroundImage="url(bg1.png)";
			body.style.backgroundSize="cover";
			school.style.display="none";
			nojniBox.style.display="block";
			//вернуться обратно в мейн
			//поставить в боди его фон и сайз
			//показать ачивку
		}
	}


	function showtalk(){
		talk.style.display="block";
	}

	function showvar(){
		loc2_variants_block.style.display="block";
	}
	setTimeout(changeLocation2, 1000);
}

castle.onclick=function(){
	
	main_player.style.top="32%";
	main_player.style.left="30%";

	let t=10;

	function timer(){
		t=t-1;
		loc1_timeText.innerHTML=t;
		if(t<=0){
			stoptime()
			alert("пахайкинс");
			main.style.display="block";
			location1.style.display="none";
			body.style.backgroundImage="url(bg1.png)";
			body.style.backgroundSize="cover";
		}
	}

	let loc1_variants_block=document.querySelector(".loc1_variants_block");
	let interval=setInterval(timer, 1000)
	function stoptime(){
		clearInterval(interval);
	}
	let talk=document.querySelector(".loc1_talk");
	let wrong=document.querySelectorAll(".loc1_variants");
	let write=document.querySelector(".loc1_pravilno");
	let loc1_timeText=document.querySelector(".loc1_timeText");

	function changeLocation1(){
		main.style.display="none";
		location1.style.display="block";
		body.style.backgroundImage="url(back.jpg)"
		body.style.backgroundSize="cover"
		setTimeout(showtalk, 1000);
		setTimeout(showvariants, 2000);

		for(let i=0; i<5; i=i+1){
			wrong[i].onclick=function(){
				alert("НЕправильно");
			}
		}

		write.onclick=function(){
			stoptime();
			alert("молодец");
			main.style.display="block";
			location1.style.display="none";
			body.style.backgroundImage="url(bg1.png)";
			body.style.backgroundSize="cover";
			castle.style.display="none";
			sword.style.display="block";
		}
	}

	function showtalk(){
		talk.style.display="block"
	}

	function showvariants(){
		loc1_variants_block.style.display="block"
	}
	setTimeout(changeLocation1, 1000);
}	

kirisu.onclick=function(){
	main_player.style.top="72%";
	main_player.style.left="40%";

	let t=10;

	function timer(){
		t=t-1;
		loc3_timeText.innerHTML=t;
		if(t<=0){
			stoptime();
			alert("пахайкинс");
			main.style.display="block";
			location3.style.display="none";
			body.style.backgroundImage="url(bg1.png)";
			body.style.backgroundSize="cover";
		}
	}

	let loc3_variants_block=document.querySelector('.loc3_variants_block');
	let interval=setInterval(timer, 1000)
	function stoptime(){
		clearInterval(interval);
	}
	let talk=document.querySelector(".loc3_talk");
	let wrong=document.querySelectorAll(".loc3_variants");
	let write=document.querySelector(".loc3_pravilno");
	let loc3_timeText=document.querySelector(".loc3_timeText");

	function changeLocation3(){
		main.style.display="none";
		location3.style.display="block";
		body.style.backgroundImage="url(class.jpg)";
		body.style.backgroundSize="cover";
		setTimeout(showtalk, 1000);
		setTimeout(showvariants, 2000);

		for(let i=0; i<5; i=i+1){
			wrong[i].onclick=function(){
				alert("НЕправильно");
			}
		}

		write.onclick=function(){
			stoptime();
			alert("good job");
			main.style.display="block";
			location3.style.display="none";
			body.style.backgroundImage="url(bg1.png)";
			body.style.backgroundSize="cover";
			kirisu.style.display="none";
			shield.style.display="block";
		}
	}

	function showtalk(){
		talk.style.display="block";
	}

	function showvariants(){
		loc3_variants_block.style.display="block";
	}
	setTimeout(changeLocation3, 1000);
}
