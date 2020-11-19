
// BOTÃO COM REACT


'use strict';

const e = React.createElement;
var acertou = 1

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Acertou ' + acertou++
    }

    return e(
      'button',
      {onClick: () => this.setState({ liked: true }) },
      'Enviar respostas'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });





// QUESTÕES 0-10

$(document).ready(function () {

	$(".range").ionRangeSlider({
		min: 1,
		max: 10,
		from: 1
	});

});






  
// GRÁFICO

		var visaoEstrategia = 0;
		var dadosTecnologia = 0;
		var processos = 0;
		var alavancasValor = 0;
		var organizacaoCultura = 0;
		var indcadoresMetas = 0;
		var desenvolvimentoHumano = 0;


		function logic (){
			var $radio1 = document.getElementById("question1411");
			var $radio2 = document.getElementById("question1412");
			var $radio3 = document.getElementById("question1413");
			var $radio4 = document.getElementById("question1414");

			if($radio1.checked){
				document.dataset.barChartData(visaoEstrategia=visaoEstrategia+0.25);
			}else{
				visaoEstrategia=visaoEstrategia;
			}
			if($radio2.checked){
				visaoEstrategia=visaoEstrategia+0.5;
			}else{
				visaoEstrategia=visaoEstrategia;
			}
			if($radio3.checked){
				visaoEstrategia=+0.75;
			}else{
				visaoEstrategia=visaoEstrategia;
			}
			if($radio4.checked){
				visaoEstrategia=visaoEstrategia+1;
			}else{
				$div4.onchange(visaoEstrategia=visaoEstrategia);
			}
			
		}


		var color = Chart.helpers.color;
		var barChartData = {
			labels: ["Visão e Estratégia", "Dados e Tecnologia", "Processos", "Alavancas de Valor", "Organização e Cultura", "Indicadores e Metas" , "Desenvolvimento Humano"],
			datasets: [{
				label: 'Acertos por dimensão',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				borderWidth: 1,
				data: [
					visaoEstrategia,
					dadosTecnologia,
					processos,
					alavancasValor,
					organizacaoCultura,
					indcadoresMetas,
					desenvolvimentoHumano
				]
			}]

		};

		window.onload = function() {
			var ctx = document.getElementById("chart-0").getContext("2d");
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData, 
				options: {
					responsive: true,
					legend: {
						position: 'right',
					},


			}
		});

		};



    


	//RESPOSTAS PARA ANÁLISE

	


	// DADOS GERAIS

    
  
  
	  function dados() {
		let diagnostic_name = document.getElementById('diagnostic_name').value;
		let diagnostic_number = document.getElementById('diagnostic_number').value;
		let diagnostic_email = document.getElementById('diagnostic_email').value;
		let diagnostic_company = document.getElementById('diagnostic_company').value;
		let diagnostic_email_confirm = document.getElementById('diagnostic_email_confirm').value;
		let diagnostic_url = document.getElementById('diagnostic_url').value;
		let diagnostic_office = document.getElementById('diagnostic_office').value;
		let diagnostic_area = document.getElementById('diagnostic_area').value;
		document.getElementById('retorno').innerText = " " + diagnostic_name + " - " + diagnostic_email + 
													  "\n " + diagnostic_number + 
													  "\n " + diagnostic_company + " - " + diagnostic_url +
													  "\n " + diagnostic_office + " - " + diagnostic_area;
	  }

 


	// PERFIL

	function q1() {
		var $radio1 = document.getElementById("div1");
		var $div1 = document.getElementById("m1");
		var $radio2 = document.getElementById("div2");
		var $div2 = document.getElementById("m2");
		var $radio3 = document.getElementById("div3");
		var $div3 = document.getElementById("m3");
		var $radio4 = document.getElementById("div4");
		var $div4 = document.getElementById("m4");
		var $radio5 = document.getElementById("div5");
		var $div5 = document.getElementById("m5");
		var $radio6 = document.getElementById("div6");
		var $div6 = document.getElementById("m6");
		if($radio1.checked){
			$div1.removeAttribute("hidden");
		}else{
			$div1.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div2.removeAttribute("hidden"); 
		}else{
			$div2.setAttribute("hidden", "hidden");
		}
		if($radio3.checked){
			$div3.removeAttribute("hidden"); 
		}else{
			$div3.setAttribute("hidden", "hidden");
		}
		if($radio4.checked){
			$div4.removeAttribute("hidden"); 
		}else{
			$div4.setAttribute("hidden", "hidden");
		}
		if($radio5.checked){
			$div5.removeAttribute("hidden"); 
		}else{
			$div5.setAttribute("hidden", "hidden");
		}
		if($radio6.checked){
			$div6.removeAttribute("hidden"); 
		}else{
			$div6.setAttribute("hidden", "hidden");
		}
	}

	function q2() {
		var $radio1 = document.getElementById("div7");
		var $div7 = document.getElementById("m7");
		var $radio2 = document.getElementById("div8");
		var $div8 = document.getElementById("m8");
		var $radio3 = document.getElementById("div9");
		var $div9 = document.getElementById("m9");
		var $radio4 = document.getElementById("div10");
		var $div10 = document.getElementById("m10");
		var $radio5 = document.getElementById("div11");
		var $div11 = document.getElementById("m11");
		if($radio1.checked){
			$div7.removeAttribute("hidden"); 
		}else{
			$div7.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div8.removeAttribute("hidden"); 
		}else{
			$div8.setAttribute("hidden", "hidden");
		}
		if($radio3.checked){
			$div9.removeAttribute("hidden"); 
		}else{
			$div9.setAttribute("hidden", "hidden");
		}
		if($radio4.checked){
			$div10.removeAttribute("hidden"); 
		}else{
			$div10.setAttribute("hidden", "hidden");
		}
		if($radio5.checked){
			$div11.removeAttribute("hidden"); 
		}else{
			$div11.setAttribute("hidden", "hidden");
		}
	}

	function q3() {
		var $radio1 = document.getElementById("div12");
		var $div12 = document.getElementById("m12");
		var $radio2 = document.getElementById("div13");
		var $div13 = document.getElementById("m13");
		var $radio3 = document.getElementById("div14");
		var $div14 = document.getElementById("m14");
		var $radio4 = document.getElementById("div15");
		var $div15 = document.getElementById("m15");
		var $radio5 = document.getElementById("div16");
		var $div16 = document.getElementById("m16");
		if($radio1.checked){
			$div12.removeAttribute("hidden"); 
		}else{
			$div12.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div13.removeAttribute("hidden"); 
		}else{
			$div13.setAttribute("hidden", "hidden");
		}
		if($radio3.checked){
			$div14.removeAttribute("hidden"); 
		}else{
			$div14.setAttribute("hidden", "hidden");
		}
		if($radio4.checked){
			$div15.removeAttribute("hidden"); 
		}else{
			$div15.setAttribute("hidden", "hidden");
		}
		if($radio5.checked){
			$div16.removeAttribute("hidden"); 
		}else{
			$div16.setAttribute("hidden", "hidden");
		}
	}

	function q4() {
		var $radio1 = document.getElementById("div17");
		var $div17 = document.getElementById("m17");
		var $radio2 = document.getElementById("div18");
		var $div18 = document.getElementById("m18");
		var $radio3 = document.getElementById("div19");
		var $div19 = document.getElementById("m19");
		var $radio4 = document.getElementById("div20");
		var $div20 = document.getElementById("m20");
		var $radio5 = document.getElementById("div21");
		var $div21 = document.getElementById("m21");
		if($radio1.checked){
			$div17.removeAttribute("hidden"); 
		}else{
			$div17.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div18.removeAttribute("hidden"); 
		}else{
			$div18.setAttribute("hidden", "hidden");
		}
		if($radio3.checked){
			$div19.removeAttribute("hidden"); 
		}else{
			$div19.setAttribute("hidden", "hidden");
		}
		if($radio4.checked){
			$div20.removeAttribute("hidden"); 
		}else{
			$div20.setAttribute("hidden", "hidden");
		}
		if($radio5.checked){
			$div21.removeAttribute("hidden"); 
		}else{
			$div21.setAttribute("hidden", "hidden");
		}
	}


	function q6() {
		var $radio1 = document.getElementById("div22");
		var $div22 = document.getElementById("m22");
		var $radio2 = document.getElementById("div23");
		var $div23 = document.getElementById("m23");
		var $radio3 = document.getElementById("div24");
		var $div24 = document.getElementById("m24");
		var $radio4 = document.getElementById("div25");
		var $div25 = document.getElementById("m25");
		var $radio5 = document.getElementById("div26");
		var $div26 = document.getElementById("m26");
		if($radio1.checked){
			$div22.removeAttribute("hidden"); 
		}else{
			$div22.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div23.removeAttribute("hidden"); 
		}else{
			$div23.setAttribute("hidden", "hidden");
		}
		if($radio3.checked){
			$div24.removeAttribute("hidden"); 
		}else{
			$div24.setAttribute("hidden", "hidden");
		}
		if($radio4.checked){
			$div25.removeAttribute("hidden"); 
		}else{
			$div25.setAttribute("hidden", "hidden");
		}
		if($radio5.checked){
			$div26.removeAttribute("hidden"); 
		}else{
			$div26.setAttribute("hidden", "hidden");
		}
	}


	function q7() {
		var $radio1 = document.getElementById("div27");
		var $div27 = document.getElementById("m27");
		var $radio2 = document.getElementById("div28");
		var $div28 = document.getElementById("m28");
		var $radio3 = document.getElementById("div29");
		var $div29 = document.getElementById("m29");
		if($radio1.checked){
			$div27.removeAttribute("hidden"); 
		}else{
			$div28.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div28.removeAttribute("hidden"); 
		}else{
			$div28.setAttribute("hidden", "hidden");
		}
		if($radio3.checked){
			$div29.removeAttribute("hidden"); 
		}else{
			$div29.setAttribute("hidden", "hidden");
		}
	}


	function q8() {
		var $radio1 = document.getElementById("div30");
		var $div30 = document.getElementById("m30");
		var $radio2 = document.getElementById("div31");
		var $div31 = document.getElementById("m31");
		var $radio3 = document.getElementById("div32");
		var $div32 = document.getElementById("m32");
		var $radio4 = document.getElementById("div33");
		var $div33 = document.getElementById("m33");
		var $radio5 = document.getElementById("div34");
		var $div34 = document.getElementById("m34");
		if($radio1.checked){
			$div30.removeAttribute("hidden"); 
		}else{
			$div30.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div31.removeAttribute("hidden"); 
		}else{
			$div31.setAttribute("hidden", "hidden");
		}
		if($radio.checked){
			$div32.removeAttribute("hidden"); 
		}else{
			$div32.setAttribute("hidden", "hidden");
		}
		if($radio4.checked){
			$div33.removeAttribute("hidden"); 
		}else{
			$div33.setAttribute("hidden", "hidden");
		}
		if($radio5.checked){
			$div34.removeAttribute("hidden"); 
		}else{
			$div34.setAttribute("hidden", "hidden");
		}
	}


	function q9() {
		var $radio1 = document.getElementById("div35");
		var $div35 = document.getElementById("m35");
		var $radio2 = document.getElementById("div36");
		var $div36 = document.getElementById("m36");
		var $radio3 = document.getElementById("div37");
		var $div37 = document.getElementById("m37");
		var $radio4 = document.getElementById("div38");
		var $div38 = document.getElementById("m38");
		var $radio5 = document.getElementById("div39");
		var $div39 = document.getElementById("m39");
		if($radio1.checked){
			$div35.removeAttribute("hidden"); 
		}else{
			$div35.setAttribute("hidden", "hidden");
		}
		if($radio2.checked){
			$div36.removeAttribute("hidden"); 
		}else{
			$div36.setAttribute("hidden", "hidden");
		}
		if($radio3.checked){
			$div37.removeAttribute("hidden"); 
		}else{
			$div37.setAttribute("hidden", "hidden");
		}
		if($radio4.checked){
			$div38.removeAttribute("hidden"); 
		}else{
			$div38.setAttribute("hidden", "hidden");
		}
		if($radio5.checked){
			$div39.removeAttribute("hidden"); 
		}else{
			$div39.setAttribute("hidden", "hidden");
		}
	}

	// PERGUNTA ARRASTAR - Drag Drop

	function q10() {
		var $draggable1 = document.getElementById("div40");
		var $div40 = document.getElementById("m40");
		var $draggable2 = document.getElementById("div41");
		var $div41 = document.getElementById("m41");
		var $draggable3 = document.getElementById("div42");
		var $div42 = document.getElementById("m42");
		var $draggable4 = document.getElementById("div43");
		var $div43 = document.getElementById("m43");
		var $draggable5 = document.getElementById("div44");
		var $div44 = document.getElementById("m44");
		var $draggable6 = document.getElementById("div45");
		var $div45 = document.getElementById("m45");
		var $draggable7 = document.getElementById("div36");
		var $div46 = document.getElementById("m36");
		var $draggable8 = document.getElementById("div47");
		var $div47 = document.getElementById("m47");
		var $draggable9 = document.getElementById("div48");
		var $div48 = document.getElementById("m48");
		var $draggable10 = document.getElementById("div49");
		var $div49 = document.getElementById("m49");
		/*if($draggable1.checked){
			$div40.removeAttribute("hidden"); 
		}else{
			$div40.setAttribute("hidden", "hidden");
		}
		if($draggable2.checked){
			$div41.removeAttribute("hidden"); 
		}else{
			$div41.setAttribute("hidden", "hidden");
		}
		if($draggable3.checked){
			$div42.removeAttribute("hidden"); 
		}else{
			$div42.setAttribute("hidden", "hidden");
		}
		if($draggable4.checked){
			$div43.removeAttribute("hidden"); 
		}else{
			$div42.setAttribute("hidden", "hidden");
		}
		if($draggable5.checked){
			$div44.removeAttribute("hidden"); 
		}else{
			$div44.setAttribute("hidden", "hidden");
		}
		if($draggable6.checked){
			$div45.removeAttribute("hidden"); 
		}else{
			$div45.setAttribute("hidden", "hidden");
		}
		if($draggable7.checked){
			$div46.removeAttribute("hidden"); 
		}else{
			$div46.setAttribute("hidden", "hidden");
		}
		if($draggable8.checked){
			$div47.removeAttribute("hidden"); 
		}else{
			$div47.setAttribute("hidden", "hidden");
		}
		if($draggable9.checked){
			$div48.removeAttribute("hidden"); 
		}else{
			$div48.setAttribute("hidden", "hidden");
		}
		if($draggable10.checked){
			$div49.removeAttribute("hidden"); 
		}else{
			$div49.setAttribute("hidden", "hidden");
		}*/
	}


	// QUESTÕES 0-10 - Range




	// QUESTÕES ABERTAS

	function openQuestions() {
		let question5 = document.getElementById('question5').value;
		
		document.getElementById('abertas').innerText = question5 + " ";
	  }



	  //LÓGICA DAS QUESTÕES

	
	  